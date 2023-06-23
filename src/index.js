import Gameboard from "./modules/Gameboard.js";
import Ship from "./modules/Ship.js";
import game from "./modules/game.js";
import UI from "./modules/UI.js";

game.initGame();
UI.renderBoard(game.computerPlayer.board);

game.playRound(game.currentPlayer);

const allCells = document.querySelectorAll(".boardCell");
allCells.forEach((cell) => {
  cell.addEventListener("click", () => {
    const cellBoard =
      cell.dataset.board === "computer"
        ? game.computerPlayer.board
        : game.userPlayer.board;

    game.computerPlayer.board.receiveAttack([cell.dataset.x, cell.dataset.y]);
    console.log(
      game.computerPlayer.board
        .getShip([cell.dataset.x, cell.dataset.y])
        .isSunk()
    );

    UI.attempt([cell.dataset.x, cell.dataset.y], cellBoard);

    if (game.checkLoss(game.computerPlayer)) alert("win");
  });
});
