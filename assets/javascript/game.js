var randomNumber; 
var purpleNumber;
var aquaNumber;
var whiteNumber;
var greenNumber;
var totalNumber = 0;
var wins = 0;
var losses = 0;

function getNumbers () {
    //to generate random number
    randomNumber = Math.floor(Math.random() * 101) + 19;
    $('#random-number').text(randomNumber);

    //used to generate the button numbers
    purpleNumber = Math.floor(Math.random() * 12) + 1;
    aquaNumber = Math.floor(Math.random() * 12) + 1;
    whiteNumber = Math.floor(Math.random() * 12) + 1;
    greenNumber = Math.floor(Math.random() * 12) + 1;
    

}

function checkNumbers () {
    //if the numbers are equal, user wins
    if (totalNumber === randomNumber) {
        var winningSound = document.getElementById("winAudio");
        winningSound.play();
        wins++;
        $('#wins').text("Wins: " + wins);
        resetGame();
    //if their guess is larger than the number, user loses
    } else if (totalNumber > randomNumber) {
        var losingSound = document.getElementById("loseAudio");
        losingSound.play();
        losses++;
        $('#losses').text("Losses: " + losses);
        resetGame();
    //else game continues
    }else {

    }
}

//resets for a new game where new numbers are generated 
//and the total amount is set back to 0
function resetGame () {

    getNumbers();
    totalNumber = 0;
    $('#total').text("Your total score is: " + totalNumber);
};


window.onload = function () {
    getNumbers();
    $('#wins').text("Wins: " + wins);
    $('#losses').text("Losses: " + losses);
    $('#total').text("Your total score is: " + totalNumber);
   
};


//each time a button is clicked, adds the number associated with that button
//to the total amount
//then runs checkNumbers to see if user wins, loses or continues playing
$(document).ready(function() {

    if ($('.aqua-button').on("click", function() {
        totalNumber = totalNumber + aquaNumber;
        $('#total').text("Your total score is: " + totalNumber);
        checkNumbers();
    }));

    if ($('.green-button').on("click", function() {
        totalNumber = totalNumber + greenNumber;
        $('#total').text("Your total score is: " + totalNumber);
        checkNumbers();
    }));

    if ($('.purple-button').on("click", function() {
        totalNumber = totalNumber + purpleNumber;
        $('#total').text("Your total score is: " + totalNumber);
        checkNumbers();
    }));

    if ($('.white-button').on("click", function() {
        totalNumber = totalNumber + whiteNumber;
        $('#total').text("Your total score is: " + totalNumber);
        checkNumbers();
    }));         
    
});


