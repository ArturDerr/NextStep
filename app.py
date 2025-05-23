from flask import Flask, render_template, request, jsonify
import requests
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__, template_folder="templates", static_folder="static")

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/chat", methods=["GET", "POST"])
def chat():
    if request.method == "GET":
        return render_template("chat.html")

    user_message = request.json.get("message")

    headers = {
        "Authorization": f"Bearer {os.getenv('OPENROUTER_API_KEY')}",
        "Content-Type": "application/json",
        "HTTP-Referer": "https://your-site-url.com", 
        "X-Title": "NextStepAI"
    }

    payload = {
        "model": "deepseek/deepseek-chat",
        "messages": [
            {
                "role": "system",
                "content": "Ты профориентолог. Отвечай на основе интересов пользователя, не задавай встречных вопросов. Дай рекомендации по профессиям, подходящим к описанию."
            },
            {
                "role": "user",
                "content": user_message
            }
        ]
    }

    try:
        response = requests.post("https://openrouter.ai/api/v1/chat/completions", headers=headers, json=payload)
        reply = response.json()["choices"][0]["message"]["content"]
        return jsonify({"reply": reply})
    except Exception as e:
        return jsonify({"reply": f"Ошибка: {str(e)}"}), 500

@app.route("/test")
def test():
    return render_template("test.html")

@app.route("/recommend", methods=["POST"])
def recommend():
    data = request.json
    scores = data.get("scores", {})
    answers = data.get("answers", [])

    formatted_answers = "\n".join(
        f"{i+1}. {a['question']} — {a['answer']}" for i, a in enumerate(answers)
    )

    user_prompt = f"""На основе интересов и предпочтений пользователя определи подходящие профессии.

    Ответь на основании следующих ответов пользователя:

    {formatted_answers}

    Дай список из 3–5 наиболее подходящих профессий с краткими пояснениями и структурированно по пунктам.
    """

    headers = {
        "Authorization": f"Bearer {os.getenv('OPENROUTER_API_KEY')}",
        "Content-Type": "application/json",
        "HTTP-Referer": "https://your-site-url.com",
        "X-Title": "NextStepAI"
    }

    payload = {
        "model": "deepseek/deepseek-chat",
        "messages": [
            {
                "role": "system",
                "content": "Ты профориентолог. Дай чёткие рекомендации по профессиям, основываясь на интересах. Не задавай вопросов."
            },
            {
                "role": "user",
                "content": user_prompt
            }
        ]
    }

    try:
        response = requests.post("https://openrouter.ai/api/v1/chat/completions", headers=headers, json=payload)
        reply = response.json()["choices"][0]["message"]["content"]
        return jsonify({"reply": reply})
    except Exception as e:
        return jsonify({"reply": f"Ошибка при запросе к нейросети: {str(e)}"}), 500

if __name__ == "__main__":
    app.run(debug=True)
