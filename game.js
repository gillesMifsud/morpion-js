function startGame()
{
    // Clear the board prior to start the game (in case of restart the game)
    for(var i = 1; i<= 9; i++){
        clearBox(i);
    }
    // document.turn : document comes from the dom || turn is new var declared here
    document.turn = "X";
    // Random starting user
    if(Math.random()<0.5)
    {
        document.turn = "O";
    }
    // Sets winner value to null
    document.winner = null;
    setMessage(document.turn + "starts")
}

// Sets message inside the html #message (id)
function setMessage(msg)
{
    document.getElementById("message").innerText = msg;
}

function nextMove(square)
{
    if(document.winner != null)
    {
        setMessage(document.winner + " already won")
    }
    // If case is empty, fill with document.turn
     else if(square.innerText == "")
    {
        square.innerText = document.turn;
        switchTurn();
    }
    else
    {
        setMessage("This square is already taken")
    }
}

function switchTurn()
{
    if(checkForWinner(document.turn))
    {
        setMessage("Congratulations, " + document.turn + " wins!");
        // Sets the null value in document.winner to document.turn (X or O)
        document.winner = document.turn;
    }
    else if(document.turn == "X")
    {
        document.turn = "O";
        setMessage("It's " + document.turn + " to play")
    }
    else
    {
        document.turn = "X";
        setMessage("It's " + document.turn + " to play")
    }
}

// Checks for a winner
function checkForWinner(move)
{
    var result = false;
    if(
        checkRow(1, 2, 3, move) ||
        checkRow(4, 5, 6, move) ||
        checkRow(7, 8, 9, move) ||
        checkRow(1, 4, 7, move) ||
        checkRow(2, 5, 8, move) ||
        checkRow(3, 6, 9, move) ||
        checkRow(1, 5, 9, move) ||
        checkRow(3, 5, 7, move)
    )
    {
        result = true;
    }
    return result;
}

// Checks if the row is filled with the same values, returns result (bool)
function checkRow(a, b, c, move)
{
    var result = false;
    if(getBox(a) == move && getBox(b) == move && getBox(c) == move)
    {
        result = true;
    }
    return result;
}

// Returns box number (from its #id)
function getBox(number)
{
    return document.getElementById("s" + number).innerText;
}

function clearBox(number) {
    document.getElementById("s" + number).innerText = "";
}