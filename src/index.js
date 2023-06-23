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
    game.moveEvent(cell);

    game.checkLoss(game.computerPlayer);
  });
});
