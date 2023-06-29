import Gameboard from "./Gameboard";
import Player from "./Player";
import Ship from "./Ship";
import game from "./game";

const UI = (() => {
  const renderBoard = (playerBoard) => {
    const board = document.getElementById("board");
    board.innerHTML = `<div id="overlay"></div>`;

    const playerTitle = document.createElement("h3");
    console.log(playerBoard);
    playerTitle.innerHTML = `${playerBoard.type}`;

    board.appendChild(playerTitle);

    playerBoard.boardArray.forEach((row, rowIndex) => {
      const rowDiv = document.createElement("div");
      rowDiv.classList.add("rowDiv");

      row.forEach((item, cellIndex) => {
        const cell = document.createElement("div");
        cell.classList.add("boardCell");
        cell.id = `${playerBoard.type} - ${rowIndex},${cellIndex}`;
        cell.dataset.board = playerBoard.type;
        cell.dataset.x = rowIndex;
        cell.dataset.y = cellIndex;
        if (item !== "none") cell.classList.add("shipCell");

        cell.addEventListener("click", (e) => {
          // adjust this. Maybe make it a playRound thing to kick off a round and end it with a turn switch.
          e.stopPropagation();
          if (cell.textContent === "") game.moveEvent(cell);
        });

        rowDiv.appendChild(cell);
      });

      board.appendChild(rowDiv);
    });

    playerBoard.misses.forEach((coordinates) => {
      attempt(coordinates, playerBoard);
    });
    playerBoard.hits.forEach((coordinates) => {
      attempt(coordinates, playerBoard);
    });
  };

  const attempt = (coordinates, gameboard) => {
    const [x, y] = coordinates;
    const targetCell = document.getElementById(`${gameboard.type} - ${x},${y}`);
    const isShip = gameboard.isShip(coordinates);

    if (isShip) {
      targetCell.innerHTML = "Hit";
    } else {
      targetCell.innerHTML = "Miss";
    }
  };

  const stopClicks = () => {
    const overlay = document.getElementById("overlay");

    overlay.style.pointerEvents = "all";
  };

  const startClicks = () => {
    const overlay = document.getElementById("overlay");

    overlay.style.pointerEvents = "none";
  };

  return { renderBoard, attempt, stopClicks, startClicks };
})();

export default UI;
