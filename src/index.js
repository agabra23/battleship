import Gameboard from "./modules/Gameboard.js";
import Ship from "./modules/Ship.js";
import game from "./modules/game.js";
import UI from "./modules/UI.js";

game.initGame();
const switchTurnBtn = document.getElementById("switchTurnBtn");
UI.renderBoard(game.currentPlayer.board);
UI.renderStart();

switchTurnBtn.onclick = () => {
  UI.toggleTurnBtn();

  UI.renderBoard(game.currentPlayer.board);

  if (game.currentPlayer === game.computerPlayer) {
    game.computerMoveEvent();
  } else {
    UI.startClicks();
  }
};
