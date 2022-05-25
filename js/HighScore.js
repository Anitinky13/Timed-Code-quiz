//work on highscores
var highScores = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#back");

clear.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});
var loadHighScoreData = function () {
  highScores = JSON.parse(localStorage.getItem("highscores") || "[]");
};

if (highScores !== null) {
  for (var i = 0; i < scoresAll.length; i++) {
    var createLi = document.createElement("li");
    createLi.textContent = scoresAll[i].initials + " " + scoresAll[i].score;
    highScores.appendChild(createLi);
  }
}
goBack.addEventListener("click", function () {
  window.location.replace("./index.html");
});
