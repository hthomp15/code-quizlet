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
        "Question": "question 1",
        "Answers": ["blah", 4, 8, 7],
        "Correct Answer": ""
    },
    {
        "Question": "question 2",
        "Answers": ["blah", 4, 8, 7],
        "Correct Answer": ""
    },
    {
        "Question": "question 3",
        "Answers": ["blah", 4, 8, 7],
        "Correct Answer": ""
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
var questions = questionForm[i]

var displayQuestion = ()=> {
    questionEL.textContent = questions.Question
    choice1El.textContent = answers[0];
    choice2El.textContent = answers[1];
    choice3El.textContent = answers[2];
    choice4El.textContent = answers[3];
}
var timeLeft = 60;

var countDown = ()=> {
    
  
var timeInterval = setInterval(()=> {
    if (timeLeft === 0) {
    clearInterval(timeInterval);
    timerEl.textContent = "Game Over"
    } 
    else if (timeLeft === 1) {
    timerEl.textContent = `${timeLeft} second remaining`;
    timeLeft--;
    } else {
    timerEl.textContent = `${timeLeft} seconds remaining`;
    timeLeft--;
    }
}, 1000);
}

var startGame = ()=>{
    timerEl.textContent = `${timeLeft} seconds remaining`;
    countDown()
    displayQuestion()
    
}

buttonEl.addEventListener("click", ()=>startGame());
