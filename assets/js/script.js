const questions = [
    {
        question: "What is the England national Animal?",
        answers: [
            { image: "assets/images/leopard.png", correct: false},
            { image: "assrts/images/Lion.png", correct: true},
            {image: "assets/images/Horse.png", correct: false},
        ]
    },
    {
        question: "Which city is belongs to the England?",
        answers: [
            { image: "assets/images/london-bridge.png", correct: true},
            { image: "assrts/images/eiffel-tower", correct: false},
            {image: "assets/images/Tajmahal", correct: false},
        ]
    },
    {
        question: "Which one is the National Animal of India?",
        answers: [
            { image: "assets/images/deer.png", correct: false},
            { image: "assrts/images/elephant.png", correct: false},
            {image: "assets/images/Tiger.png", correct: true},
        ]
    },
    {
        question: "What is the national flower of India?",
        answers: [
            { image: "assets/images/Rose.png", correct: false},
            { image: "assrts/images/lotus.png", correct: true},
            {image: "assets/images/sunflower.png", correct: false},
        ]
    },
]
const start = document.getElementById("start-btn");
start.addEventListener('click', startQuiz);
const menu = document.getElementById("menu");
const onlineQuiz = document.getElementById("onlineQuiz-container");
const questionElement = document.getElementById("question");
const answerElement = document.getElementById("chooseAnswer");
const submitElement = document.getElementById("submit-answer");
const nextButton = document.getElementById("next-btn");

let cuttentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    console.log("start");
    start.classList.add("hide");
    menu.classList.add("hide");
    onlineQuiz.classList.remove("hide");
    showQuestion();


}
function showQuestion() {
    const currentQuestion = questions[cuttentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;
}