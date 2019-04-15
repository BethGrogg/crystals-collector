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
    console.log("randomNumber: " + randomNumber);
    $('#random-number').text(randomNumber);
    //used to generate the button numbers
    purpleNumber = Math.floor(Math.random() * 12) + 1;
    console.log("purpleNumber: " + purpleNumber);
    aquaNumber = Math.floor(Math.random() * 12) + 1;
    console.log("aquaNumber: " + aquaNumber);
    whiteNumber = Math.floor(Math.random() * 12) + 1;
    console.log("whiteNumber: " + whiteNumber);
    greenNumber = Math.floor(Math.random() * 12) + 1;
    console.log("greenNumber: " + greenNumber); 

}

function checkNumbers () {

    if (totalNumber === randomNumber) {
        console.log("you won!");
        wins++;
        $('#wins').text("Wins: " + wins);
        resetGame();
    } else if (totalNumber > randomNumber) {
        console.log("you lost");
        losses++;
        $('#losses').text("Losses: " + losses);
        resetGame();
    }else {

    }
}

function resetGame () {

    getNumbers();
    totalNumber = 0;
    $('#total').text(totalNumber);
};

window.onload = function () {
    getNumbers();
    $('#wins').text("Wins: " + wins);
    $('#losses').text("Losses: " + losses);
    $('#total').text("Your total score is: " + totalNumber);
};



$(document).ready(function() {


    if ($('.aqua-button').on("click", function() {
        totalNumber = totalNumber + aquaNumber;
        console.log(totalNumber);
        $('#total').text("Your total score is: " + totalNumber);
        checkNumbers();
    }));

    if ($('.green-button').on("click", function() {
        totalNumber = totalNumber + greenNumber;
        console.log(totalNumber);
        $('#total').text("Your total score is: " + totalNumber);
        checkNumbers();
    }));

    if ($('.purple-button').on("click", function() {
        totalNumber = totalNumber + purpleNumber;
        console.log(totalNumber);
        $('#total').text("Your total score is: " + totalNumber);
        checkNumbers();
    }));

    if ($('.white-button').on("click", function() {
        totalNumber = totalNumber + whiteNumber;
        console.log(totalNumber);
        $('#total').text("Your total score is: " + totalNumber);
        checkNumbers();
    }));         
    
});


