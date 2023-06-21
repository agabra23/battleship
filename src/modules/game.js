import Gameboard from "./Gameboard";
import Player from "./Player";

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

  return { initGame, computerBoard, computerPlayer, userBoard, userPlayer };
})();

export default game;
