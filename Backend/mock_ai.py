import requests

TOGETHER_API_KEY = "20cfe5d8a0b4ad3b4cf48bff67d4c5a3feb64ee279aa977d64f8fd85c37cd0d4"

def generate_suggestion(code: str, prompt: str) -> tuple:
    url = "https://api.together.xyz/v1/chat/completions"
    
    headers = {
        "Authorization": f"Bearer {TOGETHER_API_KEY}",
        "Content-Type": "application/json",
    }

    system_message = (
        "You are an expert code assistant. "
        "When given a code snippet and an instruction, "
        "you must output the improved code FIRST, "
        "then an Explanation section separately."
    )

    payload = {
        "model": "meta-llama/Llama-3.3-70B-Instruct-Turbo-Free",
        "messages": [
            {"role": "system", "content": system_message},
            {"role": "user", "content": f"Here is the code:\n\n{code}\n\nInstruction: {prompt}\n\nPlease return modified code and explanation separately."}
        ],
        "temperature": 0.2,
        "max_tokens": 1024,
    }

    try:
        print("Sending request to Together.ai...")
        print("Payload:", payload)

        response = requests.post(url, headers=headers, json=payload)
        print("Response status:", response.status_code)
        print("Response body:", response.text)

        response.raise_for_status()
        result = response.json()

        full_content = result['choices'][0]['message']['content']

        # Try splitting
        if "Explanation:" in full_content:
            parts = full_content.split("Explanation:", 1)
            suggestion = parts[0].strip()
            explanation = parts[1].strip()
        else:
            suggestion = full_content
            explanation = "No explanation provided separately."

        return suggestion, explanation

    except Exception as e:
        print(f"Error: {e}")
        return "Error in code suggestion", "Unable to fetch explanation."
