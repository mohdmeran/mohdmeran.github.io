function updateScoreBoard(){
		//update player points
		for(let i = 0; i < playerScore; i++){
			playerPoints[i].setAttribute("style", "background-color: #E8A87C");
		}

		//update comp points
		for(let i = 0; i < compScore; i++){
			compPoints[i].setAttribute("style", "background-color: #659DBD");
		}

		//check if one of the player has reach 5 wins
		if(playerScore >=5 || compScore >=5){
			resultText.textContent = "GAME OVER";
			playBtns.forEach(btn => btn.disabled = true);
			
			const restartBtn = document.createElement("button");
			restartBtn.textContent = "RESTART";
			restartBtn.addEventListener("click", e => window.location.reload());
			//get resultSide so we can add restart button
			const resultSide = document.querySelector("#resultSide");

			resultSide.appendChild(restartBtn);

		}
	}

function playRound(e){
				//0         1         2
let choices = ["paper", "scissor", "rock"];

let playerChoice = choices.indexOf(e.target.id);
let compChoice = Math.floor(Math.random() * 3);

//set Text for choice
playerChoiceText.textContent = `${e.target.id}`;
compChoiceText.textContent = `${choices[compChoice]}`;

//set the image base on choice
playerImg.setAttribute("src", `${e.target.id}.png`);
playerImg.setAttribute("style", "display: block");
compImg.setAttribute("src", `${choices[compChoice]}.png`);
compImg.setAttribute("style", "display: block");

result = playerChoice - compChoice;

//decide for winner
if(playerChoice == compChoice){
	resultText.textContent = "Draw!";
}
else if(result == 1 || result == -2){
	playerScore++;
	resultText.textContent = "Round Win! " + choices[playerChoice] + " beats " + choices[compChoice];
}
else{
	compScore++;
	resultText.textContent = "Round Lose! " + choices[compChoice] + " beats " + choices[playerChoice];
}

//updateScore
updateScoreBoard();

}

const maxRound = 5;

var playerScore = 0;
var compScore = 0;

//scoreboard
const playerPoints = document.querySelectorAll("#playerPointContainer > .point");
const compPoints = document.querySelectorAll("#compPointContainer > .point");
const resultText = document.querySelector("#result");

//choices
const playerChoiceText = document.querySelector("#playerChoice");
const compChoiceText = document.querySelector("#compChoice");

const playBtns = document.querySelectorAll(".playBtn");

//getImage
const playerImg = document.querySelector("#playerImg");
const compImg = document.querySelector("#compImg");

playBtns.forEach(playBtn => playBtn.addEventListener("click", playRound));