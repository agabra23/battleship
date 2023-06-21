import Ship from "./Ship.js";

const Gameboard = function () {
  const boardArray = [...Array(10)].map((e) => Array(10).fill("none"));
  const hits = [];
  const misses = [];
  let ships = [];

  const initBoard = () => {
    placeShip(
      Ship([
        [1, 4],
        [1, 5],
      ])
    );
    placeShip(
      Ship([
        [6, 4],
        [6, 5],
        [6, 6],
      ])
    );
    placeShip(
      Ship([
        [4, 2],
        [5, 2],
        [6, 2],
        [7, 2],
      ])
    );
    placeShip(
      Ship([
        [4, 2],
        [5, 2],
        [6, 2],
        [7, 2],
      ])
    );
    placeShip(
      Ship([
        [8, 3],
        [8, 4],
        [8, 5],
        [8, 6],
        [8, 7],
      ])
    );
    placeShip(
      Ship([
        [2, 3],
        [2, 4],
        [2, 5],
        [2, 6],
        [2, 7],
      ])
    );
  };

  const resetGameboard = () => {
    hits = [];
    misses = [];
    ships = [];
  };

  const placeShip = (shipObject) => {
    const path = shipObject.getPath();
    path.forEach((coordinates) => {
      const [x, y] = coordinates;
      boardArray[x][y] = shipObject;
    });
    addShip(shipObject);
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

    if (boardArray[x][y] !== "none" && alreadyHit === false) {
      boardArray[x][y].hit();
      hits.push(coordinates);
    } else if (boardArray[x][y] === "none" && alreadyMiss === false) {
      misses.push(coordinates);
    }
  };

  const addShip = (ship) => {
    ships.push(ship);
  };

  return {
    placeShip,
    boardArray,
    receiveAttack,
    hits,
    misses,
    addShip,
    resetGameboard,
    initBoard,
  };
};

export default Gameboard;
