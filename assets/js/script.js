const questions = [
    {
        question: "What is the England national Animal?",
        answers: [
            {option: "assets/images/leopard.png", ans: "leopard", correct: false},
            {option: "assets/images/Lion.png", ans: "lion", correct: true},
            {option: "assets/images/Horse.png",ans: "Horse", correct: false},
        ],
        correctAnswer: "Lion",
    },
    {
        question: "Which city is belongs to the England?",
        answers: [
            {option: "assets/images/london-bridge.png", correct: true},
            {option: "assets/images/eiffel-tower.png", correct: false},
            {option: "assets/images/Tajmahal.png", correct: false},
        ],
        correctAnswer: "London-bridge",
    },
    {
        question: "Which one is the National Animal of India?",
        answers: [
            {option: "assets/images/deer.png", correct: false},
            {option: "assets/images/elephant.png", correct: false},
            {option: "assets/images/Tiger.png", correct: true},
        ],
        correctAnswer: "Tiger",
    },
    {
        question: "What is the national flower of India?",
        answers: [
            {option: "assets/images/Rose.png", correct: false},
            {option: "assets/images/lotus.png", correct: true},
            {option: "assets/images/sunflower.png", correct: false},
        ],
        correctAnswer: "Lotus",
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
    submitElement.classList.add('hide');
    onlineQuiz.classList.remove("hide");
    showQuestion();


}
function showQuestion() {
    resetFirstElements();
    let currentQuestion = questions[cuttentQuestionIndex];
    let questionNo = cuttentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;
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
    /*Array.from(answerElement.children).forEach(img => {
     if(img.dataset.correct === 'true') {
        img.classList.add('correct');
     }
     img.disabled = true;
     });*/
    
    nextButton.classList.remove('hide');
  }
  
  function setStatusClass(element, correct) {
    clearStatusClass(element);
     if (correct) {
      element.classList.add('correct'); 
      score++;  
      submitElement.classList.remove('hide');

      submitElement.innerHTML = `correct answer is ${questions[cuttentQuestionIndex].correctAnswer}`;
    } else {
      element.classList.add('wrong');
      submitElement.classList.remove('hide');
      submitElement.innerHTML = `Awww!! sorry right answer is ${questions[cuttentQuestionIndex].correctAnswer}`;
    }
       
}
  function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
  }
  
  nextButton.addEventListener('click', () => {
    if(cuttentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
  })

  function handleNextButton() {
    submitElement.classList.add('hide');
    cuttentQuestionIndex++;
    if(cuttentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
  }

  function showScore() {
    resetFirstElements();
    questionElement.innerHTML = `You scored  ${score} out of ${questions.length}!`;
    submitElement.classList.add('hide');
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    
  }