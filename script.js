$(document).ready(function () {

    // alert("Welcome to Connect 4! Choose a Game Mode.")
    function startGame() {
        const gameBoard = [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0]
        ]
        gameBoard.start();
        console.log(gameBoard);

    }
    playCheck = 1;
    var clickFunct = (() => {
        for (let x = 0; x < gameboard.length; x++) {
            if (playCheck % 2 === 1) {
                gameBoard.push(1)

            }
            else if (playCheck % 2 === 0) {
                gameBoard.push(2)
            }
            console.log(gameBoard);
        }
        
    })

   
    $('.gridrow').click(function () {
        $(this).attr('x')
        // console.log($(this).attr('x'))
        
       

    })









    // $("game-board").mouseover(function(){
    //     if (playerOne) {
    //         grid.style.background = red;
    //     }
    //     else if(playerTwo){
    //         grid.style.background = yellow;
    //     }
    // })

})
//This code is for the future when I want the username input to work.
// var userOne = document.getElementById("userOne").value;
// var userTwo = document.getElementById("userTwo").value;
