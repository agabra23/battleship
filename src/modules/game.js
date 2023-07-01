import Gameboard from "./Gameboard";
import Ship from "./Ship";
import Player from "./Player";
import UI from "./UI";

const game = (() => {
  const computerPlayer = Player("Computer");
  const userPlayer = Player("User");

  let currentPlayer = userPlayer;

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
    UI.styleSunk(cellBoard.type);
    checkLoss(currentPlayer);
    game.switchTurn();
    UI.toggleTurnBtn();
  };

  const computerMoveEvent = async () => {
    UI.stopClicks();

    const delay = (milliseconds) => {
      return new Promise((resolve) => {
        setTimeout(resolve, milliseconds);
      });
    };

    await delay(750);

    console.log("after 1 sec");
    const coordinates = game.computerPlayer.generateMove();

    const cellBoard = game.computerPlayer.board;
    cellBoard.receiveAttack(coordinates);
    UI.attempt(coordinates, cellBoard);
    UI.styleSunk(cellBoard.type);
    game.checkLoss(game.currentPlayer);
    game.switchTurn();
    UI.toggleTurnBtn();
  };

  return {
    initGame,
    switchTurn,
    computerPlayer,
    userPlayer,
    currentPlayer,
    checkLoss,
    moveEvent,
    computerMoveEvent,
  };
})();

export default game;
