import Gameboard from "./Gameboard";
import Player from "./Player";
import Ship from "./Ship";
import game from "./game";

const UI = (() => {
  // const renderStart = () => {
  //   const nextTurnBtn = document.getElementById("switchTurnBtn");
  //   nextTurnBtn.style.display = "none";

  //   const board = document.getElementById("board");
  //   board.style.display = "none";

  //   const startScreen = document.getElementById("startScreen");

  //   const startBtn = document.createElement("button");
  //   startBtn.textContent = "Start Game";

  //   startScreen.appendChild(startBtn);

  //   startBtn.onclick = () => {
  //     UI.renderBoard(game.currentPlayer.board);
  //   };
  // };

  const renderBoard = (playerBoard) => {
    const board = document.getElementById("board");
    board.style.display = "flex";
    board.innerHTML = `<div id="overlay"></div>`;

    const startScreen = document.getElementById("startScreen");
    startScreen.style.display = "none";

    const nextTurnBtn = document.getElementById("switchTurnBtn");
    nextTurnBtn.style.display = "block";

    const playerTitle = document.createElement("h3");
    console.log(playerBoard);
    playerTitle.innerHTML = `${playerBoard.type}'s Turn`;

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
        if (item !== "none") {
          cell.classList.add("shipCell");

          if (item.isSunk()) {
            cell.style.backgroundColor = "red";
          }
        }

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

  const styleSunk = (boardType) => {
    const rows = document.querySelectorAll(".rowDiv");
    rows.forEach((row) => {
      const cells = document.querySelectorAll(".boardCell");
      cells.forEach((cell) => {
        const [x, y] = [cell.dataset.x, cell.dataset.y];

        if (boardType === "User") {
          if (game.userPlayer.board.isShip([x, y])) {
            const ship = game.userPlayer.board.getShip([x, y]);
            if (ship.isSunk()) cell.style.backgroundColor = "red";
          }
        } else {
          if (game.computerPlayer.board.isShip([x, y])) {
            const ship = game.computerPlayer.board.getShip([x, y]);
            if (ship.isSunk()) cell.style.backgroundColor = "red";
          }
        }
      });
    });
  };

  return {
    renderBoard,
    attempt,
    stopClicks,
    startClicks,
    styleSunk,
    // renderStart,
  };
})();

export default UI;
