import Player from "./Player";
import UI from "./UI";

const game = (() => {
  const playerOne = Player("Player 1");
  const playerTwo = Player("Player 2");

  let currentPlayer = playerOne;

  const initGame = () => {
    const userBoard = playerTwo.board;
    const computerBoard = playerOne.board;
    computerBoard.initBoard();
    userBoard.initBoard();
  };

  const switchTurn = () => {
    console.log("start switch", game.currentPlayer.type);
    if (game.currentPlayer === playerTwo) {
      game.currentPlayer = playerOne;
    } else {
      game.currentPlayer = playerTwo;
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
      cell.dataset.board === "Computer" ? playerOne.board : playerTwo.board;

    cellBoard.receiveAttack([cell.dataset.x, cell.dataset.y]);
    UI.attempt([cell.dataset.x, cell.dataset.y], cellBoard);
    UI.styleSunk(cellBoard.type);
    checkLoss(currentPlayer);
    game.switchTurn();
  };

  return {
    initGame,
    switchTurn,
    playerOne,
    playerTwo,
    currentPlayer,
    checkLoss,
    moveEvent,
  };
})();

export default game;
