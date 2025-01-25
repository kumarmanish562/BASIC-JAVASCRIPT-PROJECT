const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correct: 0,
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correct: 1,
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Leo Tolstoy"],
    correct: 1,
  },
  {
    question: "Which is the largest planet in our Solar System?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correct: 2,
  },
];

let currentQuestionIndex = 0;
let score = 0;

const infoBox = document.querySelector(".info-box");
const startScreen = document.querySelector(".start-screen");
const quizContainer = document.querySelector(".quiz-container");
const resultScreen = document.querySelector(".result-screen");

const questionText = document.getElementById("question");
const optionsBox = document.querySelector(".options-box");
const nextButton = document.getElementById("next-button");
const scoreText = document.getElementById("score");
const totalQuestionsText = document.getElementById("total-questions");

document.getElementById("continue-btn").addEventListener("click", showStartScreen);
document.getElementById("start-quiz").addEventListener("click", startQuiz);
document.getElementById("restart-quiz").addEventListener("click", restartQuiz);
nextButton.addEventListener("click", nextQuestion);

function showStartScreen() {
  infoBox.classList.add("hidden");
  startScreen.classList.remove("hidden");
}

function startQuiz() {
  startScreen.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  totalQuestionsText.textContent = questions.length;
  showQuestion();
}

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionText.textContent = currentQuestion.question;
  optionsBox.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option");
    button.addEventListener("click", () => selectOption(index));
    optionsBox.appendChild(button);
  });

  nextButton.classList.add("hidden");
}

function selectOption(selectedIndex) {
  const currentQuestion = questions[currentQuestionIndex];
  const options = document.querySelectorAll(".option");

  options.forEach((option, index) => {
    if (index === currentQuestion.correct) {
      option.classList.add("correct");
    } else if (index === selectedIndex) {
      option.classList.add("wrong");
    }
    option.disabled = true;
  });

  if (selectedIndex === currentQuestion.correct) {
    score++;
  }

  nextButton.classList.remove("hidden");
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  quizContainer.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  scoreText.textContent = score;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  resultScreen.classList.add("hidden");
  infoBox.classList.remove("hidden");
}
