import Gameboard from "./Gameboard";
import Ship from "./Ship";
import Player from "./Player";
import UI from "./UI";

const game = (() => {
  const computerPlayer = Player("Computer");
  const userPlayer = Player("User");

  let currentPlayer = userPlayer;

  const switchTurn = () => {
    if (game.currentPlayer === userPlayer) {
      game.currentPlayer = computerPlayer;
    } else {
      game.currentPlayer = userPlayer;
    }
  };

  const checkLoss = (player) => {
    const allSunk =
      player.board.ships.length > 0 &&
      player.board.ships.every((ship) => {
        return ship.isSunk();
      });

    if (allSunk) {
      alert(`${currentPlayer.type} wins`);
      // resetGame();
    }
  };

  const moveEvent = (cell) => {
    UI.stopClicks();
    const cellBoard =
      cell.dataset.board === "Computer"
        ? computerPlayer.board
        : userPlayer.board;

    cellBoard.receiveAttack([cell.dataset.x, cell.dataset.y], currentPlayer);
    UI.attempt([cell.dataset.x, cell.dataset.y], cellBoard);
    UI.styleSunk(cellBoard.type);
    checkLoss(currentPlayer);
    game.switchTurn();
    UI.toggleTurnBtn();
  };

  const computerMoveEvent = async () => {
    UI.stopClicks();

    console.log(computerPlayer.board.getLastHit());

    const delay = (milliseconds) => {
      return new Promise((resolve) => {
        setTimeout(resolve, milliseconds);
      });
    };

    await delay(750);

    const coordinates = game.computerPlayer.generateMove();

    const cellBoard = game.computerPlayer.board;
    cellBoard.receiveAttack(coordinates, game.computerPlayer);
    UI.attempt(coordinates, cellBoard);
    UI.styleSunk(cellBoard.type);
    game.checkLoss(game.currentPlayer);
    game.switchTurn();
    UI.toggleTurnBtn();
  };

  const setComputerShips = () => {
    game.userPlayer.board.placeShip(Ship(computerPlayer.generateRandomPath(2)));
    game.userPlayer.board.placeShip(Ship(computerPlayer.generateRandomPath(3)));
    game.userPlayer.board.placeShip(Ship(computerPlayer.generateRandomPath(4)));
    game.userPlayer.board.placeShip(Ship(computerPlayer.generateRandomPath(5)));
  };

  return {
    // initGame,
    switchTurn,
    computerPlayer,
    userPlayer,
    currentPlayer,
    checkLoss,
    moveEvent,
    computerMoveEvent,
    setComputerShips,
  };
})();

export default game;
