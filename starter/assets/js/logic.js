// global variables

let startButton = document.querySelector("#start");
startButton.addEventListener("click", init);

let startScreen = document.querySelector("#start-screen");
let questionScreen = document.querySelector("#questions");
let endScreen = document.querySelector("#end-screen");

let timer = document.querySelector("#time");
let countdown = 5;
let intervalID;
let choiceBox = document.querySelector('#choices');


// function list


// start button to initiate timer + first question appear

function init() {

    // start screen to hide
    startScreen.classList.toggle("start")
    startScreen.classList.toggle("hide")

    // question title to appear  
    questionScreen.classList.toggle("hide")
    questionScreen.classList.toggle("start")

    // start time
    startTimer();
    timeRemaining();
    nextQuestion();

}


function startTimer() {
    intervalID = setInterval(timeRemaining, 1000);
}


function timeRemaining() {
    if (countdown > 0) {
        countdown--;
        timer.textContent = countdown;
    } else {
        clearInterval(intervalID);
    }
}

function nextQuestion() {

    let question = questionList[0];

    document.querySelector("#question-title").textContent = question.title;

    for (i = 0; i < question.choices.length; i++) {
        let choiceButton = document.createElement("button")
        choiceButton.textContent = question.choices[i];
        choiceBox.appendChild(choiceButton);


        choiceButton.addEventListener("click", checkAnswer);

        setAttribute()

    }

}


function checkAnswer(event) {
    let button = event.target;
    console.log(button.dataset.);
}

// choice button clicks to verify choice and show next question


    // listen for when choice is clicked

    // if correct choice clicked will add to score

    // if incorrect will reduce timer by X

    // will show user next question





    // if incorrect answer subtract time




// quiz end at question.length end or timer === 0




// quiz end displays score and allows user to enter intials



// saved initials and scores saved in local storage -> score.js file for score page logic