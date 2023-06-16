const Ship = function (path) {
  this.path = path;
  this.hits = 0;

  const getHits = () => {
    return this.hits;
  };

  const hit = () => {
    this.hits++;
  };

  const getLength = () => {
    let count = 0;
    this.path.forEach((element) => {
      count++;
    });
    return count;
  };

  const isSunk = () => {
    return this.hits >= getLength();
  };

  const getPath = () => {
    return this.path;
  };

  return { getLength, isSunk, hit, getHits, getPath };
};
export default Ship;
