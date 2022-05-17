var questions = document.getElementById("questions");
var time = document.getElementById("time");
var choices = document.getElementById("choices");
var submit = document.getElementById("submit");
var start = document.getElementById("start");

function startQuiz() {
  var startScreen = document.getElementById("start-screen");
  startScreen.setAttribute("class", ".hide");

  time = setInterval(clockTick, 1000);
}

start.onClick = startQuiz;
