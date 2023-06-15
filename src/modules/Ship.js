const Ship = function (length) {
  this.length = length;
  this.hits = 0;

  this.hit = () => {
    this.hits++;
  };

  this.isSunk = () => {
    if (this.hits === this.length) return true;
    return false;
  };

  //   return { isSunk, hit };
};

export default Ship;
