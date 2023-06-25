import Gameboard from "./modules/Gameboard.js";
import Ship from "./modules/Ship.js";
import game from "./modules/game.js";
import UI from "./modules/UI.js";

game.initGame();
UI.renderBoard(game.currentPlayer.board);

const allCells = document.querySelectorAll(".boardCell");
allCells.forEach((cell) => {
  cell.addEventListener("click", () => {
    // adjust this. Maybe make it a playRound thing to kick off a round and end it with a turn switch.

    game.moveEvent(cell);
  });
});
