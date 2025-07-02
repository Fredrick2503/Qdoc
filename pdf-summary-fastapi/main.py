# from fastapi import FastAPI
# from pydantic import BaseModel
# from fastapi.middleware.cors import CORSMiddleware
# import openai
# import os
# from dotenv import load_dotenv

# load_dotenv()
# openai.api_key = os.getenv("OPENAI_API_KEY")

# app = FastAPI()

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# class TextRequest(BaseModel):
#     text: str

# @app.post("/summarize")
# async def summarize_text(data: TextRequest):
#     if not data.text.strip():
#         return { "summary": "No text provided." }

#     try:
#         response = openai.ChatCompletion.create(
#             model="gpt-3.5-turbo",
#             messages=[
#                 {"role": "system", "content": "You are an assistant that summarizes text."},
#                 {"role": "user", "content": f"Summarize this:\n{data.text}"}
#             ]
#         )
#         summary = response.choices[0].message.content.strip()
#         return { "summary": summary }
#     except Exception as e:
#         print(f"OpenAI Error: {e}")
#         return { "summary": "Error generating summary." }


from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import openai
import os
from dotenv import load_dotenv

load_dotenv()

# ✅ Use OpenRouter.ai credentials
openai.api_key = os.getenv("OPENROUTER_API_KEY")
openai.api_base = "https://openrouter.ai/api/v1"

app = FastAPI()

# Allow CORS from any frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class TextRequest(BaseModel):
    text: str

class PromptRequest(BaseModel):
    prompt: str
    selectedText: str

@app.post("/summarize")
async def summarize_text(data: TextRequest):
    if not data.text.strip():
        return { "summary": "No text provided." }

    try:
        response = openai.ChatCompletion.create(
            model="mistralai/mistral-7b-instruct",  # ✅ Free model
            messages=[
                {"role": "system", "content": "You are an assistant that summarizes text."},
                {"role": "user", "content": f"Summarize this:\n{data.text}"}
            ]
        )
        summary = response.choices[0].message.content.strip()
        return { "summary": summary }

    except Exception as e:
        print(f"OpenRouter Error: {e}")
        return { "summary": "Error generating summary." }
    


@app.post("/prompt")
async def chat_with_ai(data: PromptRequest):
    if not data.prompt.strip():
        return { "response": "No prompt provided." }

    try:
        print("prompt")
        response = openai.ChatCompletion.create(
            model="meta-llama/llama-3-8b-instruct",  # Or another model if using OpenRouter
            # model="mistralai/mistral-7b-instruct",  # Or another model if using OpenRouter
            messages=[
                {"role": "system", "content": "You are a helpful assistant"},
                {"role": "user", "content": f"{data.selectedText}\n###\nIn context to this text {data.prompt}"}
            ]
        )
        reply = response.choices[0].message.content.strip()
        return { "response": reply }

    except Exception as e:
        print(f"OpenRouter Error: {e}")
        return { "response": f"Error generating response.{e}" }
