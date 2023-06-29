import Gameboard from "./Gameboard";
import Ship from "./Ship";
import Player from "./Player";
import UI from "./UI";

const game = (() => {
  const computerPlayer = Player("Computer");
  const userPlayer = Player("User");

  let currentPlayer = computerPlayer;

  const initGame = () => {
    const userBoard = userPlayer.board;
    const computerBoard = computerPlayer.board;
    computerBoard.initBoard();
    userBoard.initBoard();
  };

  const switchTurn = () => {
    console.log("start switch", game.currentPlayer.type);
    if (game.currentPlayer === userPlayer) {
      game.currentPlayer = computerPlayer;
    } else {
      game.currentPlayer = userPlayer;
    }

    console.log("end switch", game.currentPlayer.type);
  };

  const checkLoss = (player) => {
    const allSunk = player.board.ships.every((ship) => {
      return ship.isSunk();
    });

    if (allSunk) alert("win");
  };

  const moveEvent = (cell) => {
    UI.stopClicks();
    const cellBoard =
      cell.dataset.board === "Computer"
        ? computerPlayer.board
        : userPlayer.board;

    cellBoard.receiveAttack([cell.dataset.x, cell.dataset.y]);
    UI.attempt([cell.dataset.x, cell.dataset.y], cellBoard);
    checkLoss(currentPlayer);
    game.switchTurn();
  };

  return {
    initGame,
    switchTurn,
    computerPlayer,
    userPlayer,
    currentPlayer,
    checkLoss,
    moveEvent,
  };
})();

export default game;
