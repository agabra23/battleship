import Gameboard from "./Gameboard";

const Player = (type) => {
  const attempts = [];
  const turn = false;
  const board = Gameboard(type);

  const attempt = (coordinates) => {
    attempts.push(coordinates);
  };

  const generateMove = () => {
    const getRandomInt = (max) => {
      return Math.floor(Math.random() * max);
    };

    const checkAttempted = (attempt) => {
      const result = attempts.some((coordinate) => {
        const [x, y] = coordinate;

        return x === attempt[0] && y === attempt[1];
      });

      return result;
    };

    let move = [getRandomInt(9), getRandomInt(9)];

    while (checkAttempted(move)) {
      move = [getRandomInt(9), getRandomInt(9)];
    }

    attempt(move);

    return move;
  };

  const generateRandomPath = (shipLength) => {
    const horizontal = Math.random() < 0.5; // Randomly choose horizontal or vertical placement
    let x, y;

    if (horizontal) {
      x = Math.floor(Math.random() * (10 - shipLength + 1));
      y = Math.floor(Math.random() * 10);
    } else {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * (10 - shipLength + 1));
    }

    const coordinates = [];
    for (let i = 0; i < shipLength; i++) {
      if (horizontal) {
        coordinates.push([x + i, y]);
      } else {
        coordinates.push([x, y + i]);
      }
    }

    return coordinates;
  };

  return { attempt, board, type, generateMove, generateRandomPath };
};

export default Player;
