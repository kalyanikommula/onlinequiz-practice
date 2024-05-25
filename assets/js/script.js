const questions = [
    {
        question: "What is the England national Animal?",
        answers: [
            { option: "assets/images/leopard.png", correct: false},
            { option: "assrts/images/Lion.png", correct: true},
            {option: "assets/images/Horse.png", correct: false},
        ]
    },
    {
        question: "Which city is belongs to the England?",
        answers: [
            { option: "assets/images/london-bridge.png", correct: true},
            { option: "assrts/images/eiffel-tower", correct: false},
            {option: "assets/images/Tajmahal", correct: false},
        ]
    },
    {
        question: "Which one is the National Animal of India?",
        answers: [
            { option: "assets/images/deer.png", correct: false},
            { option: "assrts/images/elephant.png", correct: false},
            {option: "assets/images/Tiger.png", correct: true},
        ]
    },
    {
        question: "What is the national flower of India?",
        answers: [
            { option: "assets/images/Rose.png", correct: false},
            { option: "assrts/images/lotus.png", correct: true},
            {option: "assets/images/sunflower.png", correct: false},
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
const imageAnswer = document.getElementsByTagName("img");

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
    currentQuestion.answers.forEach(answer => {
        const images = document.createElement("img");
        images.innerHtml = answer.option;
        images.classList.add("image");
        answerElement.appendChild(images);

    })
    
}