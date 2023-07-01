import Gameboard from "./modules/Gameboard.js";
import Ship from "./modules/Ship.js";
import game from "./modules/game.js";
import UI from "./modules/UI.js";

game.initGame();
const switchTurnBtn = document.getElementById("switchTurnBtn");
UI.renderBoard(game.currentPlayer.board);
UI.renderStart();

switchTurnBtn.onclick = () => {
  UI.startClicks();

  UI.renderBoard(game.currentPlayer.board);

  if (game.currentPlayer === game.computerPlayer) {
    console.log("reaching");

    const coordinates = game.computerPlayer.generateMove();
    UI.stopClicks();

    const cellBoard = game.computerPlayer.board;

    cellBoard.receiveAttack(coordinates);
    UI.attempt(coordinates, cellBoard);
    UI.styleSunk(cellBoard.type);
    game.checkLoss(game.currentPlayer);
    game.switchTurn();
    UI;
  }
};
