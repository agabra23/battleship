(()=>{"use strict";const t=function(t){let e=0;const r=()=>{let e=0;return t.forEach((t=>{e++})),e};return{getLength:r,isSunk:()=>e>=r(),hit:()=>{e++},getHits:()=>e,getPath:()=>t,resetHits:()=>{e=0},hits:e}},e=e=>{const r=[],o=function(){const e=[...Array(10)].map((t=>Array(10).fill("none"))),r=[],o=[];let a=[];const n=t=>{t.getPath().forEach((r=>{const[o,a]=r;e[o][a]=t})),s(t)},s=t=>{a.push(t)};return{placeShip:n,boardArray:e,receiveAttack:t=>{const[a,n]=t;let s,c=!1;s=r.some((e=>{const[r,o]=e;return r===t[0]&&o===t[1]})),c=o.some((e=>{const[r,o]=e;return r===t[0]&&o===t[1]})),"none"!==e[a][n]&&!1===s?(e[a][n].hit(),r.push(t)):"none"===e[a][n]&&!1===c&&o.push(t)},hits:r,misses:o,addShip:s,resetGameboard:()=>{r=[],o=[],a=[]},initBoard:()=>{n(t([[1,4],[1,5]])),n(t([[6,4],[6,5],[6,6]])),n(t([[4,2],[5,2],[6,2],[7,2]])),n(t([[8,3],[8,4],[8,5],[8,6],[8,7]])),n(t([[2,3],[2,4],[2,5],[2,6],[2,7]]))},isShip:t=>{const[r,o]=t;return"none"!==e[r][o]},getShip:t=>{const[r,o]=t;return e[r][o]},ships:a}}(),a=t=>{r.push(t)};return"computer"===e?{attempt:a,generateMove:()=>{const t=t=>Math.floor(Math.random()*t),e=t=>r.some((e=>{const[r,o]=e;return r===t[0]&&o===t[1]}));let o=[t(9),t(9)];for(;e(o);)o=[t(9),t(9)];return o},board:o}:{attempt:a,board:o}},r=t=>{const e=document.getElementById("board");t.boardArray.forEach(((r,o)=>{const a=document.createElement("div");a.classList.add("rowDiv"),r.forEach(((e,r)=>{const n=document.createElement("div");n.classList.add("boardCell"),n.id=`${o},${r}`,n.dataset.board=t,n.dataset.x=o,n.dataset.y=r,"none"!==e&&n.classList.add("shipCell"),a.appendChild(n)})),e.appendChild(a)}))},o=(t,e)=>{const[r,o]=t,a=document.getElementById(`${r},${o}`),n=e.isShip(t);a.innerHTML=n?"Hit":"Miss"},a=(()=>{const t=e("computer"),r=e("user");let a=r;return{initGame:()=>{console.log("init");const e=r.board;t.board.initBoard(),e.initBoard()},playRound:(e,a)=>{e===r&&(t.board.receiveAttack([2,3]),o([2,3],t.board))},switchTurn:()=>{a=a===r?t:r},computerPlayer:t,userPlayer:r,currentPlayer:a,checkLoss:t=>t.board.ships.every((t=>t.isSunk()))}})();a.initGame(),r(a.computerPlayer.board),a.playRound(a.currentPlayer),document.querySelectorAll(".boardCell").forEach((t=>{t.addEventListener("click",(()=>{console.log("click"),a.computerPlayer.board.receiveAttack([t.dataset.x,t.dataset.y]),console.log(a.computerPlayer.board.getShip([t.dataset.x,t.dataset.y]).isSunk()),a.checkLoss(a.computerPlayer)&&alert("win")}))}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxRQUFRQyxJQUFJLFFBRVosTUFBTUMsRUFBWUwsRUFBV3ZELE1BQ1BzRCxFQUFldEQsTUFDdkJ3QixZQUNkb0MsRUFBVXBDLFdBQVcsRUEwQnJCcUMsVUF2QmdCLENBQUNDLEVBQVFwRCxLQUNyQm9ELElBQVdQLElBQ2JELEVBQWV0RCxNQUFNZ0IsY0FBYyxDQUFDLEVBQUcsSUFDdkMsRUFBVyxDQUFDLEVBQUcsR0FBSXNDLEVBQWV0RCxPQUNwQyxFQW9CQStELFdBakJpQixLQUVmUCxFQURFQSxJQUFrQkQsRUFDSkQsRUFFQUMsQ0FDbEIsRUFhQUQsaUJBQ0FDLGFBQ0FDLGdCQUNBUSxVQWJpQkYsR0FDVkEsRUFBTzlELE1BQU1PLE1BQU0wRCxPQUFPbkQsR0FDeEJBLEVBQUtyQixXQWFqQixFQTdDWSxHQ0FiLEVBQUtnRSxXQUNMLEVBQWUsRUFBS0gsZUFBZXRELE9BRW5DLEVBQUs2RCxVQUFVLEVBQUtMLGVBRUhsQixTQUFTNEIsaUJBQWlCLGNBQ2xDM0UsU0FBU3dELElBQ2hCQSxFQUFLb0IsaUJBQWlCLFNBQVMsS0FDN0JULFFBQVFDLElBQUksU0FDWixFQUFLTCxlQUFldEQsTUFBTWdCLGNBQWMsQ0FBQytCLEVBQUtFLFFBQVF0QyxFQUFHb0MsRUFBS0UsUUFBUXJDLElBQ3RFOEMsUUFBUUMsSUFDTixFQUFLTCxlQUFldEQsTUFDakIwQixRQUFRLENBQUNxQixFQUFLRSxRQUFRdEMsRUFBR29DLEVBQUtFLFFBQVFyQyxJQUN0Q25CLFVBR0QsRUFBS3VFLFVBQVUsRUFBS1YsaUJBQWlCYyxNQUFNLE1BQU0sR0FDckQsRyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9TaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9QbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTaGlwID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgbGV0IGhpdHMgPSAwO1xuXG4gIGNvbnN0IGdldEhpdHMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGhpdHM7XG4gIH07XG5cbiAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgIGhpdHMrKztcbiAgfTtcblxuICBjb25zdCBnZXRMZW5ndGggPSAoKSA9PiB7XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBwYXRoLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvdW50Kys7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvdW50O1xuICB9O1xuXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICByZXR1cm4gaGl0cyA+PSBnZXRMZW5ndGgoKTtcbiAgfTtcblxuICBjb25zdCBnZXRQYXRoID0gKCkgPT4ge1xuICAgIHJldHVybiBwYXRoO1xuICB9O1xuXG4gIGNvbnN0IHJlc2V0SGl0cyA9ICgpID0+IHtcbiAgICBoaXRzID0gMDtcbiAgfTtcblxuICByZXR1cm4geyBnZXRMZW5ndGgsIGlzU3VuaywgaGl0LCBnZXRIaXRzLCBnZXRQYXRoLCByZXNldEhpdHMsIGhpdHMgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9HYW1lYm9hcmRcIjtcblxuY29uc3QgUGxheWVyID0gKHR5cGUpID0+IHtcbiAgY29uc3QgYXR0ZW1wdHMgPSBbXTtcbiAgY29uc3QgdHVybiA9IGZhbHNlO1xuICBjb25zdCBib2FyZCA9IEdhbWVib2FyZCgpO1xuXG4gIGNvbnN0IGF0dGVtcHQgPSAoY29vcmRpbmF0ZXMpID0+IHtcbiAgICBhdHRlbXB0cy5wdXNoKGNvb3JkaW5hdGVzKTtcbiAgfTtcblxuICBjb25zdCBnZW5lcmF0ZU1vdmUgPSAoKSA9PiB7XG4gICAgY29uc3QgZ2V0UmFuZG9tSW50ID0gKG1heCkgPT4ge1xuICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNoZWNrQXR0ZW1wdGVkID0gKGF0dGVtcHQpID0+IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF0dGVtcHRzLnNvbWUoKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgY29uc3QgW3gsIHldID0gY29vcmRpbmF0ZTtcblxuICAgICAgICByZXR1cm4geCA9PT0gYXR0ZW1wdFswXSAmJiB5ID09PSBhdHRlbXB0WzFdO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIGxldCBtb3ZlID0gW2dldFJhbmRvbUludCg5KSwgZ2V0UmFuZG9tSW50KDkpXTtcblxuICAgIHdoaWxlIChjaGVja0F0dGVtcHRlZChtb3ZlKSkge1xuICAgICAgbW92ZSA9IFtnZXRSYW5kb21JbnQoOSksIGdldFJhbmRvbUludCg5KV07XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vdmU7XG4gIH07XG5cbiAgaWYgKHR5cGUgPT09IFwiY29tcHV0ZXJcIikgcmV0dXJuIHsgYXR0ZW1wdCwgZ2VuZXJhdGVNb3ZlLCBib2FyZCB9O1xuXG4gIHJldHVybiB7IGF0dGVtcHQsIGJvYXJkIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9TaGlwLmpzXCI7XG5cbmNvbnN0IEdhbWVib2FyZCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgYm9hcmRBcnJheSA9IFsuLi5BcnJheSgxMCldLm1hcCgoZSkgPT4gQXJyYXkoMTApLmZpbGwoXCJub25lXCIpKTtcbiAgY29uc3QgaGl0cyA9IFtdO1xuICBjb25zdCBtaXNzZXMgPSBbXTtcbiAgbGV0IHNoaXBzID0gW107XG5cbiAgY29uc3QgaW5pdEJvYXJkID0gKCkgPT4ge1xuICAgIHBsYWNlU2hpcChcbiAgICAgIFNoaXAoW1xuICAgICAgICBbMSwgNF0sXG4gICAgICAgIFsxLCA1XSxcbiAgICAgIF0pXG4gICAgKTtcbiAgICBwbGFjZVNoaXAoXG4gICAgICBTaGlwKFtcbiAgICAgICAgWzYsIDRdLFxuICAgICAgICBbNiwgNV0sXG4gICAgICAgIFs2LCA2XSxcbiAgICAgIF0pXG4gICAgKTtcbiAgICBwbGFjZVNoaXAoXG4gICAgICBTaGlwKFtcbiAgICAgICAgWzQsIDJdLFxuICAgICAgICBbNSwgMl0sXG4gICAgICAgIFs2LCAyXSxcbiAgICAgICAgWzcsIDJdLFxuICAgICAgXSlcbiAgICApO1xuXG4gICAgcGxhY2VTaGlwKFxuICAgICAgU2hpcChbXG4gICAgICAgIFs4LCAzXSxcbiAgICAgICAgWzgsIDRdLFxuICAgICAgICBbOCwgNV0sXG4gICAgICAgIFs4LCA2XSxcbiAgICAgICAgWzgsIDddLFxuICAgICAgXSlcbiAgICApO1xuICAgIHBsYWNlU2hpcChcbiAgICAgIFNoaXAoW1xuICAgICAgICBbMiwgM10sXG4gICAgICAgIFsyLCA0XSxcbiAgICAgICAgWzIsIDVdLFxuICAgICAgICBbMiwgNl0sXG4gICAgICAgIFsyLCA3XSxcbiAgICAgIF0pXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCByZXNldEdhbWVib2FyZCA9ICgpID0+IHtcbiAgICBoaXRzID0gW107XG4gICAgbWlzc2VzID0gW107XG4gICAgc2hpcHMgPSBbXTtcbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSAoc2hpcE9iamVjdCkgPT4ge1xuICAgIGNvbnN0IHBhdGggPSBzaGlwT2JqZWN0LmdldFBhdGgoKTtcbiAgICBwYXRoLmZvckVhY2goKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgICBjb25zdCBbeCwgeV0gPSBjb29yZGluYXRlcztcbiAgICAgIGJvYXJkQXJyYXlbeF1beV0gPSBzaGlwT2JqZWN0O1xuICAgIH0pO1xuICAgIGFkZFNoaXAoc2hpcE9iamVjdCk7XG4gIH07XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChjb29yZGluYXRlcykgPT4ge1xuICAgIGNvbnN0IFt4LCB5XSA9IGNvb3JkaW5hdGVzO1xuXG4gICAgbGV0IGFscmVhZHlIaXQsXG4gICAgICBhbHJlYWR5TWlzcyA9IGZhbHNlO1xuXG4gICAgYWxyZWFkeUhpdCA9IGhpdHMuc29tZSgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgW3hJdGVtLCB5SXRlbV0gPSBpdGVtO1xuICAgICAgcmV0dXJuIHhJdGVtID09PSBjb29yZGluYXRlc1swXSAmJiB5SXRlbSA9PT0gY29vcmRpbmF0ZXNbMV07XG4gICAgfSk7XG4gICAgYWxyZWFkeU1pc3MgPSBtaXNzZXMuc29tZSgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgW3hJdGVtLCB5SXRlbV0gPSBpdGVtO1xuICAgICAgcmV0dXJuIHhJdGVtID09PSBjb29yZGluYXRlc1swXSAmJiB5SXRlbSA9PT0gY29vcmRpbmF0ZXNbMV07XG4gICAgfSk7XG5cbiAgICBpZiAoYm9hcmRBcnJheVt4XVt5XSAhPT0gXCJub25lXCIgJiYgYWxyZWFkeUhpdCA9PT0gZmFsc2UpIHtcbiAgICAgIGJvYXJkQXJyYXlbeF1beV0uaGl0KCk7XG4gICAgICBoaXRzLnB1c2goY29vcmRpbmF0ZXMpO1xuICAgIH0gZWxzZSBpZiAoYm9hcmRBcnJheVt4XVt5XSA9PT0gXCJub25lXCIgJiYgYWxyZWFkeU1pc3MgPT09IGZhbHNlKSB7XG4gICAgICBtaXNzZXMucHVzaChjb29yZGluYXRlcyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFkZFNoaXAgPSAoc2hpcCkgPT4ge1xuICAgIHNoaXBzLnB1c2goc2hpcCk7XG4gIH07XG5cbiAgY29uc3QgaXNTaGlwID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgY29uc3QgW3gsIHldID0gY29vcmRpbmF0ZXM7XG5cbiAgICByZXR1cm4gYm9hcmRBcnJheVt4XVt5XSAhPT0gXCJub25lXCI7XG4gIH07XG5cbiAgY29uc3QgZ2V0U2hpcCA9IChjb29yZGluYXRlcykgPT4ge1xuICAgIGNvbnN0IFt4LCB5XSA9IGNvb3JkaW5hdGVzO1xuXG4gICAgcmV0dXJuIGJvYXJkQXJyYXlbeF1beV07XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBwbGFjZVNoaXAsXG4gICAgYm9hcmRBcnJheSxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGhpdHMsXG4gICAgbWlzc2VzLFxuICAgIGFkZFNoaXAsXG4gICAgcmVzZXRHYW1lYm9hcmQsXG4gICAgaW5pdEJvYXJkLFxuICAgIGlzU2hpcCxcbiAgICBnZXRTaGlwLFxuICAgIHNoaXBzLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9HYW1lYm9hcmRcIjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vUGxheWVyXCI7XG5pbXBvcnQgU2hpcCBmcm9tIFwiLi9TaGlwXCI7XG5cbmNvbnN0IFVJID0gKCgpID0+IHtcbiAgY29uc3QgcmVuZGVyQm9hcmQgPSAocGxheWVyQm9hcmQpID0+IHtcbiAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9hcmRcIik7XG5cbiAgICBwbGF5ZXJCb2FyZC5ib2FyZEFycmF5LmZvckVhY2goKHJvdywgcm93SW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHJvd0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICByb3dEaXYuY2xhc3NMaXN0LmFkZChcInJvd0RpdlwiKTtcblxuICAgICAgcm93LmZvckVhY2goKGl0ZW0sIGNlbGxJbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiYm9hcmRDZWxsXCIpO1xuICAgICAgICBjZWxsLmlkID0gYCR7cm93SW5kZXh9LCR7Y2VsbEluZGV4fWA7XG4gICAgICAgIGNlbGwuZGF0YXNldC5ib2FyZCA9IHBsYXllckJvYXJkO1xuICAgICAgICBjZWxsLmRhdGFzZXQueCA9IHJvd0luZGV4O1xuICAgICAgICBjZWxsLmRhdGFzZXQueSA9IGNlbGxJbmRleDtcbiAgICAgICAgaWYgKGl0ZW0gIT09IFwibm9uZVwiKSBjZWxsLmNsYXNzTGlzdC5hZGQoXCJzaGlwQ2VsbFwiKTtcblxuICAgICAgICByb3dEaXYuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICB9KTtcblxuICAgICAgYm9hcmQuYXBwZW5kQ2hpbGQocm93RGl2KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBhdHRlbXB0ID0gKGNvb3JkaW5hdGVzLCBnYW1lYm9hcmQpID0+IHtcbiAgICBjb25zdCBbeCwgeV0gPSBjb29yZGluYXRlcztcbiAgICBjb25zdCB0YXJnZXRDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7eH0sJHt5fWApO1xuICAgIGNvbnN0IGlzU2hpcCA9IGdhbWVib2FyZC5pc1NoaXAoY29vcmRpbmF0ZXMpO1xuXG4gICAgaWYgKGlzU2hpcCkge1xuICAgICAgdGFyZ2V0Q2VsbC5pbm5lckhUTUwgPSBcIkhpdFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXRDZWxsLmlubmVySFRNTCA9IFwiTWlzc1wiO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyByZW5kZXJCb2FyZCwgYXR0ZW1wdCB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgVUk7XG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL0dhbWVib2FyZFwiO1xuaW1wb3J0IFNoaXAgZnJvbSBcIi4vU2hpcFwiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9QbGF5ZXJcIjtcbmltcG9ydCBVSSBmcm9tIFwiLi9VSVwiO1xuXG5jb25zdCBnYW1lID0gKCgpID0+IHtcbiAgY29uc3QgY29tcHV0ZXJQbGF5ZXIgPSBQbGF5ZXIoXCJjb21wdXRlclwiKTtcbiAgY29uc3QgdXNlclBsYXllciA9IFBsYXllcihcInVzZXJcIik7XG5cbiAgbGV0IGN1cnJlbnRQbGF5ZXIgPSB1c2VyUGxheWVyO1xuXG4gIGNvbnN0IGluaXRHYW1lID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiaW5pdFwiKTtcblxuICAgIGNvbnN0IHVzZXJCb2FyZCA9IHVzZXJQbGF5ZXIuYm9hcmQ7XG4gICAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IGNvbXB1dGVyUGxheWVyLmJvYXJkO1xuICAgIGNvbXB1dGVyQm9hcmQuaW5pdEJvYXJkKCk7XG4gICAgdXNlckJvYXJkLmluaXRCb2FyZCgpO1xuICB9O1xuXG4gIGNvbnN0IHBsYXlSb3VuZCA9IChwbGF5ZXIsIGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgaWYgKHBsYXllciA9PT0gdXNlclBsYXllcikge1xuICAgICAgY29tcHV0ZXJQbGF5ZXIuYm9hcmQucmVjZWl2ZUF0dGFjayhbMiwgM10pO1xuICAgICAgVUkuYXR0ZW1wdChbMiwgM10sIGNvbXB1dGVyUGxheWVyLmJvYXJkKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc3dpdGNoVHVybiA9ICgpID0+IHtcbiAgICBpZiAoY3VycmVudFBsYXllciA9PT0gdXNlclBsYXllcikge1xuICAgICAgY3VycmVudFBsYXllciA9IGNvbXB1dGVyUGxheWVyO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50UGxheWVyID0gdXNlclBsYXllcjtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY2hlY2tMb3NzID0gKHBsYXllcikgPT4ge1xuICAgIHJldHVybiBwbGF5ZXIuYm9hcmQuc2hpcHMuZXZlcnkoKHNoaXApID0+IHtcbiAgICAgIHJldHVybiBzaGlwLmlzU3VuaygpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgaW5pdEdhbWUsXG4gICAgcGxheVJvdW5kLFxuICAgIHN3aXRjaFR1cm4sXG4gICAgY29tcHV0ZXJQbGF5ZXIsXG4gICAgdXNlclBsYXllcixcbiAgICBjdXJyZW50UGxheWVyLFxuICAgIGNoZWNrTG9zcyxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWU7XG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL21vZHVsZXMvR2FtZWJvYXJkLmpzXCI7XG5pbXBvcnQgU2hpcCBmcm9tIFwiLi9tb2R1bGVzL1NoaXAuanNcIjtcbmltcG9ydCBnYW1lIGZyb20gXCIuL21vZHVsZXMvZ2FtZS5qc1wiO1xuaW1wb3J0IFVJIGZyb20gXCIuL21vZHVsZXMvVUkuanNcIjtcblxuZ2FtZS5pbml0R2FtZSgpO1xuVUkucmVuZGVyQm9hcmQoZ2FtZS5jb21wdXRlclBsYXllci5ib2FyZCk7XG5cbmdhbWUucGxheVJvdW5kKGdhbWUuY3VycmVudFBsYXllcik7XG5cbmNvbnN0IGFsbENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ib2FyZENlbGxcIik7XG5hbGxDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImNsaWNrXCIpO1xuICAgIGdhbWUuY29tcHV0ZXJQbGF5ZXIuYm9hcmQucmVjZWl2ZUF0dGFjayhbY2VsbC5kYXRhc2V0LngsIGNlbGwuZGF0YXNldC55XSk7XG4gICAgY29uc29sZS5sb2coXG4gICAgICBnYW1lLmNvbXB1dGVyUGxheWVyLmJvYXJkXG4gICAgICAgIC5nZXRTaGlwKFtjZWxsLmRhdGFzZXQueCwgY2VsbC5kYXRhc2V0LnldKVxuICAgICAgICAuaXNTdW5rKClcbiAgICApO1xuXG4gICAgaWYgKGdhbWUuY2hlY2tMb3NzKGdhbWUuY29tcHV0ZXJQbGF5ZXIpKSBhbGVydChcIndpblwiKTtcbiAgfSk7XG59KTtcbiJdLCJuYW1lcyI6WyJwYXRoIiwiaGl0cyIsImdldExlbmd0aCIsImNvdW50IiwiZm9yRWFjaCIsImVsZW1lbnQiLCJpc1N1bmsiLCJoaXQiLCJnZXRIaXRzIiwiZ2V0UGF0aCIsInJlc2V0SGl0cyIsInR5cGUiLCJhdHRlbXB0cyIsImJvYXJkIiwiYm9hcmRBcnJheSIsIkFycmF5IiwibWFwIiwiZSIsImZpbGwiLCJtaXNzZXMiLCJzaGlwcyIsInBsYWNlU2hpcCIsInNoaXBPYmplY3QiLCJjb29yZGluYXRlcyIsIngiLCJ5IiwiYWRkU2hpcCIsInNoaXAiLCJwdXNoIiwicmVjZWl2ZUF0dGFjayIsImFscmVhZHlIaXQiLCJhbHJlYWR5TWlzcyIsInNvbWUiLCJpdGVtIiwieEl0ZW0iLCJ5SXRlbSIsInJlc2V0R2FtZWJvYXJkIiwiaW5pdEJvYXJkIiwiaXNTaGlwIiwiZ2V0U2hpcCIsImF0dGVtcHQiLCJnZW5lcmF0ZU1vdmUiLCJnZXRSYW5kb21JbnQiLCJtYXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjaGVja0F0dGVtcHRlZCIsImNvb3JkaW5hdGUiLCJtb3ZlIiwicGxheWVyQm9hcmQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm93Iiwicm93SW5kZXgiLCJyb3dEaXYiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiY2VsbEluZGV4IiwiY2VsbCIsImlkIiwiZGF0YXNldCIsImFwcGVuZENoaWxkIiwiZ2FtZWJvYXJkIiwidGFyZ2V0Q2VsbCIsImlubmVySFRNTCIsImNvbXB1dGVyUGxheWVyIiwidXNlclBsYXllciIsImN1cnJlbnRQbGF5ZXIiLCJpbml0R2FtZSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyQm9hcmQiLCJwbGF5Um91bmQiLCJwbGF5ZXIiLCJzd2l0Y2hUdXJuIiwiY2hlY2tMb3NzIiwiZXZlcnkiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFsZXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==