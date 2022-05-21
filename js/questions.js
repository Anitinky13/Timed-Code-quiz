//variable for questions?

//create a variable for timer(use querySelector?) not local

//need to get variable for buttons(use querySelectore?) not local

//start quiz variable

//i think we need a results and initial variable?

//probably need a highscore variable... do i put it here or on second js?

//clear score?

//Go back button variable?

//variable for answers? do we need?

//index of current question

var score = 0;
var index = 0;
function startQuiz()
start.addEventListener("click", startQuiz);

//loop through the array( I need help!!!)
for (var i = 0; i < myQuestions; i++) {
  console.log(myQuestions);
}
document.getElementById("start").addEventListener("click", start);

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
//question function?

//how do we check the answers?

//

//each question object need a question value, a choices,array choices,answer value

//hardcore the 4 choices button in the html
//then set the text contents of the buttons in that loop
//have a hardcore spot for the question

//work on timer---- how to set timer efunction?

//work on highscores
