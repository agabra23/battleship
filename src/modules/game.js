import Gameboard from "./Gameboard";
import Player from "./Player";

const game = (() => {
  const computerPlayer = Player("computer");
  const computerBoard = Gameboard();

  const userPlayer = Player("user");
  const userBoard = Gameboard();

  userBoard.initBoard();
  computerBoard.initBoard();

  return;
})();

export default game;
