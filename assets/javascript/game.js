$(document).ready (function() {
var target = 0;
var crystal = 0;
var gayle = 0;
var kristol = 0;
var roper = 0;
var tally = 0;
var computerScore = 0;
var userScore = 0;


// This function generates the target number and resets var tally to 0 and clears "tally" and "status".
$("#start").on("click", function(){
    target = Math.floor(Math.random() * 100) + 20;
    $("#target").html("The target number is " + target);
    tally = 0;
    $("#tally").html("");
    $("#status").html("");
});
// This function assigns values to the minierals. This might be a loop. Note that the same value for each button could be the same-- it shouldn't.
$("#start").on("click", function() {
    crystal = Math.floor(Math.random() * 12) + 1;
    console.log("Crystal is " + crystal);
    gayle = Math.floor(Math.random() * 12) + 1;
    console.log("Gayle is " + gayle);
    kristol = Math.floor(Math.random() * 12) + 1;
    console.log("Kristol is " + kristol);
    roper = Math.floor(Math.random() * 12) + 1;
    console.log("Roper is " + roper);
});
// These are all face button click functions. This might be a loop.
$("#crystal").on("click", function() {
    tally += crystal;
    update();
});
$("#gayle").on("click", function() {
    tally += gayle;
    update ();
});
$("#kristol").on("click", function() {
    tally += kristol;
    update ();
});
$("#roper").on("click", function() {
    tally += roper;
    update ();
});
// This function updates var computerScore and var userScore and displays div status.
function update () {
    $("#tally").html("Your tally is " + tally);
    if (tally > target) {
        $("#status").html("You Lose! Click Start Game to play again.");
        computerScore += 1;
        display ();
    }
    else
    if (tally === target) {
        $("#status").html("You Win! Click Start Game to play again.");
        userScore += 1;
        display ();
    }
};
// This function displays var computerScore and var userScore to the appropriate divs. 
function display () {
    $("#computerScore").html("The computer's score is " + computerScore);
    $("#userScore").html("Your score is " + userScore);
};
});