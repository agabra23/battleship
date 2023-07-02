import Gameboard from "./Gameboard";
import Player from "./Player";
import Ship from "./Ship";
import game from "./game";

const UI = (() => {
  const renderStart = () => {
    const startScreen = document.getElementById("startScreen");
    startScreen.style.display = "flex";

    const board = document.getElementById("board");
    board.style.display = "none";

    const nextTurnBtn = document.getElementById("switchTurnBtn");
    nextTurnBtn.style.display = "none";

    generateGrid();
  };

  const startEvent = (element) => {
    element.style.display = "";

    const board = document.getElementById("board");
    board.style.display = "";

    const nextTurnBtn = document.getElementById("switchTurnBtn");
    nextTurnBtn.style.display = "";
  };

  const renderBoard = (playerBoard) => {
    const board = document.getElementById("board");
    board.innerHTML = `<div id="overlay"></div>`;

    const playerTitle = document.createElement("h3");
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

        if (playerBoard === game.computerPlayer.board && item !== "none") {
          cell.classList.add("selected");
        }

        if (item !== "none") {
          cell.classList.add("shipCell");

          if (item.isSunk()) {
            cell.style.backgroundColor = "red";
          }
        }

        cell.addEventListener("click", (e) => {
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

  const toggleTurnBtn = () => {
    const switchTurnBtn = document.getElementById("switchTurnBtn");
    switchTurnBtn.disabled = !switchTurnBtn.disabled;
  };

  // Choose Ship Locations

  let isVertical = true;
  const shipLengths = [2, 3, 4, 5];
  let currentShipLength = 5;

  const generateGrid = () => {
    const startScreen = document.getElementById("startScreen");
    startScreen.style.display = "flex";

    const flipButton = document.createElement("button");
    flipButton.textContent = "Flip Ship Direction";
    flipButton.id = "flipBtn";

    const startButton = document.createElement("button");
    startButton.id = "startBtn";
    startButton.textContent = "Start Game";

    const chooseShip = document.createElement("h3");
    chooseShip.textContent = `Choose ${currentShipLength} Coordinates`;
    chooseShip.id = "chooseShip";

    for (let i = 0; i < 10; i++) {
      const rowDiv = document.createElement("div");
      rowDiv.classList.add("rowDiv");

      for (let j = 0; j < 10; j++) {
        const cell = document.createElement("div");
        cell.classList.add("selectCell");
        rowDiv.appendChild(cell);

        cell.dataset.x = i;
        cell.dataset.y = j;

        // const conflicting = (checkCell) => {
        //   for (ship of game.computerPlayer.board.ships) {
        //     for (coordinates of ship.path) {
        //       if (
        //         coordinates[0] === parseInt(checkCell.dataset.x) &&
        //         coordinates[1] === parseInt(checkCell.dataset.y)
        //       ) {
        //         return true;
        //       }
        //     }
        //   }
        //   return false;
        // };

        let isConflicted = false;

        const conflicting = (checkCell) => {
          if (checkCell !== undefined) {
            return game.computerPlayer.board.isShip([
              checkCell.dataset.x,
              checkCell.dataset.y,
            ]);
          }
          return true;
        };

        cell.onmouseenter = (e) => {
          cell.style.backgroundColor = "yellow";
          if (conflicting(cell) && cell !== undefined) {
            cell.style.backgroundColor = "black";
            isConflicted = true;
          }

          for (let k = 1; k < currentShipLength; k++) {
            let newCell = getSelectCell([i, j + k]);

            if (isVertical) {
              newCell = getSelectCell([i + k, j]);
            }

            if (newCell !== undefined) newCell.style.backgroundColor = "yellow";
            if (conflicting(newCell) && newCell !== undefined) {
              newCell.style.backgroundColor = "black";
              isConflicted = true;
            } else if (newCell === undefined) {
              isConflicted = true;
            }
          }
        };

        cell.onmouseout = (e) => {
          isConflicted = false;

          cell.style.backgroundColor = "";

          for (let k = 1; k < currentShipLength; k++) {
            let newCell = getSelectCell([i, j + k]);

            if (isVertical) {
              newCell = getSelectCell([i + k, j]);
            }

            if (newCell !== undefined) newCell.style.backgroundColor = "";
          }
        };

        cell.onclick = (e) => {
          if (!isConflicted) {
            let shipCoordinates = [
              [parseInt(cell.dataset.x), parseInt(cell.dataset.y)],
            ];

            if (cell !== undefined) cell.classList.add("selected");

            for (let k = 1; k < currentShipLength; k++) {
              let newCell = getSelectCell([i, j + k]);

              if (isVertical) {
                newCell = getSelectCell([i + k, j]);
              }

              if (newCell !== undefined) {
                newCell.classList.add("selected");
                shipCoordinates.push([
                  parseInt(newCell.dataset.x),
                  parseInt(newCell.dataset.y),
                ]);
              }
            }

            game.computerPlayer.board.placeShip(Ship(shipCoordinates));

            nextShip();
          }
        };
      }

      startScreen.appendChild(rowDiv);
      startScreen.appendChild(chooseShip);
      startScreen.appendChild(flipButton);
      startScreen.appendChild(startButton);

      startButton.onclick = () => {
        startEvent(startScreen);
        startButton.style.display = "none";
      };

      flipButton.onclick = flip;
    }
  };

  const nextShip = () => {
    const chooseShip = document.getElementById("chooseShip");

    if (
      shipLengths.find((length) => {
        return length === currentShipLength - 1;
      })
    ) {
      currentShipLength--;
      chooseShip.textContent = `Choose ${currentShipLength} Coordinates`;
    } else {
      const cells = document.querySelectorAll(".selectCell");
      cells.forEach((cell) => {
        cell.style.pointerEvents = "none";
      });
      chooseShip.textContent = `Click "Start Game" to Begin.`;
    }
  };

  const getSelectCell = (coordinates) => {
    const [x, y] = coordinates;

    const selectCells = document.querySelectorAll(".selectCell");
    for (const selectCell of selectCells) {
      if (
        parseInt(selectCell.dataset.x) === x &&
        parseInt(selectCell.dataset.y) === y
      ) {
        return selectCell;
      }
    }
  };

  const flip = () => {
    isVertical = !isVertical;
  };

  return {
    renderBoard,
    attempt,
    stopClicks,
    startClicks,
    styleSunk,
    renderStart,
    toggleTurnBtn,
  };
})();

export default UI;
