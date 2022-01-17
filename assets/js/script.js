//All the page element varaibles 
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
var headingEl = document.querySelector(".heading");
var scoreReportEl = document.querySelector(".score-report");
var highScoreFormEl = document.querySelector(".high-score-form");
var instructionPageEl = document.querySelector(".instruction-page")
var submitScoreEl = document.querySelector(".submit")

//These elements need to be hidden at the start of the game    
questionsFormEl.style.display = "none"
highScoreFormEl.style.display = "none"

//This an array of questions that will be displayed. See the choices and correct answers
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
/* These variables are used to loop through my display function
    This willl display my question and answer choices when called */
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

//This is the total time of the game
var timeLeft = 100;
//This will listen for the click event and display if it was the correct choice
var showResult = (e)=> {
    let correct = answerEl
    let inCorrect = answerEl
    //I needed to stop the clicking from bubbling 
    e.stopPropagation()
    //If the choice is matched the correct answer score + 100
    if (e.target.outerText === questionForm[i].Correct) {
        correct.textContent = "Well Done 🤩"
        score += 100 
        scoreEl.textContent = score
        setTimeout(()=> {
            answerEl.textContent = ""
            i++ 
            displayQuestion()
        }, 1000)
    //If the choice is incorrect we will subtract 10 seconds    
    } else {
        inCorrect.textContent = "Incorrect 😱"
        setTimeout(()=> {
            answerEl.textContent = ""
            timeLeft = timeLeft - 10;
            i++
            displayQuestion()
        }, 1000)
    }
}

/* This is my count down function. When you click start the countdown begins
    It will display the time remaining in the TimerEL element */
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
    }, 1000);
}

// This is my end game function. This displays my end game page content
var endGame = ()=> {
    headingEl.style.display = "block"
    timerEl.textContent = "Game over! 🙅🏽‍♂️";
    buttonEl.textContent = "Play Again";
    buttonEl.style.display = "block";
    questionsFormEl.style.display = "none";
    highScoreFormEl.style.display = "block";
    scoreReportEl.textContent = `Your score is ${score} and you had ${timeLeft} seconds remaining!`;
}

//This is the start game function. This resets the game and begins the countdown when clicked
var startGame = ()=>{
    buttonEl.style.display = "none"
    instructionPageEl.style.display = "none"
    headingEl.style.display = "none"
    score = 0 
    questionsFormEl.style.display = "none"
    highScoreFormEl.style.display = "none"
    choicesEl.style.display = "block"
    scoreEl.textContent = score
    //This activates clicking on my answers and runs them through the show result when clicked
    choice1El.addEventListener("click", showResult);
    choice2El.addEventListener("click", showResult);
    choice3El.addEventListener("click", showResult);
    choice4El.addEventListener("click", showResult);
    i=0
    timeLeft = 100
    questionsFormEl.style.display = "block";
    timerEl.textContent = `${timeLeft} seconds remaining`;
    countDown()
    displayQuestion()
    saveScore()
}

//This saves scores to the local storage. 
var saveScore = ()=> {
    var userInitialsEl = document.querySelector(".initials").value;
    var userScore = score
    var scoreInput = {
        initials: userInitialsEl,
        score: userScore,
    }
    var oldList = localStorage.getItem("High Scores")
    var newList = JSON.parse(oldList) ?? []
    newList.push(scoreInput)
    //Here i sort the list of scores and take the three highest
    newList.sort((a, b) => b.score - a.score)
    newList.splice(3)
    localStorage.setItem("High Scores", JSON.stringify(newList))
}

//Start game button functionality. when clickd start game
buttonEl.addEventListener("click", ()=>startGame());
//When clicked submit scores to local storage and move to highscores page
submitScoreEl.addEventListener("click", (event)=>{
    saveScore()
    window.location.href="highscore.html"
})