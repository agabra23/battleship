import Ship from "./Ship.js";

const Gameboard = function () {
  const boardArray = [...Array(10)].map((e) => Array(10));
  const hits = [];
  const misses = [];

  const placeShip = (ship) => {
    const path = ship.getPath();
    path.forEach((coordinates) => {
      const [x, y] = coordinates;
      boardArray[x][y] = ship;
    });
  };

  const receiveAttack = (coordinates) => {
    const [x, y] = coordinates;

    boardArray[x][y].hit();
  };

  return { placeShip, boardArray, receiveAttack, hits, misses };
};

export default Gameboard;
