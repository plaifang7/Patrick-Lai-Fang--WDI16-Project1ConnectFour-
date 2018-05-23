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

        // console.log(gameBoard);

    }

    //This will carry all functions for when the user hovers over the board and clicks a column.
    var clickFunct = function () {
        //checks for an empty  slot on the grid
        function checkForEmptySlot(col) {
            const slots = $(`.gridrow[x = '${col}']`)
            for(let i = slots.length- 1; i>= 0; i--){
                const $slots = $(slots[i])
                if(slots.hasClass('none')){

                }
            }
            console.log(slots)
        }

        // this was supposed to create a hover effect

        // $(' gridrow.none').on('mouseenter', function () {
        //     const col = $(this).attr('x')
        //     const $checkEmpty = checkForEmptySlot(col)
        //     $checkEmpty.addClass('move-red')
            // console.log(col);

        // })
    
        //click function for player to drop checker
    $('.gridrow').click(function () {
       const col = $(this).data('col')
       const $checkEmpty = checkForEmptySlot(col)
       $checkEmpty.removeClass('none')
       $checkEmpty.addClass('p1')
       

        // console.log($(this).attr('x'))



    })

}
clickFunct();





    // for (let x = 0; x < gameboard.length; x++) {
    //     if (playCheck % 2 === 1) {
    //         gameBoard[x].push(1)

    //     }
    //     else if (playCheck % 2 === 0) {
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
