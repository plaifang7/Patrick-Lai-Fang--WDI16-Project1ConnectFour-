$(document).ready(function () {

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

            let userVal = 1;

            if (userCount % 2 == 1) {
                userVal = 1;
            }
            else {
                userVal = 2;
            }

            for (let token = 0; token < 6; token++) {
                if (gameBoard[token][x] != 0) {
                    continue
                }
                else {
                    gameBoard[token][x] = userVal;
                    console.log(gameBoard)


                    var boardRow = token.toString()
                    var boardRowName = ".row" + boardRow
                    var boardCol = x.toString()
                    var boardColName = ".col" + boardCol
                    console.log(boardColName)
                    console.log(boardRowName)


                    const playerToken = $(boardColName + boardRowName)
                    console.log(playerToken)
                    if (userVal === 1) {
                        $(playerToken).css('background-color', 'red')
                    }
                    else if (userVal === 2) {
                        $(playerToken).css('background-color', 'yellow')

                    }

                }



                userCount++
                break
            }







        }


    }


    checkEmptySlot = 0;
    
    const userWin = { 
        for(let y = 0; y < 6; y++) {
            for(let x = 0; x < 7; x++){
                var user = gameBoard[y][x]
           //this function scans the board for empty sections and then tells computer that empty slots are not included in final search for winner by using continue.     
        scanEMpty: function() {
            if(user == checkEmptySlot) {
                continue
            }
        }
        //this function reads the grid vertically and checks for a value of four in a row
        winVertical: function() {
            if(y + 3 < 6){
                if(user == gameBoard[y+1][x] && user ==gameBoard[y+2][x] && user == gameBoard[y+3][x])
            }
            return user
            console.log("Player" + user + "is the Winner" )

        },
        winHorizontal: function() {
            if(x+ 3 < 7){
                if(user == gameBoard[y][x+1] && user == gameBoard[y][x+2] && user == gameBoard[y][x+3])
            }
            return user
            console.log("Player" + user + "is the Winner" )
        },
        winDiagUL: function() {
            if(c - 3 >= 0 && user == gameBoard[y+1][x-1] && user == gameBoard[y+2][x-2] && user gameBoard[y+3][x-3]){
                return user
                console.log("Player" + user + "is the Winner" )
            }

        },
        winDiagUR: function() {
            if(c + 3 < 7 && user == gameBoard[y+1][x+1]user == gameBoard[y+2][x+2] && user gameBoard[y+3][x+3]){
                return user
                console.log("Player" + user + "is the Winner")
            }
        }


    }
        
   


    }
    return checkEmptySlot
    }





    //click function for player to drop checker. 
    $('.grid').click(function () {
        const colClick = $(this).attr('x')

        clickFunct.changeGVal(colClick)

        console.log($(this).attr('x'))



    })

   



    



})

//FOR LATER
    //  $(' gridrow.none').on('mouseenter', function () {
    //         const col = $(this).data('x')
    //         var $checkEmpty = checkForEmptySlot(col)
    //         $checkEmpty.addClass('move-red')
    //         console.log(col);

    //     })


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


   

//This code is for the future when I want the username input to work.
// var userOne = document.getElementById("userOne").value;
// var userTwo = document.getElementById("userTwo").value;

 