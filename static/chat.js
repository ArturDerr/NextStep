function openMain() {
    window.location.href = "/";
}


document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const input = form.querySelector("input[type='text']");
    const chatBox = document.getElementById("chat-messages");

    form.addEventListener("submit", async function (e) {
        e.preventDefault();
        const message = input.value.trim();
        if (!message) return;

        chatBox.innerHTML += `
            <div class="message-you">
                <p>Вы</p>
                <div class="text"><p>${message}</p></div>
            </div>
        `;

        input.value = "";

        const aiMessage = document.createElement("div");
        aiMessage.classList.add("message-ai");
        aiMessage.innerHTML = `
            <p>NextStepAI</p>
            <div class="text" id="ai-response">
                <div id="loading" style="text-align: center;">
                    <img src="/static/img/spinner.gif" alt="Загрузка..." width="20" height="20">
                </div>
            </div>
        `;
        chatBox.appendChild(aiMessage);

        const responseDiv = aiMessage.querySelector(".text");


        try {
            const res = await fetch("/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message })
            });

            const data = await res.json();

            responseDiv.innerHTML = marked.parse(data.reply);
        } catch (err) {
            responseDiv.innerHTML = `<p>На сайте ведутся технические работы, попробуйте позже</p>`;
        } finally {
            chatBox.scrollTop = chatBox.scrollHeight;
        }
    });
});
