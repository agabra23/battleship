import Ship from "./Ship.js";

const Gameboard = function (type) {
  const boardArray = [...Array(10)].map((e) => Array(10).fill("none"));
  const hits = [];
  const misses = [];
  let ships = [];
  let lastHit = [];

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
      setLastHit([x, y]);
      console.log("Hit!", lastHit);
      hits.push(coordinates);
    } else if (boardArray[x][y] === "none" && alreadyMiss === false) {
      misses.push(coordinates);
    }
  };

  const addShip = (ship) => {
    ships.push(ship);
  };

  const isShip = (coordinates) => {
    const [x, y] = coordinates;

    return boardArray[x][y] !== "none";
  };

  const getShip = (coordinates) => {
    const [x, y] = coordinates;

    return boardArray[x][y];
  };

  const getLastHit = () => {
    return lastHit;
  };

  const setLastHit = (coordinates) => {
    lastHit = coordinates;
  };

  return {
    placeShip,
    boardArray,
    receiveAttack,
    hits,
    misses,
    addShip,
    resetGameboard,
    isShip,
    getShip,
    ships,
    type,
    getLastHit,
    setLastHit,
  };
};

export default Gameboard;
