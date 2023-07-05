let currentPlayer = "X";
let gameOver = false;
let moves = 0;
const board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

const cells = Array.from(document.getElementsByClassName("cell"));
const turnDisplay = document.getElementById("turn");
const resultDisplay = document.getElementById("result");

function playMove(row, col) {
  if (gameOver || board[row][col] !== "") {
    return;
  }

  board[row][col] = currentPlayer;
  moves++;

  if (checkWin()) {
    resultDisplay.textContent = `Player ${currentPlayer} wins!`;
    gameOver = true;
  } else if (moves === 9) {
    resultDisplay.textContent = "It's a draw!";
    gameOver = true;
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    turnDisplay.textContent = `Player ${currentPlayer}'s turn`;
  }

  cells[row * 3 + col].textContent = currentPlayer;
}

function checkWin() {
  for (let i = 0; i < 3; i++) {
    if (
      board[i][0] === currentPlayer &&
      board[i][1] === currentPlayer &&
      board[i][2] === currentPlayer
    ) {
      return true;
    }
  }

  for (let i = 0; i < 3; i++) {
    if (
      board[0][i] === currentPlayer &&
      board[1][i] === currentPlayer &&
      board[2][i] === currentPlayer
    ) {
      return true;
    }
  }

  if (
    (board[0][0] === currentPlayer &&
      board[1][1] === currentPlayer &&
      board[2][2] === currentPlayer) ||
    (board[0][2] === currentPlayer &&
      board[1][1] === currentPlayer &&
      board[2][0] === currentPlayer)
  ) {
    return true;
  }

  return false;
}

function restart() {
  currentPlayer = "X";
  gameOver = false;
  moves = 0;
  board.forEach((row) => row.fill(""));
  cells.forEach((cell) => (cell.textContent = ""));
  turnDisplay.textContent = `Player ${currentPlayer}'s turn`;
  resultDisplay.textContent = "";
}