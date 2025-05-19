function openMain() {
    window.location.href = "/";
}

const questions = [
  {
    question: "Что ты делаешь с удовольствием?",
    answers: [
      { text: "Решаю логические задачи, программирую", category: "tech" },
      { text: "Пишу, читаю, анализирую", category: "human" },
      { text: "Творю: рисую, проектирую", category: "creative" }
    ]
  },
  {
    question: "Какие предметы нравились в школе?",
    answers: [
      { text: "Математика, информатика", category: "tech" },
      { text: "История, литература", category: "human" },
      { text: "ИЗО, музыка", category: "creative" }
    ]
  },
  {
    question: "Как проводишь свободное время?",
    answers: [
      { text: "Решаю головоломки или изучаю новое", category: "tech" },
      { text: "Читаю статьи, пишу тексты", category: "human" },
      { text: "Создаю контент, рисую", category: "creative" }
    ]
  },
];

let current = 0;
const scores = { tech: 0, human: 0, creative: 0 };
let selected = null;

const mainText = document.getElementById("main-text");
const answerBlock = document.getElementById("answer-block");
const nextBtn = document.getElementById("next-btn");
const aiResult = document.getElementById("ai-result");

function renderQuestion() {
  const q = questions[current];
  mainText.textContent = `— ${q.question}`;
  answerBlock.innerHTML = "";

  q.answers.forEach((a, index) => {
    const div = document.createElement("div");
    div.classList.add("cart1");
    div.setAttribute("data-category", a.category);
    div.setAttribute("data-index", index);
    div.innerHTML = `<p>${a.text}</p><img src="/static/img/Radio.svg"/>`;
    div.addEventListener("click", () => selectAnswer(div));
    answerBlock.appendChild(div);
  });

  selected = null;
  nextBtn.disabled = true;
}

function selectAnswer(el) {
  document.querySelectorAll(".cart1").forEach(div => div.classList.remove("selected"));
  el.classList.add("selected");
  selected = el.dataset.category;
  nextBtn.disabled = false;
}

nextBtn.addEventListener("click", () => {
  if (!selected) return;

  scores[selected]++;
  current++;

  if (current < questions.length) {
    renderQuestion();
  } else {
    showResult();
  }
});

async function showResult() {
  mainText.textContent = "Обработка результата...";
  answerBlock.innerHTML = "";
  nextBtn.style.display = "none";

  const summary = Object.entries(scores)
    .map(([k, v]) => `${k}: ${v}`)
    .join(", ");

  try {
    const res = await fetch("/recommend", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ scores })
    });

    const data = await res.json();
    aiResult.innerHTML = `<div class="cart1"><p><strong>Совет от ИИ:</strong><br>${data.reply.replace(/\n/g, "<br>")}</p></div>`;
  } catch (err) {
    aiResult.innerHTML = `<p style="color:red">Ошибка при получении ответа от нейросети.</p>`;
  }
}

renderQuestion();