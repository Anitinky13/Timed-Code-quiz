//work on highscores

var highScoreContainer = document.getElementById("highScoreContainer");
var highScore = document.getElementById("highScorePage");
var myQuestions = document.getElementById("questions");
var inputName = document.getElementById("initials");
var submitHighScore = document.getElementById("submit");
var displayName = document.getElementById("highScoreInitials");
var displayScore = document.getElementById("highScoreScore");
var scoreText = document.getElementById(" currentScore");
var score = 0;
var index = 0;
var quizBody = document.getElementById("quiz");
var gameover = document.getElementById("gameover");
var quizTimer = document.getElementById("timer");
var finalScore = document.getElementById("finalHighScore");
var submitBtn = document.getElementById("submit");

//show Scores
function showScores() {
  quizBody.style.display = "none";
  gameover.style.display = "flex";
  clearInterval(timerInterval);
  displayName.value = "";
  finalScore.innerHTML =
    "You got " + score + " out of " + myQuestions.length + " correct!";
}
var createP = document.createElement("p");
createP.setAttribute("id", "createP");
myQuestions.appendChild("creatP");
if (timeLeft >= 0) {
  var timeRem = timeLeft;
  var createP2 = document.createElement("p");
  clearInterval(holdInterval);
  createP.textContent = "Your score is: " + timeRem;

  myQuestions.appendChild(createP2);
}
//need a function to generate score

function generateScore() {
  displayName.innerHTML = "";
  displayScore.innerHTML = "";
}
