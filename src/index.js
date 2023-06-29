import Gameboard from "./modules/Gameboard.js";
import Ship from "./modules/Ship.js";
import game from "./modules/game.js";
import UI from "./modules/UI.js";

game.initGame();
const switchTurnBtn = document.getElementById("switchTurnBtn");

UI.renderStart();

switchTurnBtn.onclick = () => {
  UI.startClicks();

  UI.renderBoard(game.currentPlayer.board);
};
