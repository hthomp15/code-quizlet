var questions = [
    "question 1", "question 2", "question 3", "question 4", "question 5",
    "question 6", "question 7", "question 8", "question 9", "question 10",
]

var answers = {
    0: ["blah", 4, 8, 7],
    1: [1,2,3,4],
    2: [1.1, 2.1, 3.1, 4.1],
    3: [1.2, 2.2, 3.2, 4.2],
    4: ["hell0", 1, 5, 9],
    5: ["hell0", 1, 5, 9], 
    6: ["hell0", 1, 5, 9], 
    7: ["hell0", 1, 5, 9], 
    8: ["hell0", 1, 5, 9],
    9: ["hell0", 1, 5, 9]
}
var i = 0 
var values = answers[i];


var callQuestion = ()=>{
    for (i; i < 9; i++) {
        console.log(questions[i]);
        console.log(answers[i]);
        for (let i = 0; i < 4; i++) {
            console.log(values[i]);
        }
        
    }
}

callQuestion()