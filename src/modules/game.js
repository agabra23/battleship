import Gameboard from "./Gameboard";
import Player from "./Player";
import UI from "./UI";

const game = (() => {
  const computerPlayer = Player("computer");
  const computerBoard = Gameboard();

  const userPlayer = Player("user");
  const userBoard = Gameboard();

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

  return {
    initGame,
    playRound,
    computerBoard,
    computerPlayer,
    userBoard,
    userPlayer,
  };
})();

export default game;
