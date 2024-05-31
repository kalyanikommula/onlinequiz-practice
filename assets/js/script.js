const questions = [
    {
        question: "What is the England national Animal?",
        answers: [
            {imgURL: "assets/images/leopard.png", correct: false},
            {imgURL: "assets/images/Lion.png", correct: true},
            {imgURL: "assets/images/Horse.png", correct: false},
        ]
    },
    {
        question: "Which city is belongs to the England?",
        answers: [
            {imgURL: "assets/images/london-bridge.png", correct: true},
            {imgURL: "assets/images/eiffel-tower", correct: false},
            {imgURL: "assets/images/Tajmahal", correct: false},
        ]
    },
    {
        question: "Which one is the National Animal of India?",
        answers: [
            {imgURL: "assets/images/deer.png", correct: false},
            {imgURL: "assets/images/elephant.png", correct: false},
            {imgURL: "assets/images/Tiger.png", correct: true},
        ]
    },
    {
        question: "What is the national flower of India?",
        answers: [
            {imgURL: "../assets/images/Rose.png", correct: false},
            {imgURL: "../assets/images/lotus.png", correct: true},
            {imgURL: "../assets/images/sunflower.png", correct: false},
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
        //images.innerHTML = answer.imgURL;
        images.setAttribute('src' , answer.imgURL);
       images.classList.add("image");
        answerElement.appendChild(images);

    })
    
}