// This will dislplay the top three highscores. 
var displayScores = ()=> {
    var highScore = JSON.parse(localStorage.getItem("High Scores"));

    var scoreListEl = document.querySelector(".score-list")
    var firstplace = document.createElement("li")
    var secondplace = document.createElement("li")
    var thirdplace = document.createElement("li")
    
    firstplace.textContent = highScore[0].initials + " " + highScore[0].score
    secondplace.textContent = highScore[1].initials + " " + highScore[1].score 
    thirdplace.textContent = highScore[2].initials + " " + highScore[2].score 
    scoreListEl.appendChild(firstplace)
    scoreListEl.appendChild(secondplace)
    scoreListEl.appendChild(thirdplace)
}
displayScores()
