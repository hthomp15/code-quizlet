var questionEL = document.querySelector(".question");
var timerEl = document.querySelector(".timer");
var buttonEl = document.querySelector(".btn");
var choicesEL = document.querySelector(".choices")
var choice1El = document.querySelector(".choice-1");
var choice2El = document.querySelector(".choice-2");
var choice3El = document.querySelector(".choice-3");
var choice4El = document.querySelector(".choice-4");
// Will try this Ul sleector to populte the entire answers list in one call. 
// var choicesEL = document.querySelector("choices");


var questionForm = [
    {
        "Question": "Inside which HTML element do we put the JavaScript?",
        "Answers": ["<scripting>", "<javascript>", "<script>", "<js>"],
        "Correct Answer": "<script>"
    },
    {
        "Question": "JavaScript is a ___ -side programming language.",
        "Answers": ["Client", "Server", "Both", "None"],
        "Correct Answer": "Both"
    },
    {
        "Question": "Which Of The Dialog Box Display a Message And a Data Entry Field?",
        "Answers": ["alert()", "propmt()", "confirm()", "msg()"],
        "Correct Answer": "prompt()"
    },
    {
        "Question": "question 4",
        "Answers": ["blah", 4, 8, 7],
        "Correct Answer": ""
    },
    {
        "Question": "question 5",
        "Answers": ["blah", 4, 8, 7],
        "Correct Answer": ""
    },
    {
        "Question": "question 6",
        "Answers": ["blah", 4, 8, 7],
        "Correct Answer": ""
    },
    {
        "Question": "question 7",
        "Answers": ["blah", 4, 8, 7],
        "Correct Answer": ""
    },
    {
        "Question": "question 8",
        "Answers": ["blah", 4, 8, 7],
        "Correct Answer": ""
    },
    {
        "Question": "question 9",
        "Answers": ["blah", 4, 8, 7],
        "Correct Answer": ""
    },
    {
        "Question": "question 10",
        "Answers": ["blah", 4, 8, 7],
        "Correct Answer": ""
    }

]

var i = 0
var z = 0
var answers = questionForm[i].Answers

var displayQuestion = ()=> {
    questionEL.textContent = questionForm[i].Question
    choice1El.textContent = questionForm[i].Answers[0];
    choice2El.textContent = questionForm[i].Answers[1];
    choice3El.textContent = questionForm[i].Answers[2];
    choice4El.textContent = questionForm[i].Answers[3];
}
var timeLeft = 60;

var countDown = ()=> {
    
  
var timeInterval = setInterval(()=> {
    if (timeLeft === 0) {
    clearInterval(timeInterval);
    timerEl.textContent = "Game Over";
    buttonEl.textContent = "Play Again";
    buttonEl.style.display = "block";
    timeLeft = 60;
    i = 0;
    } 
    else if (timeLeft === 1) {
    timerEl.textContent = `${timeLeft} second remaining`;
    timeLeft--;
    } else {
    timerEl.textContent = `${timeLeft} seconds remaining`;
    timeLeft--;
    }
}, 100);
}


var nextQuestion = ()=> {
    i++;
    displayQuestion();
}
var startGame = ()=>{
    buttonEl.style.display = "none";
    timerEl.textContent = `${timeLeft} seconds remaining`;
    countDown()
    displayQuestion()
    nextQuestion()
    
}

buttonEl.addEventListener("click", ()=>startGame());
choice1El.addEventListener("click", ()=>nextQuestion());
choice2El.addEventListener("click", ()=>nextQuestion());
choice3El.addEventListener("click", ()=>nextQuestion());
choice4El.addEventListener("click", ()=>nextQuestion());