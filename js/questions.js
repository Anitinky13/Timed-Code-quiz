//Array of Objects=questions
var myQuestions = [
  {
    question: "Commonly used data types Do Not include:",

    choice: ["Strings", "Booleans", "Alerts", "Numbers"],
    correctAnswer: "Alerts",
  },
  {
    question: "The condition in an if/else statement is enclosed within___.",
    choice: ["Quotes", "Curly Brackets", "Parenthesis", "Square Brackets"],
    correctAnswer: "Parenthesis",
  },
  {
    question: "Arrays in Javascript can be used to store____.",
    choice: [
      "Number and Strings",
      "Other Arrays",
      "Booleans",
      "All Of The Above",
    ],
    correctAnswer: "All Of The Above",
  },
  {
    question:
      "String values must be enclosed within___ when being assigned to variables.",
    choice: ["Commas", "Curly Brackets", "Quotes", "Parenthesis"],
    correctAnswer: "Quotes",
  },

  {
    question:
      "A very useful tool for used during development and debugging for printing content to the debugger is:",
    choice: ["Javascript", "Terminal/Bash", "For Loops", "Console Log"],
    correctAnswer: "Console Log",
  },
];

//create a variable for timer
var currentTime = 0;
var handleButtonClick = function (event) {
  console.log("Hello There");
  var btnValue = event.target.value;
  console.log(btnValue);
  if (btnValue === myQuestions[index].correctAnswer) {
    console.log("correctAnswer");
    score += 20;
    console.log(score);
  } else {
    console.log("wrongAnswer");
  }
  displayNextQuestion();
};
// variable for buttons
var Buttons;
var scoreText = document.getElementById("currentScore");
var Btn1 = document.getElementById("btn0");
Btn1.addEventListener("click", handleButtonClick);
var Btn2 = document.getElementById("btn1");
Btn2.addEventListener("click", handleButtonClick);
var Btn3 = document.getElementById("btn2");
Btn3.addEventListener("click", handleButtonClick);
var Btn4 = document.getElementById("btn3");
Btn4.addEventListener("click", handleButtonClick);
//index of current question
var questionText = document.getElementById("question");
var score = 0;
var index = 0;
//start quiz variable
var startQuiz = function () {
  index = 0;
  score = 0;
  scoreText.textContent = `score: ${score}`;

  questionText.textContent = myQuestions[index].question;
  Btn1.textContent = myQuestions[index].choice[0];
  Btn2.textContent = myQuestions[index].choice[1];
  Btn1.value = myQuestions[index].choice[0];
  Btn2.value = myQuestions[index].choice[1];
  Btn3.textContent = myQuestions[index].choice[2];
  Btn3.value = myQuestions[index].choice[2];
  Btn4.textContent = myQuestions[index].choice[3];
  Btn4.value = myQuestions[index].choice[3];
};
//next questions to show variable
var displayNextQuestion = function () {
  if (index < myQuestions.length - 1) {
    index++;
    scoreText.textContent = `score: ${score}`;

    questionText.textContent = myQuestions[index].question;
    Btn1.textContent = myQuestions[index].choice[0];
    Btn2.textContent = myQuestions[index].choice[1];
    Btn1.value = myQuestions[index].choice[0];
    Btn2.value = myQuestions[index].choice[1];
    Btn3.textContent = myQuestions[index].choice[2];
    Btn3.value = myQuestions[index].choice[2];
    Btn4.textContent = myQuestions[index].choice[3];
    Btn4.value = myQuestions[index].choice[3];
  } else {
    console.log("gameOver");
  }
};
//timer function and variable
var quizBody = document.getElementById("quiz");
var quizTimer = document.getElementById("timer");
var timeLeft = 76;
var timerInterval;
timerInterval = setInterval(function () {
  timeLeft--;
  quizTimer.textContent = "Time left: " + timeLeft;

  if (timeLeft === 0) {
    clearInterval(timerInterval);
    showScore();
  }
}, 1000);
quizBody.style.display = "block";

//loop through the array
for (var i = 0; i < myQuestions.length; i++) {
  console.log(myQuestions[i]);
}
document.getElementById("start").addEventListener("click", startQuiz);

//hardcore the 4 choices button in the html
//then set the text contents of the buttons in that loop
//have a hardcore spot for the question
