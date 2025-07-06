from dotenv import load_dotenv
from openai import OpenAI
import json
import os
import requests
from pypdf import PdfReader
import gradio as gr


load_dotenv(override=True)


def push(text):
    requests.post(
        "https://api.pushover.net/1/messages.json",
        data={
            "token": os.getenv("PUSHOVER_TOKEN"),
            "user": os.getenv("PUSHOVER_USER"),
            "message": text,
        },
    )


def record_user_details(email, name="Name not provided", notes="not provided"):
    push(f"Recording {name} with email {email} and notes {notes}")
    return {"recorded": "ok"}


def record_unknown_question(question):
    push(f"Recording {question}")
    return {"recorded": "ok"}


record_user_details_json = {
    "name": "record_user_details",
    "description": "Use this tool to record that a user is interested in being in touch and provided an email address",
    "parameters": {
        "type": "object",
        "properties": {
            "email": {
                "type": "string",
                "description": "The email address of this user",
            },
            "name": {
                "type": "string",
                "description": "The user's name, if they provided it",
            },
            "notes": {
                "type": "string",
                "description": "Any additional information about the conversation that's worth recording to give context",
            },
        },
        "required": ["email"],
        "additionalProperties": False,
    },
}

record_unknown_question_json = {
    "name": "record_unknown_question",
    "description": "Always use this tool to record any question that couldn't be answered as you didn't know the answer",
    "parameters": {
        "type": "object",
        "properties": {
            "question": {
                "type": "string",
                "description": "The question that couldn't be answered",
            },
        },
        "required": ["question"],
        "additionalProperties": False,
    },
}

tools = [
    {"type": "function", "function": record_user_details_json},
    {"type": "function", "function": record_unknown_question_json},
]


class Me:
    def __init__(self):
        self.openai = OpenAI()
        self.name = "Dylan Qian"

        # Get the directory where this script is located
        script_dir = os.path.dirname(os.path.abspath(__file__))

        # Read LinkedIn PDF
        linkedin_path = os.path.join(script_dir, "me", "linkedin.pdf")
        reader = PdfReader(linkedin_path)
        self.linkedin = ""
        for page in reader.pages:
            text = page.extract_text()
            if text:
                self.linkedin += text

        # Read summary text
        summary_path = os.path.join(script_dir, "me", "summary.txt")
        with open(summary_path, "r", encoding="utf-8") as f:
            self.summary = f.read()

    def handle_tool_call(self, tool_calls):
        results = []
        for tool_call in tool_calls:
            tool_name = tool_call.function.name
            arguments = json.loads(tool_call.function.arguments)
            print(f"Tool called: {tool_name}", flush=True)
            tool = globals().get(tool_name)
            result = tool(**arguments) if tool else {}
            results.append(
                {
                    "role": "tool",
                    "content": json.dumps(result),
                    "tool_call_id": tool_call.id,
                }
            )
        return results

    def system_prompt(self):
        system_prompt = f"""
            You are acting as {self.name}, a professional digital assistant on {self.name}'s personal website. You represent {self.name}'s professional persona — including career, background, skills, and experience.

            Your mission is to engage visitors positively and energetically, providing clear, accurate, and helpful information about {self.name}'s work. Think of each conversation as an opportunity to leave a strong impression on a potential client, collaborator, or future employer.

            You are provided with a summary of {self.name}'s background and LinkedIn profile. Use ONLY this information to answer questions. Do NOT speculate or fabricate any details — if something is not known or not included in the provided context, say so and use the `record_unknown_question` tool.

            === GUARDRAILS ===
            • Topical Scope:
            You must only discuss topics related to {self.name}'s professional background, career, skills, and experiences. 
            Do NOT answer questions about personal life, political views, religious beliefs, or any non-career-related topics.

            • Factual Accuracy:
            NEVER hallucinate or make up facts. Only answer questions grounded in the information provided in the summary and LinkedIn profile. If you are unsure or the information is unavailable, politely say so and log the question using the `record_unknown_question` tool.

            • Privacy and User Data:
            You may only collect user name and email for professional follow-up purposes. Never ask for sensitive personal data. Use the `record_user_details` tool to store contact information securely and ethically.

            • Tone and Personality:
            Stay professional, positive, and energetic in tone. Speak as {self.name} would — confident, warm, and approachable, but never casual to the point of being unprofessional.

            • Deflection and Fallback:
            If the user asks something off-topic or inappropriate, kindly steer the conversation back to {self.name}'s professional work. For example:
            "I'm here to help with questions about my career or experience — happy to share more about my work!"

            • Escalation and Contact:
            If a user seems genuinely interested or wants to connect, ask for their email and offer to continue the conversation. Use the `record_user_details` tool to save their contact.

            === CONTEXT ===

            ## Summary:
            {self.summary}

            ## LinkedIn Profile:
            {self.linkedin}

            With this context and these boundaries, begin chatting with the user as {self.name}.
            """
        return system_prompt

    def chat(self, message, history):
        # Only add system prompt if this is the first message (history is empty)
        if not history:
            messages = [{"role": "system", "content": self.system_prompt()}] + [
                {"role": "user", "content": message}
            ]
        else:
            messages = history + [{"role": "user", "content": message}]

        done = False
        while not done:
            response = self.openai.chat.completions.create(
                model="gpt-4o-mini", messages=messages, tools=tools
            )
            if response.choices[0].finish_reason == "tool_calls":
                message = response.choices[0].message
                tool_calls = message.tool_calls
                results = self.handle_tool_call(tool_calls)
                messages.append(message)
                messages.extend(results)
            else:
                done = True
        return response.choices[0].message.content


if __name__ == "__main__":
    me = Me()
    gr.ChatInterface(me.chat, type="messages").launch()
