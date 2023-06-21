import Gameboard from "./modules/Gameboard.js";
import Ship from "./modules/Ship.js";
import game from "./modules/game.js";
import UI from "./modules/UI.js";

game.initGame();

console.log("start");
UI.renderBoard(game.userBoard);
