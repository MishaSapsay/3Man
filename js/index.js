function rollDice() {
	var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 0 - 6
var PlayerOneImages = "images/dice-six-faces-"+randomNumber1+".png";
var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 0 - 6
var PlayerTwoImages = "images/dice-six-faces-"+randomNumber2+".png";

document.querySelector('.img1').setAttribute('src', PlayerOneImages);
document.querySelector('.img2').setAttribute('src', PlayerTwoImages);
	}	