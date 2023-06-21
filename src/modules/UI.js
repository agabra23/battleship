import Gameboard from "./Gameboard";
import Player from "./Player";
import Ship from "./Ship";

const UI = (() => {
  const renderBoard = (playerBoard) => {
    const board = document.getElementById("board");

    playerBoard.boardArray.forEach((row) => {
      const rowDiv = document.createElement("div");
      rowDiv.classList.add("rowDiv");

      row.forEach((item) => {
        const cell = document.createElement("div");
        cell.classList.add("boardCell");
        if (item !== "none") cell.classList.add("shipCell");
        rowDiv.appendChild(cell);
      });

      board.appendChild(rowDiv);
    });
  };

  return { renderBoard };
})();

export default UI;
