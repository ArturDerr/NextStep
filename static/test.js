function openMain() {
    window.location.href = "/";
}

function disableHoverEffect() {
  cursor.onmouseenter = null;
  cursor.onmouseleave = null;
  img.style.pointerEvents = 'none';
  cursor.style.cursor = "default";
  img.src = "/static/img/black-left-unselected.svg";
  p_div.style.color = "#AEAEAE";
}

function enableHoverEffect() {
  img.style.pointerEvents = 'auto';
  cursor.style.cursor = "pointer";

  cursor.onmouseenter = () => {
    img.src = '/static/img/black-left-selected.svg';
    p_div.style.color = '#0D00FF';
  };

  cursor.onmouseleave = () => {
    img.src = '/static/img/black-left.svg';
    p_div.style.color = '#000';
  };
}

const questions = [
  {
    question: "Что тебе интересно изучать?",
    answers: [
      { text: "Алгоритмы и программирование", category: "tech" },
      { text: "Историю и философию", category: "human" },
      { text: "Дизайн и визуальное искусство", category: "creative" },
      { text: "Финансы и бизнес-модели", category: "business" },
      { text: "Биологию или химию", category: "science" },
      { text: "Психологию и общение", category: "social" }
    ]
  },
  {
    question: "Какие задачи тебе по душе?",
    answers: [
      { text: "Решать логические задачи", category: "tech" },
      { text: "Писать тексты, статьи", category: "human" },
      { text: "Создавать что-то визуально красивое", category: "creative" },
      { text: "Развивать бизнес-идеи", category: "business" },
      { text: "Анализировать данные и проводить исследования", category: "science" },
      { text: "Работать с людьми", category: "social" }
    ]
  },
  {
    question: "Какое занятие тебе ближе всего?",
    answers: [
      { text: "Программирование", category: "tech" },
      { text: "Анализ текстов и данных", category: "human" },
      { text: "Графический или UI-дизайн", category: "creative" },
      { text: "Управление проектами", category: "business" },
      { text: "Лабораторная работа", category: "science" },
      { text: "Волонтёрство или организация мероприятий", category: "social" }
    ]
  },
  {
    question: "Что бы ты выбрал из этого?",
    answers: [
      { text: "Создание сайта или приложения", category: "tech" },
      { text: "Написание эссе", category: "human" },
      { text: "Рисование, иллюстрации", category: "creative" },
      { text: "Продумывание стратегии", category: "business" },
      { text: "Проведение эксперимента", category: "science" },
      { text: "Обсуждение в команде", category: "social" }
    ]
  },
  {
    question: "Что мотивирует тебя?",
    answers: [
      { text: "Интеллектуальные вызовы", category: "tech" },
      { text: "Саморазвитие и знания", category: "human" },
      { text: "Творческая реализация", category: "creative" },
      { text: "Результаты и прибыль", category: "business" },
      { text: "Открытие нового", category: "science" },
      { text: "Помощь другим", category: "social" }
    ]
  },
  {
    question: "Какой навык тебе ближе?",
    answers: [
      { text: "Кодинг или отладка", category: "tech" },
      { text: "Письменная речь", category: "human" },
      { text: "Рисование или монтаж", category: "creative" },
      { text: "Организация процессов", category: "business" },
      { text: "Сбор и анализ данных", category: "science" },
      { text: "Коммуникация", category: "social" }
    ]
  },
  {
    question: "Что ты обычно делаешь в свободное время?",
    answers: [
      { text: "Разбираюсь в новых технологиях", category: "tech" },
      { text: "Читаю статьи или книги", category: "human" },
      { text: "Рисую, монтирую видео", category: "creative" },
      { text: "Смотрю бизнес-кейсы", category: "business" },
      { text: "Изучаю науку", category: "science" },
      { text: "Общаюсь с друзьями", category: "social" }
    ]
  },
  {
    question: "Какая профессия тебе кажется интересной?",
    answers: [
      { text: "Разработчик", category: "tech" },
      { text: "Редактор или журналист", category: "human" },
      { text: "Графический дизайнер", category: "creative" },
      { text: "Предприниматель", category: "business" },
      { text: "Исследователь", category: "science" },
      { text: "HR-менеджер", category: "social" }
    ]
  },
  {
    question: "Какая школьная дисциплина тебе нравилась?",
    answers: [
      { text: "Информатика", category: "tech" },
      { text: "Литература", category: "human" },
      { text: "ИЗО или музыка", category: "creative" },
      { text: "Обществознание", category: "business" },
      { text: "Физика или химия", category: "science" },
      { text: "Классный час, проекты", category: "social" }
    ]
  },
  {
    question: "К чему ты стремишься?",
    answers: [
      { text: "Развить технические навыки", category: "tech" },
      { text: "Глубоко понимать людей", category: "human" },
      { text: "Самовыразиться", category: "creative" },
      { text: "Создать свой бизнес", category: "business" },
      { text: "Сделать открытие", category: "science" },
      { text: "Влиять на жизнь людей", category: "social" }
    ]
  },
  {
    question: "Что ты ценишь в работе?",
    answers: [
      { text: "Чёткую логику и системность", category: "tech" },
      { text: "Интеллектуальный вклад", category: "human" },
      { text: "Творческую свободу", category: "creative" },
      { text: "Рост и достижения", category: "business" },
      { text: "Вклад в науку", category: "science" },
      { text: "Командную атмосферу", category: "social" }
    ]
  },
  {
    question: "Что тебе ближе всего по духу?",
    answers: [
      { text: "Инженерное мышление", category: "tech" },
      { text: "Гуманитарный подход", category: "human" },
      { text: "Художественное восприятие", category: "creative" },
      { text: "Предприимчивость", category: "business" },
      { text: "Любознательность к миру", category: "science" },
      { text: "Эмпатия и вовлечённость", category: "social" }
    ]
  }
];

let current = 0;
const scores = { tech: 0, human: 0, creative: 0 };

const mainText = document.getElementById("main-text");
const answerBlock = document.getElementById("answer-block");
const nextBtn = document.getElementById("next-btn");
const aiResult = document.getElementById("ai-result");
const p_div = document.getElementById("p-div")
const cursor = document.getElementById("cursor")
const img = document.getElementById("img-div")


function renderQuestion() {
  const q = questions[current];
  document.getElementById("question-number").textContent = String(current + 1).padStart(2, '0');
  mainText.textContent = `— ${q.question}`;

  const answers = document.querySelectorAll("#answer-block .cart1");

  answers.forEach((el, index) => {
    const a = q.answers[index];
    const p = el.querySelector("p");

    if (a) {
      el.style.display = "flex";
      p.textContent = a.text;
      el.setAttribute("data-category", a.category);
      el.classList.remove("selected");
      el.onclick = () => selectAnswer(el);
    } else {
      el.style.display = "none";
    }
  });

  selected = null;
  p_div.style.color = "#AEAEAE"
  img.src = "/static/img/black-left-unselected.svg"
  img.style.pointerEvents = 'none';
  cursor.style.cursor = "default";
  nextBtn.disabled = true;
  disableHoverEffect();
}

function selectAnswer(el) {
  document.querySelectorAll(".cart1").forEach(div => div.classList.remove("selected"));
  el.classList.add("selected");
  selected = el.dataset.category;
  nextBtn.disabled = false;
  p_div.style.color = "#000";
  img.src = "/static/img/black-left.svg";
  img.style.pointerEvents = "auto";
  cursor.style.cursor = "pointer";
  enableHoverEffect();
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
  mainText.textContent = "";
  answerBlock.innerHTML = "";
  nextBtn.style.display = "none";
  document.getElementById("question-number").style.display = "none";
  document.getElementById("count").style.display = "none";

  const processing = document.getElementById("processing");
  processing.style.display = "flex"; 

  try {
    const res = await fetch("/recommend", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ scores })
    });

    const data = await res.json();

    processing.style.display = "none"; 
    document.getElementById("result-text").style.display = "flex";
    aiResult.style.display = "flex"
    aiResult.innerHTML = `<div class="cart1">${marked.parse(data.reply)}</div>`; 
  } catch (err) {
    processing.style.display = "none";
    aiResult.innerHTML = `<p style="color:red">Ошибка при получении ответа от нейросети.</p>`;
  }
}

renderQuestion();