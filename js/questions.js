var quizContainer = document.querySelector("#quizz");
var start = document.querySelector("#startQuiz");
var quizContainer = document.querySelector("#container");
var currentTime = document.querySelector("#time");
var questionsEl = document.querySelector("#questions");

//Array of Objects=questions
//each question object need a question value, a choices,array choices,answer value
var myQuestions = [
  {
    number: 1,
    question: "Commonly used data types Do Not include:",

    choice: ["Strings", "Booleans", "Alerts", "Numbers"],
    correctAnswer: "Alerts",
  },
  {
    number: 2,
    question: "The condition in an if/else statement is enclosed within___.",
    choice: ["Quotes", "Curly Brackets", "Parenthesis", "Square Brackets"],
    correctAnswer: "Parenthesis",
  },
  {
    number: 3,
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
    number: 4,
    question:
      "String values must be enclosed within___ when being assigned to variables.",
    choice: ["Commas", "Curly Brackets", "Quotes", "Parenthesis"],
    correctAnswer: "Quotes",
  },

  {
    number: 5,
    question:
      "A very useful tool for used during development and debugging for printing content to the debugger is:",
    choice: ["Javascript", "Terminal/Bash", "For Loops", "Console Log"],
    correctAnswer: "Console Log",
  },
];
//variables
var startBtn = document.querySelector(".btn");

//for each question

//variable to store the list of possible answers

//loop through the array
//variable that holds the index number of the current question array that your on
//hardcore the 4 choices button in the html
//then set the text contents of the buttons in that loop
//have a hardcore spot for the question
//work on timer
//work on highscores
