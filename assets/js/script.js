var scoreCounter = 0;
var timeLeft = 75;

function startQuiz() {
    var timer = setInterval(function() {
        if (timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById("time").innerHTML = "Finished";
            return;
        } else {
            document.getElementById("time").innerHTML = timeLeft;
        }
        timeLeft -= 1;
    }, 1000);



    hideStartBtn();
    showQuestionOneBtn();
}

function hideStartBtn() {
    let quizContainer = document.getElementById("quiz-container");
    if (quizContainer.display === "none") {
        quizContainer.style.display = "block";
    } else {
        quizContainer.style.display = "none";
    }
}

// hide/show question one
function showQuestionOneBtn() {
    let questionOneContainer = document.getElementById("question-one-container");
    if (questionOneContainer.display === "block") {
        questionOneContainer.style.display = "none";
    } else {
        questionOneContainer.style.display = "block";
    }
}

function hideQuestionOneBtn() {
    let questionOneContainer = document.getElementById("question-one-container");
    if (questionOneContainer.display === "none") {
        questionOneContainer.style.display = "block";
    } else {
        questionOneContainer.style.display = "none";
    }
}

// hide/show question two
function showQuestionTwoBtn() {
    let questionTwoContainer = document.getElementById("question-two-container");
    if (questionTwoContainer.display === "block") {
        questionTwoContainer.style.display = "none";
    } else {
        questionTwoContainer.style.display = "block";
    }

    hideQuestionOneBtn();
}

function hideQuestionTwoBtn() {
    let questionTwoContainer = document.getElementById("question-two-container");
    if (questionTwoContainer.display === "none") {
        questionTwoContainer.style.display = "block";
    } else {
        questionTwoContainer.style.display = "none";
    }
}

// hide/show question three
function showQuestionThreeBtn() {
    let questionThreeContainer = document.getElementById("question-three-container");
    if (questionThreeContainer.display === "block") {
        questionThreeContainer.style.display = "none";
    } else {
        questionThreeContainer.style.display = "block";
    }

    hideQuestionTwoBtn();
}

function hideQuestionThreeBtn() {
    let questionTwoContainer = document.getElementById("question-three-container");
    if (questionTwoContainer.display === "none") {
        questionTwoContainer.style.display = "block";
    } else {
        questionTwoContainer.style.display = "none";
    }
}

// hide/show question 4
function showQuestionFourBtn() {
    let questionFourContainer = document.getElementById("question-four-container");
    if (questionFourContainer.display === "block") {
        questionFourContainer.style.display = "none";
    } else {
        questionFourContainer.style.display = "block";
    }

    hideQuestionThreeBtn();
}

function hideQuestionFourBtn() {
    let questionFourContainer = document.getElementById("question-four-container");
    if (questionFourContainer.display === "none") {
        questionFourContainer.style.display = "block";
    } else {
        questionFourContainer.style.display = "none";
    }
}

// wrong/correct answer 1
function wrongAnswer1() {
    let wrongAnswer1 = document.getElementById("wrong-answer1");
    if (wrongAnswer1.display === "block") {
        wrongAnswer1.style.display = "none";
    } else {
        wrongAnswer1.style.display = "block";
    }

    timeLeft -= 15;
    setTimeout(() => { showQuestionTwoBtn() }, 1000);
}

function correctAnswer1() {
    let correctAnswer1 = document.getElementById("correct-answer1");
    if (correctAnswer1.display === "block") {
        correctAnswer1.style.display = "none";
    } else {
        correctAnswer1.style.display = "block";
    }

    setTimeout(() => { showQuestionTwoBtn() }, 1000);
}
// wrong/correct answer 2
function wrongAnswer2() {
    let wrongAnswer2 = document.getElementById("wrong-answer2");
    if (wrongAnswer2.display === "block") {
        wrongAnswer2.style.display = "none";
    } else {
        wrongAnswer2.style.display = "block";
    }

    timeLeft -= 15;
    setTimeout(() => { showQuestionThreeBtn() }, 1000);
}

function correctAnswer2() {
    let correctAnswer2 = document.getElementById("correct-answer2");
    if (correctAnswer2.display === "block") {
        correctAnswer2.style.display = "none";
    } else {
        correctAnswer2.style.display = "block";
    }

    setTimeout(() => { showQuestionThreeBtn() }, 1000);
}

function wrongAnswer3() {
    let wrongAnswer2 = document.getElementById("wrong-answer3");
    if (wrongAnswer2.display === "block") {
        wrongAnswer2.style.display = "none";
    } else {
        wrongAnswer2.style.display = "block";
    }

    timeLeft -= 15;
    setTimeout(() => { showQuestionFourBtn() }, 1000);
}

function correctAnswer3() {
    let correctAnswer3 = document.getElementById("correct-answer3");
    if (correctAnswer3.display === "block") {
        correctAnswer3.style.display = "none";
    } else {
        correctAnswer3.style.display = "block";
    }

    setTimeout(() => { showQuestionFourBtn() }, 1000);
}

function wrongAnswer4() {
    let wrongAnswer4 = document.getElementById("wrong-answer4");
    if (wrongAnswer4.display === "block") {
        wrongAnswer4.style.display = "none";
    } else {
        wrongAnswer4.style.display = "block";
    }

    timeLeft -= 15;
    setTimeout(() => { showHighScores() }, 1000);
}

function correctAnswer4() {
    let correctAnswer4 = document.getElementById("correct-answer4");
    if (correctAnswer4.display === "block") {
        correctAnswer4.style.display = "none";
    } else {
        correctAnswer4.style.display = "block";
    }

    setTimeout(() => { showHighScores() }, 1000);
}