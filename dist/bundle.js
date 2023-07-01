(()=>{"use strict";const e=function(e){let t=0;const r=()=>{let t=0;return e.forEach((e=>{t++})),t};return{getLength:r,isSunk:()=>t>=r(),hit:()=>{t++},getHits:()=>t,getPath:()=>e,resetHits:()=>{t=0},hits:t}},t=function(t){const r=[...Array(10)].map((e=>Array(10).fill("none"))),n=[],o=[];let s=[];const a=e=>{e.getPath().forEach((t=>{const[n,o]=t;r[n][o]=e})),l(e)},l=e=>{s.push(e)};return{placeShip:a,boardArray:r,receiveAttack:e=>{const[t,s]=e;let a,l=!1;a=n.some((t=>{const[r,n]=t;return r===e[0]&&n===e[1]})),l=o.some((t=>{const[r,n]=t;return r===e[0]&&n===e[1]})),"none"!==r[t][s]&&!1===a?(r[t][s].hit(),n.push(e)):"none"===r[t][s]&&!1===l&&o.push(e)},hits:n,misses:o,addShip:l,resetGameboard:()=>{n=[],o=[],s=[]},initBoard:()=>{a(e([[1,4],[1,5]])),a(e([[6,4],[6,5],[6,6]])),a(e([[4,2],[5,2],[6,2],[7,2]])),a(e([[8,3],[8,4],[8,5],[8,6],[8,7]])),a(e([[2,3],[2,4],[2,5],[2,6],[2,7]]))},isShip:e=>{const[t,n]=e;return"none"!==r[t][n]},getShip:e=>{const[t,n]=e;return r[t][n]},ships:s,type:t}},r=e=>{const r=[];return{attempt:e=>{r.push(e)},board:t(e),type:e,generateMove:()=>{const e=e=>Math.floor(Math.random()*e),t=e=>r.some((t=>{const[r,n]=t;return r===e[0]&&n===e[1]}));let n=[e(9),e(9)];for(;t(n);)n=[e(9),e(9)];return n}}},n=(()=>{const e=(e,t)=>{const[r,n]=e,o=document.getElementById(`${t.type} - ${r},${n}`),s=t.isShip(e);o.innerHTML=s?"Hit":"Miss"},t=e=>{const[t,r]=e,n=document.querySelectorAll(".selectCell");for(const e of n)if(parseInt(e.dataset.x)===t&&parseInt(e.dataset.y)===r)return e};return{renderBoard:t=>{const r=document.getElementById("board");r.innerHTML='<div id="overlay"></div>';const n=document.createElement("h3");console.log(t),n.innerHTML=`${t.type}'s Turn`,r.appendChild(n),t.boardArray.forEach(((e,n)=>{const o=document.createElement("div");o.classList.add("rowDiv"),e.forEach(((e,r)=>{const s=document.createElement("div");s.classList.add("boardCell"),s.id=`${t.type} - ${n},${r}`,s.dataset.board=t.type,s.dataset.x=n,s.dataset.y=r,"none"!==e&&(s.classList.add("shipCell"),e.isSunk()&&(s.style.backgroundColor="red")),s.addEventListener("click",(e=>{e.stopPropagation(),""===s.textContent&&a.moveEvent(s)})),o.appendChild(s)})),r.appendChild(o)})),t.misses.forEach((r=>{e(r,t)})),t.hits.forEach((r=>{e(r,t)}))},attempt:e,stopClicks:()=>{document.getElementById("overlay").style.pointerEvents="all"},startClicks:()=>{document.getElementById("overlay").style.pointerEvents="none"},styleSunk:e=>{document.querySelectorAll(".rowDiv").forEach((t=>{document.querySelectorAll(".boardCell").forEach((t=>{const[r,n]=[t.dataset.x,t.dataset.y];"User"===e?a.userPlayer.board.isShip([r,n])&&a.userPlayer.board.getShip([r,n]).isSunk()&&(t.style.backgroundColor="red"):a.computerPlayer.board.isShip([r,n])&&a.computerPlayer.board.getShip([r,n]).isSunk()&&(t.style.backgroundColor="red")}))}))},renderStart:()=>{const e=document.getElementById("startScreen");e.style.display="flex";const r=document.createElement("button");r.id="startBtn",r.textContent="Start Game",e.appendChild(r),document.getElementById("board").style.display="none",document.getElementById("switchTurnBtn").style.display="none",(()=>{const e=document.getElementById("startScreen");e.style.display="flex";for(let r=0;r<10;r++){const n=document.createElement("div");n.classList.add("rowDiv");for(let e=0;e<10;e++){const o=document.createElement("div");o.classList.add("selectCell"),n.appendChild(o),o.dataset.x=r,o.dataset.y=e,o.onmouseenter=n=>{o.style.backgroundColor="yellow";for(let n=1;n<5;n++){const o=t([r+n,e]);void 0!==o&&(o.style.backgroundColor="yellow")}},o.onmouseout=n=>{o.style.backgroundColor="";for(let n=1;n<5;n++){const o=t([r+n,e]);void 0!==o&&(o.style.backgroundColor="")}},o.onclick=n=>{console.log(o.dataset.x,o.dataset.y);for(let n=1;n<5;n++){const o=t([r+n,e]);console.log(o.dataset.x,o.dataset.y)}}}e.appendChild(n)}})(),r.onclick=()=>{e.style.display="",document.getElementById("board").style.display="",document.getElementById("switchTurnBtn").style.display="",r.style.display="none"}},toggleTurnBtn:()=>{const e=document.getElementById("switchTurnBtn");e.disabled=!e.disabled}}})(),o=n,s=(()=>{const e=r("Computer"),t=r("User");let n=t;const a=e=>{e.board.ships.every((e=>e.isSunk()))&&alert("win")};return{initGame:()=>{const r=t.board;e.board.initBoard(),r.initBoard()},switchTurn:()=>{console.log("start switch",s.currentPlayer.type),s.currentPlayer===t?s.currentPlayer=e:s.currentPlayer=t,console.log("end switch",s.currentPlayer.type)},computerPlayer:e,userPlayer:t,currentPlayer:n,checkLoss:a,moveEvent:r=>{o.stopClicks();const l="Computer"===r.dataset.board?e.board:t.board;l.receiveAttack([r.dataset.x,r.dataset.y]),o.attempt([r.dataset.x,r.dataset.y],l),o.styleSunk(l.type),a(n),s.switchTurn(),o.toggleTurnBtn()},computerMoveEvent:async()=>{o.stopClicks(),await(750,new Promise((e=>{setTimeout(e,750)}))),console.log("after 1 sec");const e=s.computerPlayer.generateMove(),t=s.computerPlayer.board;t.receiveAttack(e),o.attempt(e,t),o.styleSunk(t.type),s.checkLoss(s.currentPlayer),s.switchTurn(),o.toggleTurnBtn()}}})(),a=s;a.initGame();const l=document.getElementById("switchTurnBtn");o.renderBoard(a.currentPlayer.board),o.renderStart(),l.onclick=()=>{o.toggleTurnBtn(),o.renderBoard(a.currentPlayer.board),a.currentPlayer===a.computerPlayer?a.computerMoveEvent():o.startClicks()}})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y0gsUUFBVSxLQUN0QixFQUFHRSxnQkFFSCxFQUFHekMsWUFBWSxFQUFLNkMsY0FBY25FLE9BRTlCLEVBQUttRSxnQkFBa0IsRUFBS2xCLGVBQzlCLEVBQUsyQixvQkFFTCxFQUFHL0IsYUFDTCxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL1NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvUGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9VSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFNoaXAgPSBmdW5jdGlvbiAocGF0aCkge1xuICBsZXQgaGl0cyA9IDA7XG5cbiAgY29uc3QgZ2V0SGl0cyA9ICgpID0+IHtcbiAgICByZXR1cm4gaGl0cztcbiAgfTtcblxuICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgaGl0cysrO1xuICB9O1xuXG4gIGNvbnN0IGdldExlbmd0aCA9ICgpID0+IHtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIHBhdGguZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgY291bnQrKztcbiAgICB9KTtcbiAgICByZXR1cm4gY291bnQ7XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgIHJldHVybiBoaXRzID49IGdldExlbmd0aCgpO1xuICB9O1xuXG4gIGNvbnN0IGdldFBhdGggPSAoKSA9PiB7XG4gICAgcmV0dXJuIHBhdGg7XG4gIH07XG5cbiAgY29uc3QgcmVzZXRIaXRzID0gKCkgPT4ge1xuICAgIGhpdHMgPSAwO1xuICB9O1xuXG4gIHJldHVybiB7IGdldExlbmd0aCwgaXNTdW5rLCBoaXQsIGdldEhpdHMsIGdldFBhdGgsIHJlc2V0SGl0cywgaGl0cyB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG4iLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9TaGlwLmpzXCI7XG5cbmNvbnN0IEdhbWVib2FyZCA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gIGNvbnN0IGJvYXJkQXJyYXkgPSBbLi4uQXJyYXkoMTApXS5tYXAoKGUpID0+IEFycmF5KDEwKS5maWxsKFwibm9uZVwiKSk7XG4gIGNvbnN0IGhpdHMgPSBbXTtcbiAgY29uc3QgbWlzc2VzID0gW107XG4gIGxldCBzaGlwcyA9IFtdO1xuXG4gIGNvbnN0IGluaXRCb2FyZCA9ICgpID0+IHtcbiAgICBwbGFjZVNoaXAoXG4gICAgICBTaGlwKFtcbiAgICAgICAgWzEsIDRdLFxuICAgICAgICBbMSwgNV0sXG4gICAgICBdKVxuICAgICk7XG4gICAgcGxhY2VTaGlwKFxuICAgICAgU2hpcChbXG4gICAgICAgIFs2LCA0XSxcbiAgICAgICAgWzYsIDVdLFxuICAgICAgICBbNiwgNl0sXG4gICAgICBdKVxuICAgICk7XG4gICAgcGxhY2VTaGlwKFxuICAgICAgU2hpcChbXG4gICAgICAgIFs0LCAyXSxcbiAgICAgICAgWzUsIDJdLFxuICAgICAgICBbNiwgMl0sXG4gICAgICAgIFs3LCAyXSxcbiAgICAgIF0pXG4gICAgKTtcblxuICAgIHBsYWNlU2hpcChcbiAgICAgIFNoaXAoW1xuICAgICAgICBbOCwgM10sXG4gICAgICAgIFs4LCA0XSxcbiAgICAgICAgWzgsIDVdLFxuICAgICAgICBbOCwgNl0sXG4gICAgICAgIFs4LCA3XSxcbiAgICAgIF0pXG4gICAgKTtcbiAgICBwbGFjZVNoaXAoXG4gICAgICBTaGlwKFtcbiAgICAgICAgWzIsIDNdLFxuICAgICAgICBbMiwgNF0sXG4gICAgICAgIFsyLCA1XSxcbiAgICAgICAgWzIsIDZdLFxuICAgICAgICBbMiwgN10sXG4gICAgICBdKVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgcmVzZXRHYW1lYm9hcmQgPSAoKSA9PiB7XG4gICAgaGl0cyA9IFtdO1xuICAgIG1pc3NlcyA9IFtdO1xuICAgIHNoaXBzID0gW107XG4gIH07XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXBPYmplY3QpID0+IHtcbiAgICBjb25zdCBwYXRoID0gc2hpcE9iamVjdC5nZXRQYXRoKCk7XG4gICAgcGF0aC5mb3JFYWNoKChjb29yZGluYXRlcykgPT4ge1xuICAgICAgY29uc3QgW3gsIHldID0gY29vcmRpbmF0ZXM7XG4gICAgICBib2FyZEFycmF5W3hdW3ldID0gc2hpcE9iamVjdDtcbiAgICB9KTtcbiAgICBhZGRTaGlwKHNoaXBPYmplY3QpO1xuICB9O1xuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmRpbmF0ZXMpID0+IHtcbiAgICBjb25zdCBbeCwgeV0gPSBjb29yZGluYXRlcztcblxuICAgIGxldCBhbHJlYWR5SGl0LFxuICAgICAgYWxyZWFkeU1pc3MgPSBmYWxzZTtcblxuICAgIGFscmVhZHlIaXQgPSBoaXRzLnNvbWUoKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IFt4SXRlbSwgeUl0ZW1dID0gaXRlbTtcbiAgICAgIHJldHVybiB4SXRlbSA9PT0gY29vcmRpbmF0ZXNbMF0gJiYgeUl0ZW0gPT09IGNvb3JkaW5hdGVzWzFdO1xuICAgIH0pO1xuICAgIGFscmVhZHlNaXNzID0gbWlzc2VzLnNvbWUoKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IFt4SXRlbSwgeUl0ZW1dID0gaXRlbTtcbiAgICAgIHJldHVybiB4SXRlbSA9PT0gY29vcmRpbmF0ZXNbMF0gJiYgeUl0ZW0gPT09IGNvb3JkaW5hdGVzWzFdO1xuICAgIH0pO1xuXG4gICAgaWYgKGJvYXJkQXJyYXlbeF1beV0gIT09IFwibm9uZVwiICYmIGFscmVhZHlIaXQgPT09IGZhbHNlKSB7XG4gICAgICBib2FyZEFycmF5W3hdW3ldLmhpdCgpO1xuICAgICAgaGl0cy5wdXNoKGNvb3JkaW5hdGVzKTtcbiAgICB9IGVsc2UgaWYgKGJvYXJkQXJyYXlbeF1beV0gPT09IFwibm9uZVwiICYmIGFscmVhZHlNaXNzID09PSBmYWxzZSkge1xuICAgICAgbWlzc2VzLnB1c2goY29vcmRpbmF0ZXMpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBhZGRTaGlwID0gKHNoaXApID0+IHtcbiAgICBzaGlwcy5wdXNoKHNoaXApO1xuICB9O1xuXG4gIGNvbnN0IGlzU2hpcCA9IChjb29yZGluYXRlcykgPT4ge1xuICAgIGNvbnN0IFt4LCB5XSA9IGNvb3JkaW5hdGVzO1xuXG4gICAgcmV0dXJuIGJvYXJkQXJyYXlbeF1beV0gIT09IFwibm9uZVwiO1xuICB9O1xuXG4gIGNvbnN0IGdldFNoaXAgPSAoY29vcmRpbmF0ZXMpID0+IHtcbiAgICBjb25zdCBbeCwgeV0gPSBjb29yZGluYXRlcztcblxuICAgIHJldHVybiBib2FyZEFycmF5W3hdW3ldO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcGxhY2VTaGlwLFxuICAgIGJvYXJkQXJyYXksXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBoaXRzLFxuICAgIG1pc3NlcyxcbiAgICBhZGRTaGlwLFxuICAgIHJlc2V0R2FtZWJvYXJkLFxuICAgIGluaXRCb2FyZCxcbiAgICBpc1NoaXAsXG4gICAgZ2V0U2hpcCxcbiAgICBzaGlwcyxcbiAgICB0eXBlLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9HYW1lYm9hcmRcIjtcblxuY29uc3QgUGxheWVyID0gKHR5cGUpID0+IHtcbiAgY29uc3QgYXR0ZW1wdHMgPSBbXTtcbiAgY29uc3QgdHVybiA9IGZhbHNlO1xuICBjb25zdCBib2FyZCA9IEdhbWVib2FyZCh0eXBlKTtcblxuICBjb25zdCBhdHRlbXB0ID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgYXR0ZW1wdHMucHVzaChjb29yZGluYXRlcyk7XG4gIH07XG5cbiAgY29uc3QgZ2VuZXJhdGVNb3ZlID0gKCkgPT4ge1xuICAgIGNvbnN0IGdldFJhbmRvbUludCA9IChtYXgpID0+IHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpO1xuICAgIH07XG5cbiAgICBjb25zdCBjaGVja0F0dGVtcHRlZCA9IChhdHRlbXB0KSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhdHRlbXB0cy5zb21lKChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IGNvb3JkaW5hdGU7XG5cbiAgICAgICAgcmV0dXJuIHggPT09IGF0dGVtcHRbMF0gJiYgeSA9PT0gYXR0ZW1wdFsxXTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICBsZXQgbW92ZSA9IFtnZXRSYW5kb21JbnQoOSksIGdldFJhbmRvbUludCg5KV07XG5cbiAgICB3aGlsZSAoY2hlY2tBdHRlbXB0ZWQobW92ZSkpIHtcbiAgICAgIG1vdmUgPSBbZ2V0UmFuZG9tSW50KDkpLCBnZXRSYW5kb21JbnQoOSldO1xuICAgIH1cblxuICAgIHJldHVybiBtb3ZlO1xuICB9O1xuXG4gIHJldHVybiB7IGF0dGVtcHQsIGJvYXJkLCB0eXBlLCBnZW5lcmF0ZU1vdmUgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vR2FtZWJvYXJkXCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL1BsYXllclwiO1xuaW1wb3J0IFNoaXAgZnJvbSBcIi4vU2hpcFwiO1xuaW1wb3J0IGdhbWUgZnJvbSBcIi4vZ2FtZVwiO1xuXG5jb25zdCBVSSA9ICgoKSA9PiB7XG4gIGNvbnN0IHJlbmRlclN0YXJ0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0U2NyZWVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydFNjcmVlblwiKTtcbiAgICBzdGFydFNjcmVlbi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG5cbiAgICBjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgc3RhcnRCdXR0b24uaWQgPSBcInN0YXJ0QnRuXCI7XG4gICAgc3RhcnRCdXR0b24udGV4dENvbnRlbnQgPSBcIlN0YXJ0IEdhbWVcIjtcblxuICAgIHN0YXJ0U2NyZWVuLmFwcGVuZENoaWxkKHN0YXJ0QnV0dG9uKTtcblxuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2FyZFwiKTtcbiAgICBib2FyZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICBjb25zdCBuZXh0VHVybkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3dpdGNoVHVybkJ0blwiKTtcbiAgICBuZXh0VHVybkJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICBnZW5lcmF0ZUdyaWQoKTtcblxuICAgIHN0YXJ0QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBzdGFydEV2ZW50KHN0YXJ0U2NyZWVuKTtcbiAgICAgIHN0YXJ0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IHN0YXJ0RXZlbnQgPSAoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG5cbiAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9hcmRcIik7XG4gICAgYm9hcmQuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG5cbiAgICBjb25zdCBuZXh0VHVybkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3dpdGNoVHVybkJ0blwiKTtcbiAgICBuZXh0VHVybkJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgfTtcblxuICBjb25zdCByZW5kZXJCb2FyZCA9IChwbGF5ZXJCb2FyZCkgPT4ge1xuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2FyZFwiKTtcbiAgICBib2FyZC5pbm5lckhUTUwgPSBgPGRpdiBpZD1cIm92ZXJsYXlcIj48L2Rpdj5gO1xuXG4gICAgY29uc3QgcGxheWVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgY29uc29sZS5sb2cocGxheWVyQm9hcmQpO1xuICAgIHBsYXllclRpdGxlLmlubmVySFRNTCA9IGAke3BsYXllckJvYXJkLnR5cGV9J3MgVHVybmA7XG5cbiAgICBib2FyZC5hcHBlbmRDaGlsZChwbGF5ZXJUaXRsZSk7XG5cbiAgICBwbGF5ZXJCb2FyZC5ib2FyZEFycmF5LmZvckVhY2goKHJvdywgcm93SW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHJvd0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICByb3dEaXYuY2xhc3NMaXN0LmFkZChcInJvd0RpdlwiKTtcblxuICAgICAgcm93LmZvckVhY2goKGl0ZW0sIGNlbGxJbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiYm9hcmRDZWxsXCIpO1xuICAgICAgICBjZWxsLmlkID0gYCR7cGxheWVyQm9hcmQudHlwZX0gLSAke3Jvd0luZGV4fSwke2NlbGxJbmRleH1gO1xuICAgICAgICBjZWxsLmRhdGFzZXQuYm9hcmQgPSBwbGF5ZXJCb2FyZC50eXBlO1xuICAgICAgICBjZWxsLmRhdGFzZXQueCA9IHJvd0luZGV4O1xuICAgICAgICBjZWxsLmRhdGFzZXQueSA9IGNlbGxJbmRleDtcbiAgICAgICAgaWYgKGl0ZW0gIT09IFwibm9uZVwiKSB7XG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwic2hpcENlbGxcIik7XG5cbiAgICAgICAgICBpZiAoaXRlbS5pc1N1bmsoKSkge1xuICAgICAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgLy8gYWRqdXN0IHRoaXMuIE1heWJlIG1ha2UgaXQgYSBwbGF5Um91bmQgdGhpbmcgdG8ga2ljayBvZmYgYSByb3VuZCBhbmQgZW5kIGl0IHdpdGggYSB0dXJuIHN3aXRjaC5cbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIGlmIChjZWxsLnRleHRDb250ZW50ID09PSBcIlwiKSBnYW1lLm1vdmVFdmVudChjZWxsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcm93RGl2LmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgfSk7XG5cbiAgICAgIGJvYXJkLmFwcGVuZENoaWxkKHJvd0Rpdik7XG4gICAgfSk7XG5cbiAgICBwbGF5ZXJCb2FyZC5taXNzZXMuZm9yRWFjaCgoY29vcmRpbmF0ZXMpID0+IHtcbiAgICAgIGF0dGVtcHQoY29vcmRpbmF0ZXMsIHBsYXllckJvYXJkKTtcbiAgICB9KTtcbiAgICBwbGF5ZXJCb2FyZC5oaXRzLmZvckVhY2goKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgICBhdHRlbXB0KGNvb3JkaW5hdGVzLCBwbGF5ZXJCb2FyZCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgYXR0ZW1wdCA9IChjb29yZGluYXRlcywgZ2FtZWJvYXJkKSA9PiB7XG4gICAgY29uc3QgW3gsIHldID0gY29vcmRpbmF0ZXM7XG4gICAgY29uc3QgdGFyZ2V0Q2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2dhbWVib2FyZC50eXBlfSAtICR7eH0sJHt5fWApO1xuICAgIGNvbnN0IGlzU2hpcCA9IGdhbWVib2FyZC5pc1NoaXAoY29vcmRpbmF0ZXMpO1xuXG4gICAgaWYgKGlzU2hpcCkge1xuICAgICAgdGFyZ2V0Q2VsbC5pbm5lckhUTUwgPSBcIkhpdFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXRDZWxsLmlubmVySFRNTCA9IFwiTWlzc1wiO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzdG9wQ2xpY2tzID0gKCkgPT4ge1xuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlcIik7XG5cbiAgICBvdmVybGF5LnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImFsbFwiO1xuICB9O1xuXG4gIGNvbnN0IHN0YXJ0Q2xpY2tzID0gKCkgPT4ge1xuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlcIik7XG5cbiAgICBvdmVybGF5LnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgfTtcblxuICBjb25zdCBzdHlsZVN1bmsgPSAoYm9hcmRUeXBlKSA9PiB7XG4gICAgY29uc3Qgcm93cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucm93RGl2XCIpO1xuICAgIHJvd3MuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm9hcmRDZWxsXCIpO1xuICAgICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICBjb25zdCBbeCwgeV0gPSBbY2VsbC5kYXRhc2V0LngsIGNlbGwuZGF0YXNldC55XTtcblxuICAgICAgICBpZiAoYm9hcmRUeXBlID09PSBcIlVzZXJcIikge1xuICAgICAgICAgIGlmIChnYW1lLnVzZXJQbGF5ZXIuYm9hcmQuaXNTaGlwKFt4LCB5XSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBnYW1lLnVzZXJQbGF5ZXIuYm9hcmQuZ2V0U2hpcChbeCwgeV0pO1xuICAgICAgICAgICAgaWYgKHNoaXAuaXNTdW5rKCkpIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGdhbWUuY29tcHV0ZXJQbGF5ZXIuYm9hcmQuaXNTaGlwKFt4LCB5XSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBnYW1lLmNvbXB1dGVyUGxheWVyLmJvYXJkLmdldFNoaXAoW3gsIHldKTtcbiAgICAgICAgICAgIGlmIChzaGlwLmlzU3VuaygpKSBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVUdXJuQnRuID0gKCkgPT4ge1xuICAgIGNvbnN0IHN3aXRjaFR1cm5CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN3aXRjaFR1cm5CdG5cIik7XG4gICAgc3dpdGNoVHVybkJ0bi5kaXNhYmxlZCA9ICFzd2l0Y2hUdXJuQnRuLmRpc2FibGVkO1xuICB9O1xuXG4gIC8vIENob29zZSBTaGlwIExvY2F0aW9uc1xuXG4gIGNvbnN0IGlzVmVydGljYWwgPSB0cnVlO1xuICBjb25zdCBzaGlwTGVuZ3RocyA9IFsyLCAzLCA0LCA1XTtcbiAgY29uc3QgY3VycmVudFNoaXBMZW5ndGggPSA1O1xuXG4gIGNvbnN0IGdlbmVyYXRlR3JpZCA9ICgpID0+IHtcbiAgICBjb25zdCBzdGFydFNjcmVlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRTY3JlZW5cIik7XG4gICAgc3RhcnRTY3JlZW4uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBjb25zdCByb3dEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcm93RGl2LmNsYXNzTGlzdC5hZGQoXCJyb3dEaXZcIik7XG5cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0Q2VsbFwiKTtcbiAgICAgICAgcm93RGl2LmFwcGVuZENoaWxkKGNlbGwpO1xuXG4gICAgICAgIGNlbGwuZGF0YXNldC54ID0gaTtcbiAgICAgICAgY2VsbC5kYXRhc2V0LnkgPSBqO1xuXG4gICAgICAgIGNlbGwub25tb3VzZWVudGVyID0gKGUpID0+IHtcbiAgICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwieWVsbG93XCI7XG4gICAgICAgICAgZm9yIChsZXQgayA9IDE7IGsgPCBjdXJyZW50U2hpcExlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdDZWxsID0gZ2V0U2VsZWN0Q2VsbChbaSArIGssIGpdKTtcbiAgICAgICAgICAgIGlmIChuZXdDZWxsICE9PSB1bmRlZmluZWQpIG5ld0NlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ5ZWxsb3dcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNlbGwub25tb3VzZW91dCA9IChlKSA9PiB7XG4gICAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIlwiO1xuICAgICAgICAgIGZvciAobGV0IGsgPSAxOyBrIDwgY3VycmVudFNoaXBMZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgY29uc3QgbmV3Q2VsbCA9IGdldFNlbGVjdENlbGwoW2kgKyBrLCBqXSk7XG4gICAgICAgICAgICBpZiAobmV3Q2VsbCAhPT0gdW5kZWZpbmVkKSBuZXdDZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjZWxsLm9uY2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGNlbGwuZGF0YXNldC54LCBjZWxsLmRhdGFzZXQueSk7XG4gICAgICAgICAgZm9yIChsZXQgayA9IDE7IGsgPCBjdXJyZW50U2hpcExlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdDZWxsID0gZ2V0U2VsZWN0Q2VsbChbaSArIGssIGpdKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ld0NlbGwuZGF0YXNldC54LCBuZXdDZWxsLmRhdGFzZXQueSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBzdGFydFNjcmVlbi5hcHBlbmRDaGlsZChyb3dEaXYpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZXRTZWxlY3RDZWxsID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgY29uc3QgW3gsIHldID0gY29vcmRpbmF0ZXM7XG5cbiAgICBjb25zdCBzZWxlY3RDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VsZWN0Q2VsbFwiKTtcbiAgICBmb3IgKGNvbnN0IHNlbGVjdENlbGwgb2Ygc2VsZWN0Q2VsbHMpIHtcbiAgICAgIGlmIChcbiAgICAgICAgcGFyc2VJbnQoc2VsZWN0Q2VsbC5kYXRhc2V0LngpID09PSB4ICYmXG4gICAgICAgIHBhcnNlSW50KHNlbGVjdENlbGwuZGF0YXNldC55KSA9PT0geVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBzZWxlY3RDZWxsO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHJlbmRlckJvYXJkLFxuICAgIGF0dGVtcHQsXG4gICAgc3RvcENsaWNrcyxcbiAgICBzdGFydENsaWNrcyxcbiAgICBzdHlsZVN1bmssXG4gICAgcmVuZGVyU3RhcnQsXG4gICAgdG9nZ2xlVHVybkJ0bixcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFVJO1xuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9HYW1lYm9hcmRcIjtcbmltcG9ydCBTaGlwIGZyb20gXCIuL1NoaXBcIjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vUGxheWVyXCI7XG5pbXBvcnQgVUkgZnJvbSBcIi4vVUlcIjtcblxuY29uc3QgZ2FtZSA9ICgoKSA9PiB7XG4gIGNvbnN0IGNvbXB1dGVyUGxheWVyID0gUGxheWVyKFwiQ29tcHV0ZXJcIik7XG4gIGNvbnN0IHVzZXJQbGF5ZXIgPSBQbGF5ZXIoXCJVc2VyXCIpO1xuXG4gIGxldCBjdXJyZW50UGxheWVyID0gdXNlclBsYXllcjtcblxuICBjb25zdCBpbml0R2FtZSA9ICgpID0+IHtcbiAgICBjb25zdCB1c2VyQm9hcmQgPSB1c2VyUGxheWVyLmJvYXJkO1xuICAgIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBjb21wdXRlclBsYXllci5ib2FyZDtcbiAgICBjb21wdXRlckJvYXJkLmluaXRCb2FyZCgpO1xuICAgIHVzZXJCb2FyZC5pbml0Qm9hcmQoKTtcbiAgfTtcblxuICBjb25zdCBzd2l0Y2hUdXJuID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwic3RhcnQgc3dpdGNoXCIsIGdhbWUuY3VycmVudFBsYXllci50eXBlKTtcbiAgICBpZiAoZ2FtZS5jdXJyZW50UGxheWVyID09PSB1c2VyUGxheWVyKSB7XG4gICAgICBnYW1lLmN1cnJlbnRQbGF5ZXIgPSBjb21wdXRlclBsYXllcjtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2FtZS5jdXJyZW50UGxheWVyID0gdXNlclBsYXllcjtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcImVuZCBzd2l0Y2hcIiwgZ2FtZS5jdXJyZW50UGxheWVyLnR5cGUpO1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrTG9zcyA9IChwbGF5ZXIpID0+IHtcbiAgICBjb25zdCBhbGxTdW5rID0gcGxheWVyLmJvYXJkLnNoaXBzLmV2ZXJ5KChzaGlwKSA9PiB7XG4gICAgICByZXR1cm4gc2hpcC5pc1N1bmsoKTtcbiAgICB9KTtcblxuICAgIGlmIChhbGxTdW5rKSBhbGVydChcIndpblwiKTtcbiAgfTtcblxuICBjb25zdCBtb3ZlRXZlbnQgPSAoY2VsbCkgPT4ge1xuICAgIFVJLnN0b3BDbGlja3MoKTtcbiAgICBjb25zdCBjZWxsQm9hcmQgPVxuICAgICAgY2VsbC5kYXRhc2V0LmJvYXJkID09PSBcIkNvbXB1dGVyXCJcbiAgICAgICAgPyBjb21wdXRlclBsYXllci5ib2FyZFxuICAgICAgICA6IHVzZXJQbGF5ZXIuYm9hcmQ7XG5cbiAgICBjZWxsQm9hcmQucmVjZWl2ZUF0dGFjayhbY2VsbC5kYXRhc2V0LngsIGNlbGwuZGF0YXNldC55XSk7XG4gICAgVUkuYXR0ZW1wdChbY2VsbC5kYXRhc2V0LngsIGNlbGwuZGF0YXNldC55XSwgY2VsbEJvYXJkKTtcbiAgICBVSS5zdHlsZVN1bmsoY2VsbEJvYXJkLnR5cGUpO1xuICAgIGNoZWNrTG9zcyhjdXJyZW50UGxheWVyKTtcbiAgICBnYW1lLnN3aXRjaFR1cm4oKTtcbiAgICBVSS50b2dnbGVUdXJuQnRuKCk7XG4gIH07XG5cbiAgY29uc3QgY29tcHV0ZXJNb3ZlRXZlbnQgPSBhc3luYyAoKSA9PiB7XG4gICAgVUkuc3RvcENsaWNrcygpO1xuXG4gICAgY29uc3QgZGVsYXkgPSAobWlsbGlzZWNvbmRzKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgc2V0VGltZW91dChyZXNvbHZlLCBtaWxsaXNlY29uZHMpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGF3YWl0IGRlbGF5KDc1MCk7XG5cbiAgICBjb25zb2xlLmxvZyhcImFmdGVyIDEgc2VjXCIpO1xuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gZ2FtZS5jb21wdXRlclBsYXllci5nZW5lcmF0ZU1vdmUoKTtcblxuICAgIGNvbnN0IGNlbGxCb2FyZCA9IGdhbWUuY29tcHV0ZXJQbGF5ZXIuYm9hcmQ7XG4gICAgY2VsbEJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpO1xuICAgIFVJLmF0dGVtcHQoY29vcmRpbmF0ZXMsIGNlbGxCb2FyZCk7XG4gICAgVUkuc3R5bGVTdW5rKGNlbGxCb2FyZC50eXBlKTtcbiAgICBnYW1lLmNoZWNrTG9zcyhnYW1lLmN1cnJlbnRQbGF5ZXIpO1xuICAgIGdhbWUuc3dpdGNoVHVybigpO1xuICAgIFVJLnRvZ2dsZVR1cm5CdG4oKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGluaXRHYW1lLFxuICAgIHN3aXRjaFR1cm4sXG4gICAgY29tcHV0ZXJQbGF5ZXIsXG4gICAgdXNlclBsYXllcixcbiAgICBjdXJyZW50UGxheWVyLFxuICAgIGNoZWNrTG9zcyxcbiAgICBtb3ZlRXZlbnQsXG4gICAgY29tcHV0ZXJNb3ZlRXZlbnQsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBnYW1lO1xuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9tb2R1bGVzL0dhbWVib2FyZC5qc1wiO1xuaW1wb3J0IFNoaXAgZnJvbSBcIi4vbW9kdWxlcy9TaGlwLmpzXCI7XG5pbXBvcnQgZ2FtZSBmcm9tIFwiLi9tb2R1bGVzL2dhbWUuanNcIjtcbmltcG9ydCBVSSBmcm9tIFwiLi9tb2R1bGVzL1VJLmpzXCI7XG5cbmdhbWUuaW5pdEdhbWUoKTtcbmNvbnN0IHN3aXRjaFR1cm5CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN3aXRjaFR1cm5CdG5cIik7XG5VSS5yZW5kZXJCb2FyZChnYW1lLmN1cnJlbnRQbGF5ZXIuYm9hcmQpO1xuVUkucmVuZGVyU3RhcnQoKTtcblxuc3dpdGNoVHVybkJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICBVSS50b2dnbGVUdXJuQnRuKCk7XG5cbiAgVUkucmVuZGVyQm9hcmQoZ2FtZS5jdXJyZW50UGxheWVyLmJvYXJkKTtcblxuICBpZiAoZ2FtZS5jdXJyZW50UGxheWVyID09PSBnYW1lLmNvbXB1dGVyUGxheWVyKSB7XG4gICAgZ2FtZS5jb21wdXRlck1vdmVFdmVudCgpO1xuICB9IGVsc2Uge1xuICAgIFVJLnN0YXJ0Q2xpY2tzKCk7XG4gIH1cbn07XG4iXSwibmFtZXMiOlsicGF0aCIsImhpdHMiLCJnZXRMZW5ndGgiLCJjb3VudCIsImZvckVhY2giLCJlbGVtZW50IiwiaXNTdW5rIiwiaGl0IiwiZ2V0SGl0cyIsImdldFBhdGgiLCJyZXNldEhpdHMiLCJ0eXBlIiwiYm9hcmRBcnJheSIsIkFycmF5IiwibWFwIiwiZSIsImZpbGwiLCJtaXNzZXMiLCJzaGlwcyIsInBsYWNlU2hpcCIsInNoaXBPYmplY3QiLCJjb29yZGluYXRlcyIsIngiLCJ5IiwiYWRkU2hpcCIsInNoaXAiLCJwdXNoIiwicmVjZWl2ZUF0dGFjayIsImFscmVhZHlIaXQiLCJhbHJlYWR5TWlzcyIsInNvbWUiLCJpdGVtIiwieEl0ZW0iLCJ5SXRlbSIsInJlc2V0R2FtZWJvYXJkIiwiaW5pdEJvYXJkIiwiaXNTaGlwIiwiZ2V0U2hpcCIsImF0dGVtcHRzIiwiYXR0ZW1wdCIsImJvYXJkIiwiZ2VuZXJhdGVNb3ZlIiwiZ2V0UmFuZG9tSW50IiwibWF4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY2hlY2tBdHRlbXB0ZWQiLCJjb29yZGluYXRlIiwibW92ZSIsIlVJIiwiZ2FtZWJvYXJkIiwidGFyZ2V0Q2VsbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJnZXRTZWxlY3RDZWxsIiwic2VsZWN0Q2VsbHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwic2VsZWN0Q2VsbCIsInBhcnNlSW50IiwiZGF0YXNldCIsInJlbmRlckJvYXJkIiwicGxheWVyQm9hcmQiLCJwbGF5ZXJUaXRsZSIsImNyZWF0ZUVsZW1lbnQiLCJjb25zb2xlIiwibG9nIiwiYXBwZW5kQ2hpbGQiLCJyb3ciLCJyb3dJbmRleCIsInJvd0RpdiIsImNsYXNzTGlzdCIsImFkZCIsImNlbGxJbmRleCIsImNlbGwiLCJpZCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0b3BQcm9wYWdhdGlvbiIsInRleHRDb250ZW50IiwibW92ZUV2ZW50Iiwic3RvcENsaWNrcyIsInBvaW50ZXJFdmVudHMiLCJzdGFydENsaWNrcyIsInN0eWxlU3VuayIsImJvYXJkVHlwZSIsInVzZXJQbGF5ZXIiLCJjb21wdXRlclBsYXllciIsInJlbmRlclN0YXJ0Iiwic3RhcnRTY3JlZW4iLCJkaXNwbGF5Iiwic3RhcnRCdXR0b24iLCJpIiwiaiIsIm9ubW91c2VlbnRlciIsImsiLCJuZXdDZWxsIiwidW5kZWZpbmVkIiwib25tb3VzZW91dCIsIm9uY2xpY2siLCJnZW5lcmF0ZUdyaWQiLCJ0b2dnbGVUdXJuQnRuIiwic3dpdGNoVHVybkJ0biIsImRpc2FibGVkIiwiZ2FtZSIsImN1cnJlbnRQbGF5ZXIiLCJjaGVja0xvc3MiLCJwbGF5ZXIiLCJldmVyeSIsImFsZXJ0IiwiaW5pdEdhbWUiLCJ1c2VyQm9hcmQiLCJzd2l0Y2hUdXJuIiwiY2VsbEJvYXJkIiwiY29tcHV0ZXJNb3ZlRXZlbnQiLCJhc3luYyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCJdLCJzb3VyY2VSb290IjoiIn0=