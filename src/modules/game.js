import Gameboard from "./Gameboard";
import Ship from "./Ship";
import Player from "./Player";
import UI from "./UI";

const game = (() => {
  const computerPlayer = Player("computer");
  const userPlayer = Player("user");

  let currentPlayer = userPlayer;

  const initGame = () => {
    console.log("init");

    const userBoard = userPlayer.board;
    const computerBoard = computerPlayer.board;
    computerBoard.initBoard();
    userBoard.initBoard();
  };

  const playRound = (player, coordinates) => {
    if (player === userPlayer) {
      computerPlayer.board.receiveAttack([2, 3]);
      UI.attempt([2, 3], computerPlayer.board);
    }
  };

  const switchTurn = () => {
    if (currentPlayer === userPlayer) {
      currentPlayer = computerPlayer;
    } else {
      currentPlayer = userPlayer;
    }
  };

  const checkLoss = (player) => {
    const allSunk = player.board.ships.every((ship) => {
      return ship.isSunk();
    });

    if (allSunk) alert("win");
  };

  const moveEvent = (cell) => {
    const cellBoard =
      cell.dataset.board === "computer"
        ? game.computerPlayer.board
        : game.userPlayer.board;

    game.computerPlayer.board.receiveAttack([cell.dataset.x, cell.dataset.y]);
    UI.attempt([cell.dataset.x, cell.dataset.y], cellBoard);
  };

  return {
    initGame,
    playRound,
    switchTurn,
    computerPlayer,
    userPlayer,
    currentPlayer,
    checkLoss,
    moveEvent,
  };
})();

export default game;
