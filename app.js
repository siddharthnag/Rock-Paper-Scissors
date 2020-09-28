var userScore = 0;
var compScore = 0;

const smallUser = "user".fontsize(3).sub();
const smallComp = "comp".fontsize(3).sub();

// DOM variables (HTML elements)
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

// main function
function main() {
    rock_div.addEventListener("click", function () { game("rock"); })
    paper_div.addEventListener("click", function () { game("paper"); })
    scissors_div.addEventListener("click", function () { game("scissors"); })
}

// play game with user choice
function game(userChoice) {
    const compChoice = getCompChoice();
    switch (userChoice + compChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, compChoice);
            break;

        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, compChoice);
            break;

        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice, compChoice);
            break;
    }
}

// randomly generate computer choice
function getCompChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

// function to handle user win
function win(user, comp) {
    const user_div = document.getElementById(user);

    // update scores
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;

    // glow around item
    result_p.innerHTML = user + smallUser + " beats " + comp + smallComp + ". You win!";
    user_div.classList.add("green-glow");
    setTimeout(function() { user_div.classList.remove("green-glow") }, 1000);
}

// function to handle user loss
function lose(user, comp) {
    const user_div = document.getElementById(user);

    // update scores
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;

    // glow around item
    result_p.innerHTML = user + smallUser + " loses to " + comp + smallComp + ". You lost!";
    user_div.classList.add("red-glow");
    setTimeout(function() { user_div.classList.remove("red-glow") }, 1000);
}

// function to handle draw
function draw(user, comp) {
    const user_div = document.getElementById(user);

    // update scores
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;

    // glow around item
    result_p.innerHTML = user + smallUser + " equals " + comp + smallComp + ". It's a draw!";
    user_div.classList.add("gray-glow");
    setTimeout(function() { user_div.classList.remove("gray-glow") }, 1000);
}

main();