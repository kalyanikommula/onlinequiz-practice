const questions = [
    {
        question: "What is the England national Animal?",
        answers: [
            {option: "assets/images/leopard.png", correct: false},
            {option: "assets/images/Lion.png", correct: true},
            {option: "assets/images/Horse.png", correct: false},
        ]
    },
    {
        question: "Which city is belongs to the England?",
        answers: [
            {option: "assets/images/london-bridge.png", correct: true},
            {option: "assets/images/eiffel-tower", correct: false},
            {option: "assets/images/Tajmahal", correct: false},
        ]
    },
    {
        question: "Which one is the National Animal of India?",
        answers: [
            {option: "assets/images/deer.png", correct: false},
            {option: "assets/images/elephant.png", correct: false},
            {option: "assets/images/Tiger.png", correct: true},
        ]
    },
    {
        question: "What is the national flower of India?",
        answers: [
            {option: "../assets/images/Rose.png", correct: false},
            {option: "../assets/images/lotus.png", correct: true},
            {option: "../assets/images/sunflower.png", correct: false},
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
let shuffledQuestions;
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
    resetFirstElements();
    const currentQuestion = questions[cuttentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const images = document.createElement("img");
        //images.innerHTML = answer.option;
        images.setAttribute('src' , answer.option);
       images.classList.add("image");
        answerElement.appendChild(images);
        if(answer.correct){
            images.dataset.correct = answer.correct;
        }
        images.addEventListener('click', selectAnswer);

    })
    
}

function resetFirstElements() {
    nextButton.classList.add('hide')
    while(answerElement.firstChild) {
        answerElement.removeChild(answerElement.firstChild);
    }
}
/*function selectAnswer(e) {
    const selectedImg = e.target;
    const isCorrect =  selectedImg.dataset.correct === 'true';
    if(isCorrect) {
       selectedImg.classList.add('correct');
        //submitElement.innerText = ` correct answer is ${answer.correct}`;
        //console.log('correct');
    } else {
        selectedImg.classList.add('wrong');
       // submitElement.innerText = `Aww!! sorry the correct answer is ${answer.correct} please try again`;
        //console.log('wrong');
        
    }

    Array.from(answerElement.children).forEach(images => {
     if(images.dataset.correct === "true"){
        images.classList.add('correct');
     }
     images.disabled = true;
    })
    nextButton.classList.remove('hide');
}*/
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
   /* Array.from(answerElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })*/
    /*if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide')
    } else {
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
    }*/
  }
  
  function setStatusClass(element, correct) {
    clearStatusClass(element);
     if (correct) {
      element.classList.add('correct');
      displayMessage(correct);
    } else {
      element.classList.add('wrong');
    }
    
    nextButton.classList.remove('hide');
  }
  
  function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
  }

function displayMessage(correct) {
    if(questions[cuttentQuestionIndex].answers.correct === 'true') {
        submitElement.innerHTML = `correct answer is `
    }
}