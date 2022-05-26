//variable for questions?
var choices = [];
var answer;
var questionText = document.getElementById("question");
var score = 0;
var index = 0;
var submit = document.getElementById("submit");
var initials = "";

var quizBody = document.getElementById("Quiz");
var quizTimer = document.getElementById("timer");
var timeLeft = 76;
var timerInterval;

function countDown() {
  setInterval(function () {
    timeLeft--;
    quizTimer.textContent = "Time left: " + timeLeft;

    if (timeLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);

  if (timeLeft === 0) {
    alert("Times up!");
  } else {
  }
}

//var timerInterval =
quizBody.style.display = "block";
//function startQuiz()
start.addEventListener("click", startQuiz);

//Array of Objects=questions( i think i got it?)
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

//create a variable for timer(use querySelector?) not local
var currentTime = 0;
var handleButtonClick = function (event) {
  var btnValue = event.target.value;
  console.log(btnValue);
  if (btnValue === myQuestions[index].correctAnswer) {
    console.log("correctAnswer");
    score += 20;
    console.log(score);
    if (score === 0) {
      console.log(score);
    }
  } else {
    console.log("wrongAnswer");
    score -= 20;
  }
  displayNextQuestion();
};
//need to get variable for buttons(use querySelector?) not local
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
  countDown();
};
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
    console.log(score);
  }
};

//i think we need a results and initial variable?

var results;
var initialBox;

//probably need a highscore variable... do i put it here or on second js?

var highScores;
//clear score?

//Go back button variable?
var backBtn;

//variable for answers? do we need?
var answers;

//loop through the array( I need help!!!)
for (var i = 0; i < myQuestions.length; i++) {
  console.log(myQuestions[i]);
}
document.getElementById("start").addEventListener("click", startQuiz);

// document.getElementById("submit").addEventListener("click", function () {
//   var initials = creatInput.value;
//   console.log(initials);
// });

function answeredIncorrectly() {
  timeLeft -= 10;
  console.log("answered incorectly");
}
