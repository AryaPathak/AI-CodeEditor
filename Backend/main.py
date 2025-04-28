from fastapi import FastAPI
from pydantic import BaseModel
from mock_ai import generate_suggestion

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins for now, adjust this for production
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods (GET, POST, OPTIONS, etc.)
    allow_headers=["*"],  # Allow all headers
)




class SuggestRequest(BaseModel):
    code: str
    prompt: str

class SuggestResponse(BaseModel):
    suggestion: str
    explanation: str

@app.post("/suggest", response_model=SuggestResponse)
async def suggest_code(req: SuggestRequest):
    suggestion, explanation = generate_suggestion(req.code, req.prompt)
    return SuggestResponse(suggestion=suggestion, explanation=explanation)
