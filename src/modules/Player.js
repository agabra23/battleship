const Player = (type) => {
  const attempts = [];

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

  return { attempt, generateMove };
};
