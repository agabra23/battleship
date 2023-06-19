const Ship = function (path) {
  let hits = 0;

  const getHits = () => {
    return hits;
  };

  const hit = () => {
    hits++;
  };

  const getLength = () => {
    let count = 0;
    path.forEach((element) => {
      count++;
    });
    return count;
  };

  const isSunk = () => {
    return hits >= getLength();
  };

  const getPath = () => {
    return path;
  };

  return { getLength, isSunk, hit, getHits, getPath };
};
export default Ship;
