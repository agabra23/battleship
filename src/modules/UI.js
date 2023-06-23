import Gameboard from "./Gameboard";
import Player from "./Player";
import Ship from "./Ship";

const UI = (() => {
  const renderBoard = (playerBoard) => {
    const board = document.getElementById("board");

    playerBoard.boardArray.forEach((row, rowIndex) => {
      const rowDiv = document.createElement("div");
      rowDiv.classList.add("rowDiv");

      row.forEach((item, cellIndex) => {
        const cell = document.createElement("div");
        cell.classList.add("boardCell");
        cell.id = `${rowIndex},${cellIndex}`;
        cell.dataset.board = playerBoard.type;
        cell.dataset.x = rowIndex;
        cell.dataset.y = cellIndex;
        if (item !== "none") cell.classList.add("shipCell");

        rowDiv.appendChild(cell);
      });

      board.appendChild(rowDiv);
    });
  };

  const attempt = (coordinates, gameboard) => {
    const [x, y] = coordinates;
    const targetCell = document.getElementById(`${x},${y}`);
    const isShip = gameboard.isShip(coordinates);

    if (isShip) {
      targetCell.innerHTML = "Hit";
    } else {
      targetCell.innerHTML = "Miss";
    }
  };

  return { renderBoard, attempt };
})();

export default UI;
