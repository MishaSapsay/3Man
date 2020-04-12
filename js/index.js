function rollDice() {
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 0 - 6
var PlayerOneImages = "images/dice-six-faces-"+randomNumber1+".png";
var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 0 - 6
var PlayerTwoImages = "images/dice-six-faces-"+randomNumber2+".png";
var diceTotal = randomNumber1 + randomNumber2;
var diceNumbers = [randomNumber1,randomNumber2].sort();
var doubles = randomNumber1 == randomNumber2 ;
function doublesMessage() { if (doubles) {
	return "Doubles! Assign "+randomNumber1+" drinks.";
}
else {return "";}}; 
function sumMessage() {
	if(diceTotal == 7) {return " 1 drink to player on your left.";}
	else if(diceTotal == 9) {return " You drink 1. Lose your turn!";}
	else if(diceTotal == 11) {return " 1 drink to player of your right.";}
	else {return "";}
};
function threeManMessage() {
	if(diceTotal == 3) {return " 1 drink to 3Man.";}
	else if (randomNumber1 == 3 && randomNumber2 == 3) {return " 2 drinks to 3Man";}
	else if ((randomNumber1 == 3 || randomNumber2 == 3) && randomNumber1 != randomNumber2) {return " 1 drink to 3Man";}
	else {return "";}
};
function specialMessage() {
	if(diceNumbers.toString() == '2,4') {return "1 drink to each Beer drinker.";}
	else if(diceNumbers.toString() == '2,6') {return "1 drink to each Wine drinker.";}
	else if(diceNumbers.toString() == '1,5') {return "Area 51! Roll the 20-sided die.";}
	else if(diceNumbers.toString() == '1,4' || diceNumbers.toString() == '4,6') {return "Lose your turn!";}
	else {return "";}
};

document.querySelector('.img1').setAttribute('src', PlayerOneImages);
document.querySelector('.img2').setAttribute('src', PlayerTwoImages);
outcome.innerHTML = doublesMessage() + sumMessage() + threeManMessage() + specialMessage();


}	