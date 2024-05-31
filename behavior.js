
//Variables declaration
let isPlayerOne = true;
let cells = document.getElementsByClassName("cell");
let title = document.getElementById("result");
let reiniciar = document.getElementById('reiniciar');
let mensaje = document.getElementById('estado')
let state = document.getElementById('state')


// Agregar el evento click a todas las celdas
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', userMove);
}

//Function for position
function userMove(e) {
    let cellValue = e.target.innerHTML;
    //Variable for the turn at the moment
    let turn = e.target.innerHTML
    state.hidden = false;


    if (!cellValue.length) {
        //Changes between first and second player
        e.target.innerHTML = isPlayerOne ? 'X' : 'O';
        document.querySelector('#estado').innerHTML = turn = isPlayerOne ? 'O' : 'X';
        isPlayerOne = !isPlayerOne;

        // Verify all the winner lines
        if (
            checkLine(0, 1, 2) || checkLine(3, 4, 5) || checkLine(6, 7, 8) ||
            checkLine(0, 3, 6) || checkLine(1, 4, 7) || checkLine(2, 5, 8) ||
            checkLine(0, 4, 8) || checkLine(6, 4, 2)
        ) {
            return;
        }

        // Check if all the cells are marked but there's no a winner
        const allCellsFilled = [...cells].every(cell => cell.innerHTML.length > 0);
        if (allCellsFilled) {

            //Show the DRAW result
            document.querySelector('#result').innerHTML = "DRAW";
            title.hidden = false;
            reiniciar.hidden = false;
        }
    }
}

//Function for the verification of the 3 marks in the GRID
function checkLine(c1, c2, c3) {
    if (
        cells[c1].innerHTML.length &&
        cells[c1].innerHTML === cells[c2].innerHTML &&
        cells[c2].innerHTML === cells[c3].innerHTML
    ) {
        Winner(cells[c1].innerHTML);
        return true; // Indica que hay un ganador
    }
    return false; // Indica que no hay ganador en esta línea
}


//Function for the winner result
function Winner(player) {
    document.querySelector('#ganador').innerHTML = player;
    title.hidden = false;
    state.hidden = true;
}

//Restart the page if the button is clicked.
reiniciar.addEventListener('click', _ => {
    location.reload();
});