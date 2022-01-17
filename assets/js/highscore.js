// This will dislplay the top three highscores. 
var displayScores = ()=> {
    var highScore = JSON.parse(localStorage.getItem("High Scores"));
    var scoreListEl = document.querySelector(".score-list")
    for (i = 0; i < 3; i++) {
        var finisherEl = document.createElement("li")
        finisherEl.textContent = highScore[i].initials + " " + highScore[i].score
        scoreListEl.appendChild(finisherEl)
    }
}
displayScores()
