import Gameboard from "../Gameboard.js";
import Ship from "../Ship.js";

test("Place Ship", () => {
  const ship1 = Ship([
    [4, 4],
    [3, 4],
    [2, 4],
    [1, 4],
  ]);
  const board = Gameboard();

  board.placeShip(ship1);
  expect(board.boardArray[4][4]).toBe(ship1);
});

test("Receive Attack", () => {
  const ship1 = Ship([
    [4, 4],
    [3, 4],
    [2, 4],
    [1, 4],
  ]);
  const board = Gameboard();
  board.placeShip(ship1);
  ship1.hit();
  ship1.hit();
  ship1.hit();
  board.receiveAttack([3, 4]);
  expect(ship1.getHits()).toBe(4);
});

test("Receive Attack - Sunk", () => {
  const ship1 = Ship([
    [4, 4],
    [3, 4],
    [2, 4],
    [1, 4],
  ]);
  const board = Gameboard();
  ship1.hit();
  ship1.hit();
  ship1.hit();
  board.placeShip(ship1);
  board.receiveAttack([3, 4]);
  expect(ship1.isSunk()).toBe(true);
});

test("Receive Attack - Already Hit", () => {
  const ship1 = Ship([
    [4, 4],
    [3, 4],
    [2, 4],
    [1, 4],
  ]);
  const board = new Gameboard();

  board.placeShip(ship1);
  board.receiveAttack([3, 4]);
  board.receiveAttack([3, 4]);
  expect(ship1.getHits()).toBe(1);
});

test("Receive Attack - Hits Array", () => {
  const ship1 = Ship([
    [4, 4],
    [3, 4],
    [2, 4],
    [1, 4],
  ]);
  const board = new Gameboard();

  board.placeShip(ship1);
  board.receiveAttack([3, 4]);
  board.receiveAttack([4, 4]);
  expect(board.hits).toEqual([
    [3, 4],
    [4, 4],
  ]);
});

test("Receive Attack - Miss", () => {
  const ship1 = Ship([
    [4, 4],
    [3, 4],
    [2, 4],
    [1, 4],
  ]);
  const board = new Gameboard();

  board.placeShip(ship1);
  board.receiveAttack([5, 4]);
  expect(board.misses).toEqual([[5, 4]]);
});
