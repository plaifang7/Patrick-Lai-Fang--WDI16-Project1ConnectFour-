$(document).ready(function(){


const gameBoard = {
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0]
}

var userOne = document.getElementById("").value;
var userTwo = document.getElementById("").value;

$("game-board").mouseover(function(){
    if (playerTurn === red) {
        grid.style.background = red;
    }
    else if(playerTurn === yellow){
        grid.style.background = yellow;
    }
})

})