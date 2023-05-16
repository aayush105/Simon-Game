var buttonColors=["red", "blue", "green", "yellow"];

var gamePattern=[];




function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor=buttonColors[randomNumber];
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);   
    gamePattern.push(randomChosenColor);
}

function playSound(name){
    var audio = new Audio("sounds/"+ name +".mp3");
    audio.play();
}