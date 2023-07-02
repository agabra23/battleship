import Gameboard from "./Gameboard";

const Player = (type) => {
  const attempts = [];
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

    const getEmptyAdjacent = (coordinates) => {
      const options = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
      ];

      for (let option of options) {
        const [xLast, yLast] = board.getLastHit();
        const newX = xLast + option[0];
        const newY = yLast + option[1];

        if (!checkAttempted([newX, newY]) && newX >= 0 && newY >= 0)
          return [newX, newY];
      }
      board.setLastHit([]);

      let newMove = [getRandomInt(9), getRandomInt(9)];
      while (checkAttempted(newMove)) {
        newMove = [getRandomInt(9), getRandomInt(9)];
      }

      return newMove;
    };

    let move = [getRandomInt(9), getRandomInt(9)];

    while (checkAttempted(move)) {
      move = [getRandomInt(9), getRandomInt(9)];
    }

    if (board.getLastHit().length !== 0) {
      move = getEmptyAdjacent(board.getLastHit());
      console.log("should be next move", move);
    }

    attempt(move);

    return move;
  };

  const generateRandomPath = (shipLength) => {
    const horizontal = Math.random() < 0.5; // Randomly choose horizontal or vertical placement
    let x, y;
    let overlapped = false;

    const coordinates = [];

    do {
      if (horizontal) {
        x = Math.floor(Math.random() * (10 - shipLength + 1));
        y = Math.floor(Math.random() * 10);
      } else {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * (10 - shipLength + 1));
      }

      for (let i = 0; i < shipLength; i++) {
        if (horizontal) {
          coordinates.push([x + i, y]);
        } else {
          coordinates.push([x, y + i]);
        }
      }

      for (let ship of board.ships) {
        for (set of ship.path) {
          if (set[0] === coordinates[0] && set[1] === coordinates[1]) {
            overlapped = true;
          }
        }
      }
    } while (overlapped);

    return coordinates;
  };

  return { attempt, board, type, generateMove, generateRandomPath };
};

export default Player;
