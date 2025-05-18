import os
from flask import Flask, request, jsonify, render_template
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

# Настройка ключа Gemini
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
genai.configure(api_key=GEMINI_API_KEY)

# Загрузка модели
model = genai.GenerativeModel("models/gemini-pro")

# Промпт для профориентационного ИИ
SYSTEM_PROMPT = (
    "Ты — профессиональный профориентационный ассистент. Отвечай кратко, структурировано и по делу. "
    "Используй заголовок, список из 3–5 профессий с короткими описаниями, давай чёткие рекомендации. "
    "Не отклоняйся от темы профориентации. Не используй сложные термины, избегай длинных абзацев."
)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/chat", methods=["POST"])
def chat():
    data = request.json
    user_message = data.get("message", "")
    full_prompt = SYSTEM_PROMPT + "\n\nПользователь: " + user_message

    try:
        response = model.generate_content(full_prompt)
        return jsonify({"reply": response.text})
    except Exception as e:
        return jsonify({"reply": f"Ошибка: {e}"})

if __name__ == "__main__":
    app.run(debug=True)
