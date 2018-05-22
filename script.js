$(document).ready(function(){

alert("Welcome to Connect 4! Choose a Game Mode.")
function startGame () {
const gameBoard = [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0]
]
gameBoard.start();
}
// console.log(gameBoard);





$("game-board").mouseover(function(){
    if (playerOne) {
        grid.style.background = red;
    }
    else if(playerTwo){
        grid.style.background = yellow;
    }
})

})
//This code is for the future when I want the username input to work.
// var userOne = document.getElementById("userOne").value;
// var userTwo = document.getElementById("userTwo").value;
