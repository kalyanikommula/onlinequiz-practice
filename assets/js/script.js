const start = document.getElementById("start-btn");
start.addEventListener('click', startQuiz);
const menu = document.getElementById("menu");
const onlineQuiz = document.getElementById("onlineQuiz-container");


function startQuiz() {
    console.log("start");
    start.classList.add("hide");
    menu.classList.add("hide");
    onlineQuiz.classList.remove("hide");

}