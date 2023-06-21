import Gameboard from "./Gameboard";
import Player from "./Player";
import UI from "./UI";

const game = (() => {
  const computerPlayer = Player("computer");
  const computerBoard = Gameboard();

  const userPlayer = Player("user");
  const userBoard = Gameboard();

  let currentPlayer = userPlayer;

  const initGame = () => {
    console.log("init");
    userBoard.initBoard();
    computerBoard.initBoard();
  };

  const playRound = (player) => {
    if (player === userPlayer) {
      computerBoard.receiveAttack([2, 3]);
      UI.attempt([2, 3], computerBoard);
    }
  };

  const switchTurn = () => {
    if (currentPlayer === userPlayer) {
      currentPlayer = computerPlayer;
    } else {
      currentPlayer = userPlayer;
    }
  };

  return {
    initGame,
    playRound,
    switchTurn,
    computerBoard,
    computerPlayer,
    userBoard,
    userPlayer,
    currentPlayer,
  };
})();

export default game;
