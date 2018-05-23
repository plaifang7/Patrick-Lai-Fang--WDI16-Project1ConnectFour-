$(document).ready(function () {
    var player = 'red'

    // alert("Welcome to Connect 4! Choose a Game Mode.")
    function startGame() {
        var gameBoard = [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0]
        ]
        for(let i =0; i <= 6; i++){
            for(j = 0; j <=7; j++){

            }
        }

        //or

        var gameBoard = document.getElementsByClassName('game-board')

        $('.grid')
        // code to push a 1 or 2 into array if player takes their turn
        // for (let x = 0; x < gameboard.length; x++) {
        //     if (player % 2 === 1) {
        //         gameBoard[x].push(1)

        //     }
        //     else if (player % 2 === 0) {
        //         gameBoard[x].push(2)
        // console.log(gameBoard);

    }
    // I need to tie my gameBoard array to the information below and am having troubles with it.

    // player turn
    if (player == 'yellow') {
        player = 'red'
    }
    else {
        player = 'yellow'
    }

    //This will carry all functions for when the user hovers over the board and clicks a column.
    var clickFunct = function () {
        //checks for an empty  slot on the grid
        function checkForEmptySlot(col) {
            const slots = $(`.gridrow[x = '${col}']`)
            for (let i = slots.length - 1; i >= 0; i--) {
                $slots = $(slots[i])
                if (slots.hasClass('none')) {
                    return $slots
                }
            
            return null;
            console.log(slots)
            }
        }

        // this was supposed to create a hover effect, but MVP. save for later time

        $(' gridrow.none').on('mouseenter', function () {
            const col = $(this).attr('x')
            var $checkEmpty = checkForEmptySlot(col)
            $checkEmpty.addClass('move-red')
            console.log(col);

        })

        //click function for player to drop checker. declared that there is an empty spot via check and then add checker in spot via removeCLass and addClass
        $('.gridrow').click(function () {
            const col = $(this).attr('col')
            var $checkEmpty = checkForEmptySlot(col)
            $checkEmpty.removeClass('none')
            $checkEmpty.addClass('p1')
            

            console.log($(this).attr('x'))



        })

    }

    clickFunct();





    // for (let x = 0; x < gameboard.length; x++) {
    //     if (player % 2 === 1) {
    //         gameBoard[x].push(1)

    //     }
    //     else if (player % 2 === 0) {
    //         gameBoard[x].push(2)


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
