// /src/api/suggest.js

export async function suggestCode(code, prompt) {
    try {
      const response = await fetch('http://127.0.0.1:8000/suggest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code, prompt }),
      });
  
      if (!response.ok) {
        throw new Error(`Server error: ${response.statusText}`);
      }
  
      const data = await response.json();
      return data; // { suggestion, explanation }
    } catch (error) {
      console.error('Error fetching suggestion:', error);
      throw error;
    }
  }
  