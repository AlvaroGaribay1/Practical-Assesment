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

function userMove(e) {
    let cellValue = e.target.innerHTML;
    let turn = e.target.innerHTML
    state.hidden = false;


    if (!cellValue.length) {
        e.target.innerHTML = isPlayerOne ? 'X' : 'O';
        document.querySelector('#estado').innerHTML = turn = isPlayerOne ? 'O' : 'X';
        isPlayerOne = !isPlayerOne;

        // Verificar todas las posibles líneas ganadoras
        if (
            checkLine(0, 1, 2) || checkLine(3, 4, 5) || checkLine(6, 7, 8) ||
            checkLine(0, 3, 6) || checkLine(1, 4, 7) || checkLine(2, 5, 8) ||
            checkLine(0, 4, 8) || checkLine(6, 4, 2)
        ) {
            return;
        }

        // Comprobar si todas las celdas están llenas para declarar un empate
        const allCellsFilled = [...cells].every(cell => cell.innerHTML.length > 0);
        if (allCellsFilled) {
            document.querySelector('#result').innerHTML = "DRAW";
            title.hidden = false;
            reiniciar.hidden = false;
        }
    }
}

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

function Winner(player) {
    document.querySelector('#ganador').innerHTML = player;
    title.hidden = false;
    state.hidden = true;
}

reiniciar.addEventListener('click', _ => {
    location.reload();
});