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

    return move;
  };

  if (type === "computer") return { attempt, generateMove, board, type };

  return { attempt, board, type };
};

export default Player;
