$(document).ready(function () {
    var player = 'red'

    // alert("Welcome to Connect 4! Choose a Game Mode.")

    var gameBoard = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
    ]









    // I need to tie my gameBoard array to the information below and am having troubles with it.
    userCount = 1;

    //This const will change the value for each player in the array and will also allow my click function to change the colors in the grid for each player.
    const clickFunct = {

        changeGVal: function (x) {

            let newValue = 1;

            if (userCount % 2 == 1) {
                newValue = 1;
            }
            else {
                newValue = 2;
            }

            for (let token = 0; token < 6; token++) {
                if (gameBoard[token][x] != 0) {
                    continue
                }
                else {
                    gameBoard[token][x] = newValue;
                    console.log(gameBoard)

                    break
                }

                var boardRow = token.toString()
                var boardRowName = ".row" + boardRow
                var boardCol = x.toString()
                var boardColName = ".col" + boardCol
               

                var playerToken = function(boardColName, boardRowName){
                    if(){
                        $('gridrow').css("background-color")
                    }
                    else{

                    }
                }





            }


        }

    }




    //click function for player to drop checker. declared that there is an empty spot via check and then add checker in spot via removeCLass and addClass
    $('.grid').click(function () {
        const colClick = $(this).attr('x')

        clickFunct.changeGVal(colClick)

        console.log($(this).attr('x'))



    })














})
//FOR LATER
 // for (let x = 0; x < gameboard.length; x++) {
    //     if (player % 2 === 1) {
    //         gameBoard[x].push(1)

    //     }
    //     else if (player % 2 === 0) {
    //         gameBoard[x].push(2)

    // code to push a 1 or 2 into array if player takes their turn
    // for (let x = 0; x < gameBoard.length; x++) {
    //     if (player % 2 === 1) {
    //         gameBoard[x].push(1)

    //     }
    //     else if (player % 2 === 0) {
    //         gameBoard[x].push(2)
    // console.log(gameBoard);


       // this was supposed to create a hover effect, but MVP. save for later time

        // $(' gridrow.none').on('mouseenter', function () {
        //     const col = $(this).data('x')
        //     var $checkEmpty = checkForEmptySlot(col)
        //     $checkEmpty.addClass('move-red')
        //     console.log(col);

        // })


    // player turn
    // if (player == 'yellow') {
    //     player = 'red'
    // }
    // else {
    //     player = 'yellow'
    // }

//This code is for the future when I want the username input to work.
// var userOne = document.getElementById("userOne").value;
// var userTwo = document.getElementById("userTwo").value;

  // $("game-board").mouseover(function(){
    //     if (playerOne) {
    //         grid.style.background = red;
    //     }
    //     else if(playerTwo){
    //         grid.style.background = yellow;
    //     }
    // })