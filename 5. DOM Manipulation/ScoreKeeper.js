var scoreOne = 0;
var scoreTwo = 0;
var scoreInput = document.querySelector("#scoreInput");
var scoreLimit = document.querySelector("#scoreLimit");
var score1 = document.querySelector("#score1");
var score2 = document.querySelector("#score2");
var player1 = document.querySelector("#player1");
var player2 = document.querySelector("#player2");
var reset = document.querySelector("#reset");


scoreInput.addEventListener("input", function() {
	scoreLimit.innerHTML = scoreInput.value;
	if(scoreLimit.innerHTML != scoreOne || scoreLimit.innerHTML != scoreTwo) {
		score1.style.color = "";
		score2.style.color = "";
	}
	if(scoreLimit.innerHTML == scoreOne){
		score1.style.color = "green";
	}
	if(scoreLimit.innerHTML == scoreTwo){
		score2.style.color = "green";
	}
})

player1.addEventListener("click", function() {
		if(scoreLimit.innerHTML > scoreOne && scoreLimit.innerHTML > scoreTwo) {
				scoreOne++;
				score1.innerHTML = scoreOne;
				if(scoreLimit.innerHTML == scoreOne) {
					score1.style.color = "green";
				}
		}
})

player2.addEventListener("click", function() {
		if(scoreLimit.innerHTML > scoreTwo && scoreLimit.innerHTML > scoreOne) {
			scoreTwo++;
			score2.innerHTML = scoreTwo;
			if(scoreLimit.innerHTML == scoreTwo) {
					score2.style.color = "green";
				}
		}
})

reset.addEventListener("click", function() {
	scoreOne = 0;
	scoreTwo = 0;
	score1.innerHTML = scoreOne;
	score2.innerHTML = scoreTwo;
	score1.style.color = "";
	score2.style.color = "";
})

