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

    let alreadyHit,
      alreadyMiss = false;

    alreadyHit = hits.some((item) => {
      const [xItem, yItem] = item;
      return xItem === coordinates[0] && yItem === coordinates[1];
    });
    alreadyMiss = misses.some((item) => {
      const [xItem, yItem] = item;
      return xItem === coordinates[0] && yItem === coordinates[1];
    });

    if (boardArray[x][y].type === "ship" && alreadyHit === false) {
      boardArray[x][y].hit();
      hits.push(coordinates);
    } else if (boardArray.type !== "ship" && alreadyMiss === false) {
      misses.push(coordinates);
    }
  };

  return { placeShip, boardArray, receiveAttack, hits, misses };
};

export default Gameboard;
