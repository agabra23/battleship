const Ship = function (start, end) {
  this.start = start;
  this.end = end;
  this.hits = 0;

  const getHits = () => {
    return this.hits;
  };

  const hit = () => {
    this.hits++;
  };

  const getLength = () => {
    const xLength = Math.abs(start[0] - end[0]);
    const yLength = Math.abs(start[1] - end[1]);

    if (xLength > 0) return xLength;
    return yLength;
  };

  const isSunk = () => {
    return this.hits === getLength();
  };

  return { getLength, isSunk, hit, getHits };
};
export default Ship;
