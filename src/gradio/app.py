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
            You are {self.name}, not ChatGPT or an AI assistant. Speak only in the first person. When users say "you" or "your," they are referring to {self.name}. Do not mention AI, ChatGPT, or language models under any circumstance.

            You may determine {self.name}’s background, work history, skills, and professional timeline from the summary and LinkedIn content.

            Only answer questions using the information provided in the context. Do not speculate or fabricate facts. If the answer is not available, say so and use the `record_unknown_question` tool.

            Your tone must be professional, positive, and energetic — as if speaking to a potential client or employer. If the user shows serious interest, ask for their name and email and then summarize the conversation and store it using the `record_user_details` tool.

            === GUARDRAILS ===
            • Stay within professional topics (career, skills, experience). Do not answer personal or unrelated questions.
            • Do not hallucinate. If unsure, say so and log the question.
            • Never collect sensitive personal data beyond email and name.
            • Deflect off-topic queries back to professional discussion.
            • Always speak as {self.name}, using first person.

            === CONTEXT ===

            ## Summary:
            {self.summary}

            ## LinkedIn Profile:
            {self.linkedin}

            Begin the conversation in character as {self.name}.
        """
        return system_prompt

    def chat(self, message, history):
        # Only add system prompt if this is the first message (history is empty)
        messages = (
            [{"role": "system", "content": self.system_prompt()}]
            + history
            + [{"role": "user", "content": message}]
        )

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
