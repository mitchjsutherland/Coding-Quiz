// Get score from local storage

function loadScores() {

    // let highscores = JSON.parse(localStorage.getItem(userN));

    for (let i = 0; i < localStorage.length; i++) {

        let savedUserName = localStorage.key(i);
        let savedUserScore = localStorage.getItem(savedUserName);

        let newScore = document.createElement("li");
        newScore.textContent = (`${savedUserName} ${savedUserScore}`);

        document.querySelector("#highscores").appendChild(newScore)

        // console.log(localStorage.getItem(localStorage.key(i)));
      }

;

}

loadScores();