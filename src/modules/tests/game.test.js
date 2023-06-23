import game from "../game";
import Ship from "../Ship";
import Gameboard from "../Gameboard";
import Player from "../Player";

test("checkWin basic - all hits", () => {
  const player = Player("computer");
  const boardShips = player.board.ships;
  player.board.initBoard();

  boardShips.forEach((ship) => {
    const path = ship.getPath();
    path.forEach((coordinate) => {
      ship.hit();
    });
  });

  expect(game.checkWin(player)).toBe(true);
});

test("checkWin basic - no hits", () => {
  const player = Player("computer");
  const boardShips = player.board.ships;
  player.board.initBoard();

  expect(game.checkWin(player)).toBe(false);
});

test("checkWin basic - some hits", () => {
  const player = Player("computer");
  const boardShips = player.board.ships;
  player.board.initBoard();

  boardShips.forEach((ship) => {
    ship.hit();
  });
  expect(game.checkWin(player)).toBe(false);
});
