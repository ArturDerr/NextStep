async function sendMessage() {
    const input = document.getElementById("userInput");
    const chat = document.getElementById("chat");
    const message = input.value.trim();

    if (!message) return;

    chat.innerHTML += `<div class="msg user">Вы: ${message}</div>`;
    input.value = "";

    const response = await fetch("/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message })
    });

    const data = await response.json();
    chat.innerHTML += `<div class="msg bot">ИИ: ${data.reply}</div>`;
}