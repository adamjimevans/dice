
var output=["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png", ];
var randomNumber1 = Math.floor(Math.random()*6);
var result = "images/" + output[randomNumber1]
document.querySelector(".img1").setAttribute("src", result)

var output=["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png", ];
var randomNumber2 = Math.floor(Math.random()*6);
var result = "images/" + output[randomNumber2]
document.querySelector(".img2").setAttribute("src", result)




  if (randomNumber1>randomNumber2){
document.querySelector("h1").innerHTML = "Player 1 wins"
}
else if (randomNumber1<randomNumber2){
document.querySelector("h1").innerHTML = "Player 2 wins"
}
else {
document.querySelector("h1").innerHTML = "Draw"
}
