var questionEl = document.querySelector(".question");
var questionsFormEl = document.querySelector(".questions-form");
var timerEl = document.querySelector(".timer");
var buttonEl = document.querySelector(".btn");
var choicesEl = document.querySelector(".choices")
var choice1El = document.querySelector(".choice-1");
var choice2El = document.querySelector(".choice-2");
var choice3El = document.querySelector(".choice-3");
var choice4El = document.querySelector(".choice-4");
var answerEl = document.querySelector(".answer")
var scoreEl = document.querySelector(".high-score")
// Will try this Ul sleector to populte the entire answers list in one call. 
// var choicesEL = document.querySelector("choices");


var questionForm = [
    {
        "Question": "Inside which HTML element do we put the JavaScript?",
        "Answers": ["<scripting>", "<javascript>", "<script>", "<js>"],
        "Correct": "<script>"
    },
    {
        "Question": "JavaScript is a ___ -side programming language.",
        "Answers": ["Client", "Server", "Both", "None"],
        "Correct": "Both"
    },
    {
        "Question": "Which Of The Dialog Boxes display a message and a data entry field?",
        "Answers": ["alert()", "propmt()", "confirm()", "msg()"],
        "Correct": "propmt()"
    },
    {
        "Question": "Which of the following functions will generate a random number?",
        "Answers": ["math.random()", "random()", "generate.random()", "Math.random()"],
        "Correct": "Math.random()"
    },
    {
        "Question": "JavaScript has a file extension of...",
        "Answers": [".js", ".java", ".javascript", ".xjs"],
        "Correct": ".js"
    },
    {
        "Question": "Which of the following is an Array?",
        "Answers": ["var array = []", "var array = {}", "var array = ()=>{}", "var array = 12, 4, 8"],
        "Correct": "var array = []"
    },
    {
        "Question": "If I add 5 to the following variables, which one will not change value?",
        "Answers": ["let x = 10", "var x = 22", "const x = 19", "x = 7"],
        "Correct": "const x = 19"
    },
    {
        "Question": "Which of the following is not a data type?",
        "Answers": ["String", "Number", "Object", "Function"],
        "Correct": "Function"
    },
    {
        "Question": "Which of the following is not a Conditional Statement?",
        "Answers": ["if", "switch", "else", "while"],
        "Correct": "while"
    },
    {
        "Question": "Which of the following is not a type of error",
        "Answers": ["Syntax Error", "Conditional Error", "Reference Error", "Type Error"],
        "Correct": "Conditional Error"
    }

]

var i = 0
var z = 0
var score = 0

var displayQuestion = ()=> {
    questionEl.textContent = questionForm[i].Question;
    choice1El.textContent = questionForm[i].Answers[0];
    choice2El.textContent = questionForm[i].Answers[1];
    choice3El.textContent = questionForm[i].Answers[2];
    choice4El.textContent = questionForm[i].Answers[3];
}
var timeLeft = 60;

var showResult = (e)=> {
    let correct = answerEl
    let inCorrect = answerEl
    e.stopPropagation()
    if (e.target.outerText === questionForm[i].Correct) {
        correct.textContent = "Well Done 🤩"
        score += 100 
        scoreEl.textContent = score
        setTimeout(()=> {
            answerEl.textContent = ""
            i++ 
            displayQuestion()
        }, 1000)
    } else {
        inCorrect.textContent = "Incorrect 😱"
        setTimeout(()=> {
            answerEl.textContent = ""
            timeLeft = timeLeft - 5;
            i++
            displayQuestion()
        }, 1000)
    }
    
}

var countDown = ()=> {
    var timeInterval = setInterval(()=> {
        if (timeLeft === 0) {
            clearInterval(timeInterval)
            endGame()
        } 
        else if (timeLeft === 1) {
            timerEl.textContent = `${timeLeft} second remaining`;
            timeLeft--;
        } 
        else if (i===10) {
            clearInterval(timeInterval)
            endGame()
        } else {
            timerEl.textContent = `${timeLeft} seconds remaining`;
            timeLeft--;
        }
    }, 100);
}
var endGame = ()=> {
    var finishTime = 60 - timeLeft;
    timerEl.textContent = "Game Over";
    buttonEl.textContent = "Play Again";
    buttonEl.style.display = "block";
    questionsFormEl.style.display = "none"
    questionEl.textContent = `You finished in ${finishTime} seconds with a score of...${score}!`

    
}


var startGame = ()=>{
    score = 0 
    choicesEl.style.display = "block"
    scoreEl.textContent = score
    choice1El.addEventListener("click", showResult);
    choice2El.addEventListener("click", showResult);
    choice3El.addEventListener("click", showResult);
    choice4El.addEventListener("click", showResult);
    i=0
    timeLeft = 60
    questionsFormEl.style.display = "block";
    timerEl.textContent = `${timeLeft} seconds remaining`;
    countDown()
    displayQuestion()
}

buttonEl.addEventListener("click", ()=>startGame());
