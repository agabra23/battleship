(()=>{"use strict";const e=function(e){let t=0;const r=()=>{let t=0;return e.forEach((e=>{t++})),t};return{getLength:r,isSunk:()=>t>=r(),hit:()=>{t++},getHits:()=>t,getPath:()=>e,resetHits:()=>{t=0},hits:t}},t=function(t){const r=[...Array(10)].map((e=>Array(10).fill("none"))),n=[],o=[];let s=[];const a=e=>{e.getPath().forEach((t=>{const[n,o]=t;r[n][o]=e})),l(e)},l=e=>{s.push(e)};return{placeShip:a,boardArray:r,receiveAttack:e=>{const[t,s]=e;let a,l=!1;a=n.some((t=>{const[r,n]=t;return r===e[0]&&n===e[1]})),l=o.some((t=>{const[r,n]=t;return r===e[0]&&n===e[1]})),"none"!==r[t][s]&&!1===a?(r[t][s].hit(),n.push(e)):"none"===r[t][s]&&!1===l&&o.push(e)},hits:n,misses:o,addShip:l,resetGameboard:()=>{n=[],o=[],s=[]},initBoard:()=>{a(e([[1,4],[1,5]])),a(e([[6,4],[6,5],[6,6]])),a(e([[4,2],[5,2],[6,2],[7,2]])),a(e([[8,3],[8,4],[8,5],[8,6],[8,7]])),a(e([[2,3],[2,4],[2,5],[2,6],[2,7]]))},isShip:e=>{const[t,n]=e;return"none"!==r[t][n]},getShip:e=>{const[t,n]=e;return r[t][n]},ships:s,type:t}},r=e=>{const r=[];return{attempt:e=>{r.push(e)},board:t(e),type:e,generateMove:()=>{const e=e=>Math.floor(Math.random()*e),t=e=>r.some((t=>{const[r,n]=t;return r===e[0]&&n===e[1]}));let n=[e(9),e(9)];for(;t(n);)n=[e(9),e(9)];return n}}},n=(()=>{const e=(e,t)=>{const[r,n]=e,o=document.getElementById(`${t.type} - ${r},${n}`),s=t.isShip(e);o.innerHTML=s?"Hit":"Miss"},t=e=>{const[t,r]=e,n=document.querySelectorAll(".selectCell");for(const e of n)if(parseInt(e.dataset.x)===t&&parseInt(e.dataset.y)===r)return e};return{renderBoard:t=>{const r=document.getElementById("board");r.innerHTML='<div id="overlay"></div>';const n=document.createElement("h3");console.log(t),n.innerHTML=`${t.type}'s Turn`,r.appendChild(n),t.boardArray.forEach(((e,n)=>{const o=document.createElement("div");o.classList.add("rowDiv"),e.forEach(((e,r)=>{const s=document.createElement("div");s.classList.add("boardCell"),s.id=`${t.type} - ${n},${r}`,s.dataset.board=t.type,s.dataset.x=n,s.dataset.y=r,"none"!==e&&(s.classList.add("shipCell"),e.isSunk()&&(s.style.backgroundColor="red")),s.addEventListener("click",(e=>{e.stopPropagation(),""===s.textContent&&a.moveEvent(s)})),o.appendChild(s)})),r.appendChild(o)})),t.misses.forEach((r=>{e(r,t)})),t.hits.forEach((r=>{e(r,t)}))},attempt:e,stopClicks:()=>{document.getElementById("overlay").style.pointerEvents="all"},startClicks:()=>{document.getElementById("overlay").style.pointerEvents="none"},styleSunk:e=>{document.querySelectorAll(".rowDiv").forEach((t=>{document.querySelectorAll(".boardCell").forEach((t=>{const[r,n]=[t.dataset.x,t.dataset.y];"User"===e?a.userPlayer.board.isShip([r,n])&&a.userPlayer.board.getShip([r,n]).isSunk()&&(t.style.backgroundColor="red"):a.computerPlayer.board.isShip([r,n])&&a.computerPlayer.board.getShip([r,n]).isSunk()&&(t.style.backgroundColor="red")}))}))},renderStart:()=>{const e=document.getElementById("startScreen");e.style.display="flex";const r=document.createElement("button");r.id="startBtn",r.textContent="Start Game",e.appendChild(r),document.getElementById("board").style.display="none",document.getElementById("switchTurnBtn").style.display="none",(()=>{const e=document.getElementById("startScreen");e.style.display="flex";for(let r=0;r<10;r++){const n=document.createElement("div");n.classList.add("rowDiv");for(let e=0;e<10;e++){const o=document.createElement("div");o.classList.add("selectCell"),n.appendChild(o),o.dataset.x=r,o.dataset.y=e,o.onmouseenter=n=>{n.target.style.backgroundColor="yellow";for(let n=1;n<3;n++){const o=t([r+n,e]);void 0!==o&&(o.style.backgroundColor="yellow"),console.log(o)}},o.onmouseout=n=>{n.target.style.backgroundColor="";for(let n=1;n<3;n++){const o=t([r+n,e]);void 0!==o&&(o.style.backgroundColor="")}}}e.appendChild(n)}})(),r.onclick=()=>{e.style.display="",document.getElementById("board").style.display="",document.getElementById("switchTurnBtn").style.display="",r.style.display="none"}},toggleTurnBtn:()=>{const e=document.getElementById("switchTurnBtn");e.disabled=!e.disabled}}})(),o=n,s=(()=>{const e=r("Computer"),t=r("User");let n=t;const a=e=>{e.board.ships.every((e=>e.isSunk()))&&alert("win")};return{initGame:()=>{const r=t.board;e.board.initBoard(),r.initBoard()},switchTurn:()=>{console.log("start switch",s.currentPlayer.type),s.currentPlayer===t?s.currentPlayer=e:s.currentPlayer=t,console.log("end switch",s.currentPlayer.type)},computerPlayer:e,userPlayer:t,currentPlayer:n,checkLoss:a,moveEvent:r=>{o.stopClicks();const l="Computer"===r.dataset.board?e.board:t.board;l.receiveAttack([r.dataset.x,r.dataset.y]),o.attempt([r.dataset.x,r.dataset.y],l),o.styleSunk(l.type),a(n),s.switchTurn(),o.toggleTurnBtn()},computerMoveEvent:async()=>{o.stopClicks(),await(750,new Promise((e=>{setTimeout(e,750)}))),console.log("after 1 sec");const e=s.computerPlayer.generateMove(),t=s.computerPlayer.board;t.receiveAttack(e),o.attempt(e,t),o.styleSunk(t.type),s.checkLoss(s.currentPlayer),s.switchTurn(),o.toggleTurnBtn()}}})(),a=s;a.initGame();const l=document.getElementById("switchTurnBtn");o.renderBoard(a.currentPlayer.board),o.renderStart(),l.onclick=()=>{o.toggleTurnBtn(),o.renderBoard(a.currentPlayer.board),a.currentPlayer===a.computerPlayer?a.computerMoveEvent():o.startClicks()}})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiJtQkFBQSxNQWlDQSxFQWpDYSxTQUFVQSxHQUNyQixJQUFJQyxFQUFPLEVBRVgsTUFRTUMsRUFBWSxLQUNoQixJQUFJQyxFQUFRLEVBSVosT0FIQUgsRUFBS0ksU0FBU0MsSUFDWkYsR0FBTyxJQUVGQSxDQUFLLEVBZWQsTUFBTyxDQUFFRCxZQUFXSSxPQVpMLElBQ05MLEdBQVFDLElBV1dLLElBeEJoQixLQUNWTixHQUFNLEVBdUJ5Qk8sUUE1QmpCLElBQ1BQLEVBMkJpQ1EsUUFSMUIsSUFDUFQsRUFPMENVLFVBSmpDLEtBQ2hCVCxFQUFPLENBQUMsRUFHb0RBLE9BQ2hFLEVDeUZBLEVBdkhrQixTQUFVVSxHQUMxQixNQUFNQyxFQUFhLElBQUlDLE1BQU0sS0FBS0MsS0FBS0MsR0FBTUYsTUFBTSxJQUFJRyxLQUFLLFVBQ3REZixFQUFPLEdBQ1BnQixFQUFTLEdBQ2YsSUFBSUMsRUFBUSxHQUVaLE1BaURNQyxFQUFhQyxJQUNKQSxFQUFXWCxVQUNuQkwsU0FBU2lCLElBQ1osTUFBT0MsRUFBR0MsR0FBS0YsRUFDZlQsRUFBV1UsR0FBR0MsR0FBS0gsQ0FBVSxJQUUvQkksRUFBUUosRUFBVyxFQTBCZkksRUFBV0MsSUFDZlAsRUFBTVEsS0FBS0QsRUFBSyxFQWVsQixNQUFPLENBQ0xOLFlBQ0FQLGFBQ0FlLGNBMUNxQk4sSUFDckIsTUFBT0MsRUFBR0MsR0FBS0YsRUFFZixJQUFJTyxFQUNGQyxHQUFjLEVBRWhCRCxFQUFhM0IsRUFBSzZCLE1BQU1DLElBQ3RCLE1BQU9DLEVBQU9DLEdBQVNGLEVBQ3ZCLE9BQU9DLElBQVVYLEVBQVksSUFBTVksSUFBVVosRUFBWSxFQUFFLElBRTdEUSxFQUFjWixFQUFPYSxNQUFNQyxJQUN6QixNQUFPQyxFQUFPQyxHQUFTRixFQUN2QixPQUFPQyxJQUFVWCxFQUFZLElBQU1ZLElBQVVaLEVBQVksRUFBRSxJQUdwQyxTQUFyQlQsRUFBV1UsR0FBR0MsS0FBZ0MsSUFBZkssR0FDakNoQixFQUFXVSxHQUFHQyxHQUFHaEIsTUFDakJOLEVBQUt5QixLQUFLTCxJQUNvQixTQUFyQlQsRUFBV1UsR0FBR0MsS0FBaUMsSUFBaEJNLEdBQ3hDWixFQUFPUyxLQUFLTCxFQUNkLEVBdUJBcEIsT0FDQWdCLFNBQ0FPLFVBQ0FVLGVBN0RxQixLQUNyQmpDLEVBQU8sR0FDUGdCLEVBQVMsR0FDVEMsRUFBUSxFQUFFLEVBMkRWaUIsVUF6R2dCLEtBQ2hCaEIsRUFDRSxFQUFLLENBQ0gsQ0FBQyxFQUFHLEdBQ0osQ0FBQyxFQUFHLE1BR1JBLEVBQ0UsRUFBSyxDQUNILENBQUMsRUFBRyxHQUNKLENBQUMsRUFBRyxHQUNKLENBQUMsRUFBRyxNQUdSQSxFQUNFLEVBQUssQ0FDSCxDQUFDLEVBQUcsR0FDSixDQUFDLEVBQUcsR0FDSixDQUFDLEVBQUcsR0FDSixDQUFDLEVBQUcsTUFJUkEsRUFDRSxFQUFLLENBQ0gsQ0FBQyxFQUFHLEdBQ0osQ0FBQyxFQUFHLEdBQ0osQ0FBQyxFQUFHLEdBQ0osQ0FBQyxFQUFHLEdBQ0osQ0FBQyxFQUFHLE1BR1JBLEVBQ0UsRUFBSyxDQUNILENBQUMsRUFBRyxHQUNKLENBQUMsRUFBRyxHQUNKLENBQUMsRUFBRyxHQUNKLENBQUMsRUFBRyxHQUNKLENBQUMsRUFBRyxLQUVQLEVBa0VEaUIsT0FyQmNmLElBQ2QsTUFBT0MsRUFBR0MsR0FBS0YsRUFFZixNQUE0QixTQUFyQlQsRUFBV1UsR0FBR0MsRUFBYSxFQW1CbENjLFFBaEJlaEIsSUFDZixNQUFPQyxFQUFHQyxHQUFLRixFQUVmLE9BQU9ULEVBQVdVLEdBQUdDLEVBQUUsRUFjdkJMLFFBQ0FQLE9BRUosRUNqRkEsRUFwQ2dCQSxJQUNkLE1BQU0yQixFQUFXLEdBZ0NqQixNQUFPLENBQUVDLFFBNUJRbEIsSUFDZmlCLEVBQVNaLEtBQUtMLEVBQVksRUEyQlZtQixNQTlCSixFQUFVN0IsR0E4QkNBLE9BQU04QixhQXhCVixLQUNuQixNQUFNQyxFQUFnQkMsR0FDYkMsS0FBS0MsTUFBTUQsS0FBS0UsU0FBV0gsR0FHOUJJLEVBQWtCUixHQUNQRCxFQUFTUixNQUFNa0IsSUFDNUIsTUFBTzFCLEVBQUdDLEdBQUt5QixFQUVmLE9BQU8xQixJQUFNaUIsRUFBUSxJQUFNaEIsSUFBTWdCLEVBQVEsRUFBRSxJQU0vQyxJQUFJVSxFQUFPLENBQUNQLEVBQWEsR0FBSUEsRUFBYSxJQUUxQyxLQUFPSyxFQUFlRSxJQUNwQkEsRUFBTyxDQUFDUCxFQUFhLEdBQUlBLEVBQWEsSUFHeEMsT0FBT08sQ0FBSSxFQUdnQyxFQzlCekNDLEVBQUssTUFDVCxNQW1GTVgsRUFBVSxDQUFDbEIsRUFBYThCLEtBQzVCLE1BQU83QixFQUFHQyxHQUFLRixFQUNUK0IsRUFBYUMsU0FBU0MsZUFBZSxHQUFHSCxFQUFVeEMsVUFBVVcsS0FBS0MsS0FDakVhLEVBQVNlLEVBQVVmLE9BQU9mLEdBRzlCK0IsRUFBV0csVUFEVG5CLEVBQ3FCLE1BRUEsTUFDekIsRUFxRklvQixFQUFpQm5DLElBQ3JCLE1BQU9DLEVBQUdDLEdBQUtGLEVBRVRvQyxFQUFjSixTQUFTSyxpQkFBaUIsZUFDOUMsSUFBSyxNQUFNQyxLQUFjRixFQUN2QixHQUNFRyxTQUFTRCxFQUFXRSxRQUFRdkMsS0FBT0EsR0FDbkNzQyxTQUFTRCxFQUFXRSxRQUFRdEMsS0FBT0EsRUFFbkMsT0FBT29DLENBRVgsRUFHRixNQUFPLENBQ0xHLFlBOUptQkMsSUFDbkIsTUFBTXZCLEVBQVFhLFNBQVNDLGVBQWUsU0FDdENkLEVBQU1lLFVBQVksMkJBRWxCLE1BQU1TLEVBQWNYLFNBQVNZLGNBQWMsTUFDM0NDLFFBQVFDLElBQUlKLEdBQ1pDLEVBQVlULFVBQVksR0FBR1EsRUFBWXBELGNBRXZDNkIsRUFBTTRCLFlBQVlKLEdBRWxCRCxFQUFZbkQsV0FBV1IsU0FBUSxDQUFDaUUsRUFBS0MsS0FDbkMsTUFBTUMsRUFBU2xCLFNBQVNZLGNBQWMsT0FDdENNLEVBQU9DLFVBQVVDLElBQUksVUFFckJKLEVBQUlqRSxTQUFRLENBQUMyQixFQUFNMkMsS0FDakIsTUFBTUMsRUFBT3RCLFNBQVNZLGNBQWMsT0FDcENVLEVBQUtILFVBQVVDLElBQUksYUFDbkJFLEVBQUtDLEdBQUssR0FBR2IsRUFBWXBELFVBQVUyRCxLQUFZSSxJQUMvQ0MsRUFBS2QsUUFBUXJCLE1BQVF1QixFQUFZcEQsS0FDakNnRSxFQUFLZCxRQUFRdkMsRUFBSWdELEVBQ2pCSyxFQUFLZCxRQUFRdEMsRUFBSW1ELEVBQ0osU0FBVDNDLElBQ0Y0QyxFQUFLSCxVQUFVQyxJQUFJLFlBRWYxQyxFQUFLekIsV0FDUHFFLEVBQUtFLE1BQU1DLGdCQUFrQixRQUlqQ0gsRUFBS0ksaUJBQWlCLFNBQVVoRSxJQUU5QkEsRUFBRWlFLGtCQUN1QixLQUFyQkwsRUFBS00sYUFBb0IsRUFBS0MsVUFBVVAsRUFBSyxJQUduREosRUFBT0gsWUFBWU8sRUFBSyxJQUcxQm5DLEVBQU00QixZQUFZRyxFQUFPLElBRzNCUixFQUFZOUMsT0FBT2IsU0FBU2lCLElBQzFCa0IsRUFBUWxCLEVBQWEwQyxFQUFZLElBRW5DQSxFQUFZOUQsS0FBS0csU0FBU2lCLElBQ3hCa0IsRUFBUWxCLEVBQWEwQyxFQUFZLEdBQ2pDLEVBaUhGeEIsVUFDQTRDLFdBbkdpQixLQUNEOUIsU0FBU0MsZUFBZSxXQUVoQ3VCLE1BQU1PLGNBQWdCLEtBQUssRUFpR25DQyxZQTlGa0IsS0FDRmhDLFNBQVNDLGVBQWUsV0FFaEN1QixNQUFNTyxjQUFnQixNQUFNLEVBNEZwQ0UsVUF6RmlCQyxJQUNKbEMsU0FBU0ssaUJBQWlCLFdBQ2xDdEQsU0FBU2lFLElBQ0VoQixTQUFTSyxpQkFBaUIsY0FDbEN0RCxTQUFTdUUsSUFDYixNQUFPckQsRUFBR0MsR0FBSyxDQUFDb0QsRUFBS2QsUUFBUXZDLEVBQUdxRCxFQUFLZCxRQUFRdEMsR0FFM0IsU0FBZGdFLEVBQ0UsRUFBS0MsV0FBV2hELE1BQU1KLE9BQU8sQ0FBQ2QsRUFBR0MsS0FDdEIsRUFBS2lFLFdBQVdoRCxNQUFNSCxRQUFRLENBQUNmLEVBQUdDLElBQ3RDakIsV0FBVXFFLEVBQUtFLE1BQU1DLGdCQUFrQixPQUc5QyxFQUFLVyxlQUFlakQsTUFBTUosT0FBTyxDQUFDZCxFQUFHQyxLQUMxQixFQUFLa0UsZUFBZWpELE1BQU1ILFFBQVEsQ0FBQ2YsRUFBR0MsSUFDMUNqQixXQUFVcUUsRUFBS0UsTUFBTUMsZ0JBQWtCLE1BRXBELEdBQ0EsR0FDRixFQXVFRlksWUFyTWtCLEtBQ2xCLE1BQU1DLEVBQWN0QyxTQUFTQyxlQUFlLGVBQzVDcUMsRUFBWWQsTUFBTWUsUUFBVSxPQUU1QixNQUFNQyxFQUFjeEMsU0FBU1ksY0FBYyxVQUMzQzRCLEVBQVlqQixHQUFLLFdBQ2pCaUIsRUFBWVosWUFBYyxhQUUxQlUsRUFBWXZCLFlBQVl5QixHQUVWeEMsU0FBU0MsZUFBZSxTQUNoQ3VCLE1BQU1lLFFBQVUsT0FFRnZDLFNBQVNDLGVBQWUsaUJBQ2hDdUIsTUFBTWUsUUFBVSxPQThIVCxNQUNuQixNQUFNRCxFQUFjdEMsU0FBU0MsZUFBZSxlQUM1Q3FDLEVBQVlkLE1BQU1lLFFBQVUsT0FFNUIsSUFBSyxJQUFJRSxFQUFJLEVBQUdBLEVBQUksR0FBSUEsSUFBSyxDQUMzQixNQUFNdkIsRUFBU2xCLFNBQVNZLGNBQWMsT0FDdENNLEVBQU9DLFVBQVVDLElBQUksVUFFckIsSUFBSyxJQUFJc0IsRUFBSSxFQUFHQSxFQUFJLEdBQUlBLElBQUssQ0FDM0IsTUFBTXBCLEVBQU90QixTQUFTWSxjQUFjLE9BQ3BDVSxFQUFLSCxVQUFVQyxJQUFJLGNBQ25CRixFQUFPSCxZQUFZTyxHQUVuQkEsRUFBS2QsUUFBUXZDLEVBQUl3RSxFQUNqQm5CLEVBQUtkLFFBQVF0QyxFQUFJd0UsRUFFakJwQixFQUFLcUIsYUFBZ0JqRixJQUNuQkEsRUFBRWtGLE9BQU9wQixNQUFNQyxnQkFBa0IsU0FDakMsSUFBSyxJQUFJb0IsRUFBSSxFQUFHQSxFQXBCRSxFQW9CcUJBLElBQUssQ0FDMUMsTUFBTUMsRUFBVTNDLEVBQWMsQ0FBQ3NDLEVBQUlJLEVBQUdILFNBQ3RCSyxJQUFaRCxJQUF1QkEsRUFBUXRCLE1BQU1DLGdCQUFrQixVQUMzRFosUUFBUUMsSUFBSWdDLEVBQ2QsR0FFRnhCLEVBQUswQixXQUFjdEYsSUFDakJBLEVBQUVrRixPQUFPcEIsTUFBTUMsZ0JBQWtCLEdBQ2pDLElBQUssSUFBSW9CLEVBQUksRUFBR0EsRUE1QkUsRUE0QnFCQSxJQUFLLENBQzFDLE1BQU1DLEVBQVUzQyxFQUFjLENBQUNzQyxFQUFJSSxFQUFHSCxTQUN0QkssSUFBWkQsSUFBdUJBLEVBQVF0QixNQUFNQyxnQkFBa0IsR0FDN0QsRUFFSixDQUVBYSxFQUFZdkIsWUFBWUcsRUFDMUIsR0E5SkErQixHQUVBVCxFQUFZVSxRQUFVLEtBQ1RaLEVBTUxkLE1BQU1lLFFBQVUsR0FFVnZDLFNBQVNDLGVBQWUsU0FDaEN1QixNQUFNZSxRQUFVLEdBRUZ2QyxTQUFTQyxlQUFlLGlCQUNoQ3VCLE1BQU1lLFFBQVUsR0FYMUJDLEVBQVloQixNQUFNZSxRQUFVLE1BQU0sQ0FDbkMsRUFpTERZLGNBckVvQixLQUNwQixNQUFNQyxFQUFnQnBELFNBQVNDLGVBQWUsaUJBQzlDbUQsRUFBY0MsVUFBWUQsRUFBY0MsUUFBUSxFQXFFbkQsRUF6TVUsR0EyTVgsSUMzTU1DLEVBQU8sTUFDWCxNQUFNbEIsRUFBaUIsRUFBTyxZQUN4QkQsRUFBYSxFQUFPLFFBRTFCLElBQUlvQixFQUFnQnBCLEVBRXBCLE1Ba0JNcUIsRUFBYUMsSUFDREEsRUFBT3RFLE1BQU10QixNQUFNNkYsT0FBT3RGLEdBQ2pDQSxFQUFLbkIsWUFHRDBHLE1BQU0sTUFBTSxFQXlDM0IsTUFBTyxDQUNMQyxTQWpFZSxLQUNmLE1BQU1DLEVBQVkxQixFQUFXaEQsTUFDUGlELEVBQWVqRCxNQUN2QkwsWUFDZCtFLEVBQVUvRSxXQUFXLEVBOERyQmdGLFdBM0RpQixLQUNqQmpELFFBQVFDLElBQUksZUFBZ0J3QyxFQUFLQyxjQUFjakcsTUFDM0NnRyxFQUFLQyxnQkFBa0JwQixFQUN6Qm1CLEVBQUtDLGNBQWdCbkIsRUFFckJrQixFQUFLQyxjQUFnQnBCLEVBR3ZCdEIsUUFBUUMsSUFBSSxhQUFjd0MsRUFBS0MsY0FBY2pHLEtBQUssRUFvRGxEOEUsaUJBQ0FELGFBQ0FvQixnQkFDQUMsWUFDQTNCLFVBN0NpQlAsSUFDakIsRUFBR1EsYUFDSCxNQUFNaUMsRUFDbUIsYUFBdkJ6QyxFQUFLZCxRQUFRckIsTUFDVGlELEVBQWVqRCxNQUNmZ0QsRUFBV2hELE1BRWpCNEUsRUFBVXpGLGNBQWMsQ0FBQ2dELEVBQUtkLFFBQVF2QyxFQUFHcUQsRUFBS2QsUUFBUXRDLElBQ3RELEVBQUdnQixRQUFRLENBQUNvQyxFQUFLZCxRQUFRdkMsRUFBR3FELEVBQUtkLFFBQVF0QyxHQUFJNkYsR0FDN0MsRUFBRzlCLFVBQVU4QixFQUFVekcsTUFDdkJrRyxFQUFVRCxHQUNWRCxFQUFLUSxhQUNMLEVBQUdYLGVBQWUsRUFrQ2xCYSxrQkEvQndCQyxVQUN4QixFQUFHbkMsbUJBUVMsSUFMSCxJQUFJb0MsU0FBU0MsSUFDbEJDLFdBQVdELEVBSUgsSUFKeUIsS0FNckN0RCxRQUFRQyxJQUFJLGVBQ1osTUFBTTlDLEVBQWNzRixFQUFLbEIsZUFBZWhELGVBRWxDMkUsRUFBWVQsRUFBS2xCLGVBQWVqRCxNQUN0QzRFLEVBQVV6RixjQUFjTixHQUN4QixFQUFHa0IsUUFBUWxCLEVBQWErRixHQUN4QixFQUFHOUIsVUFBVThCLEVBQVV6RyxNQUN2QmdHLEVBQUtFLFVBQVVGLEVBQUtDLGVBQ3BCRCxFQUFLUSxhQUNMLEVBQUdYLGVBQWUsRUFhckIsRUFoRlksR0FrRmIsSUNsRkEsRUFBS1MsV0FDTCxNQUFNUixFQUFnQnBELFNBQVNDLGVBQWUsaUJBQzlDLEVBQUdRLFlBQVksRUFBSzhDLGNBQWNwRSxPQUNsQyxFQUFHa0QsY0FFSGUsRUFBY0YsUUFBVSxLQUN0QixFQUFHQyxnQkFFSCxFQUFHMUMsWUFBWSxFQUFLOEMsY0FBY3BFLE9BRTlCLEVBQUtvRSxnQkFBa0IsRUFBS25CLGVBQzlCLEVBQUs0QixvQkFFTCxFQUFHaEMsYUFDTCxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL1NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL0dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvUGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9VSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFNoaXAgPSBmdW5jdGlvbiAocGF0aCkge1xuICBsZXQgaGl0cyA9IDA7XG5cbiAgY29uc3QgZ2V0SGl0cyA9ICgpID0+IHtcbiAgICByZXR1cm4gaGl0cztcbiAgfTtcblxuICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgaGl0cysrO1xuICB9O1xuXG4gIGNvbnN0IGdldExlbmd0aCA9ICgpID0+IHtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIHBhdGguZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgY291bnQrKztcbiAgICB9KTtcbiAgICByZXR1cm4gY291bnQ7XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgIHJldHVybiBoaXRzID49IGdldExlbmd0aCgpO1xuICB9O1xuXG4gIGNvbnN0IGdldFBhdGggPSAoKSA9PiB7XG4gICAgcmV0dXJuIHBhdGg7XG4gIH07XG5cbiAgY29uc3QgcmVzZXRIaXRzID0gKCkgPT4ge1xuICAgIGhpdHMgPSAwO1xuICB9O1xuXG4gIHJldHVybiB7IGdldExlbmd0aCwgaXNTdW5rLCBoaXQsIGdldEhpdHMsIGdldFBhdGgsIHJlc2V0SGl0cywgaGl0cyB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG4iLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9TaGlwLmpzXCI7XG5cbmNvbnN0IEdhbWVib2FyZCA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gIGNvbnN0IGJvYXJkQXJyYXkgPSBbLi4uQXJyYXkoMTApXS5tYXAoKGUpID0+IEFycmF5KDEwKS5maWxsKFwibm9uZVwiKSk7XG4gIGNvbnN0IGhpdHMgPSBbXTtcbiAgY29uc3QgbWlzc2VzID0gW107XG4gIGxldCBzaGlwcyA9IFtdO1xuXG4gIGNvbnN0IGluaXRCb2FyZCA9ICgpID0+IHtcbiAgICBwbGFjZVNoaXAoXG4gICAgICBTaGlwKFtcbiAgICAgICAgWzEsIDRdLFxuICAgICAgICBbMSwgNV0sXG4gICAgICBdKVxuICAgICk7XG4gICAgcGxhY2VTaGlwKFxuICAgICAgU2hpcChbXG4gICAgICAgIFs2LCA0XSxcbiAgICAgICAgWzYsIDVdLFxuICAgICAgICBbNiwgNl0sXG4gICAgICBdKVxuICAgICk7XG4gICAgcGxhY2VTaGlwKFxuICAgICAgU2hpcChbXG4gICAgICAgIFs0LCAyXSxcbiAgICAgICAgWzUsIDJdLFxuICAgICAgICBbNiwgMl0sXG4gICAgICAgIFs3LCAyXSxcbiAgICAgIF0pXG4gICAgKTtcblxuICAgIHBsYWNlU2hpcChcbiAgICAgIFNoaXAoW1xuICAgICAgICBbOCwgM10sXG4gICAgICAgIFs4LCA0XSxcbiAgICAgICAgWzgsIDVdLFxuICAgICAgICBbOCwgNl0sXG4gICAgICAgIFs4LCA3XSxcbiAgICAgIF0pXG4gICAgKTtcbiAgICBwbGFjZVNoaXAoXG4gICAgICBTaGlwKFtcbiAgICAgICAgWzIsIDNdLFxuICAgICAgICBbMiwgNF0sXG4gICAgICAgIFsyLCA1XSxcbiAgICAgICAgWzIsIDZdLFxuICAgICAgICBbMiwgN10sXG4gICAgICBdKVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgcmVzZXRHYW1lYm9hcmQgPSAoKSA9PiB7XG4gICAgaGl0cyA9IFtdO1xuICAgIG1pc3NlcyA9IFtdO1xuICAgIHNoaXBzID0gW107XG4gIH07XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXBPYmplY3QpID0+IHtcbiAgICBjb25zdCBwYXRoID0gc2hpcE9iamVjdC5nZXRQYXRoKCk7XG4gICAgcGF0aC5mb3JFYWNoKChjb29yZGluYXRlcykgPT4ge1xuICAgICAgY29uc3QgW3gsIHldID0gY29vcmRpbmF0ZXM7XG4gICAgICBib2FyZEFycmF5W3hdW3ldID0gc2hpcE9iamVjdDtcbiAgICB9KTtcbiAgICBhZGRTaGlwKHNoaXBPYmplY3QpO1xuICB9O1xuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmRpbmF0ZXMpID0+IHtcbiAgICBjb25zdCBbeCwgeV0gPSBjb29yZGluYXRlcztcblxuICAgIGxldCBhbHJlYWR5SGl0LFxuICAgICAgYWxyZWFkeU1pc3MgPSBmYWxzZTtcblxuICAgIGFscmVhZHlIaXQgPSBoaXRzLnNvbWUoKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IFt4SXRlbSwgeUl0ZW1dID0gaXRlbTtcbiAgICAgIHJldHVybiB4SXRlbSA9PT0gY29vcmRpbmF0ZXNbMF0gJiYgeUl0ZW0gPT09IGNvb3JkaW5hdGVzWzFdO1xuICAgIH0pO1xuICAgIGFscmVhZHlNaXNzID0gbWlzc2VzLnNvbWUoKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IFt4SXRlbSwgeUl0ZW1dID0gaXRlbTtcbiAgICAgIHJldHVybiB4SXRlbSA9PT0gY29vcmRpbmF0ZXNbMF0gJiYgeUl0ZW0gPT09IGNvb3JkaW5hdGVzWzFdO1xuICAgIH0pO1xuXG4gICAgaWYgKGJvYXJkQXJyYXlbeF1beV0gIT09IFwibm9uZVwiICYmIGFscmVhZHlIaXQgPT09IGZhbHNlKSB7XG4gICAgICBib2FyZEFycmF5W3hdW3ldLmhpdCgpO1xuICAgICAgaGl0cy5wdXNoKGNvb3JkaW5hdGVzKTtcbiAgICB9IGVsc2UgaWYgKGJvYXJkQXJyYXlbeF1beV0gPT09IFwibm9uZVwiICYmIGFscmVhZHlNaXNzID09PSBmYWxzZSkge1xuICAgICAgbWlzc2VzLnB1c2goY29vcmRpbmF0ZXMpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBhZGRTaGlwID0gKHNoaXApID0+IHtcbiAgICBzaGlwcy5wdXNoKHNoaXApO1xuICB9O1xuXG4gIGNvbnN0IGlzU2hpcCA9IChjb29yZGluYXRlcykgPT4ge1xuICAgIGNvbnN0IFt4LCB5XSA9IGNvb3JkaW5hdGVzO1xuXG4gICAgcmV0dXJuIGJvYXJkQXJyYXlbeF1beV0gIT09IFwibm9uZVwiO1xuICB9O1xuXG4gIGNvbnN0IGdldFNoaXAgPSAoY29vcmRpbmF0ZXMpID0+IHtcbiAgICBjb25zdCBbeCwgeV0gPSBjb29yZGluYXRlcztcblxuICAgIHJldHVybiBib2FyZEFycmF5W3hdW3ldO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcGxhY2VTaGlwLFxuICAgIGJvYXJkQXJyYXksXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBoaXRzLFxuICAgIG1pc3NlcyxcbiAgICBhZGRTaGlwLFxuICAgIHJlc2V0R2FtZWJvYXJkLFxuICAgIGluaXRCb2FyZCxcbiAgICBpc1NoaXAsXG4gICAgZ2V0U2hpcCxcbiAgICBzaGlwcyxcbiAgICB0eXBlLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9HYW1lYm9hcmRcIjtcblxuY29uc3QgUGxheWVyID0gKHR5cGUpID0+IHtcbiAgY29uc3QgYXR0ZW1wdHMgPSBbXTtcbiAgY29uc3QgdHVybiA9IGZhbHNlO1xuICBjb25zdCBib2FyZCA9IEdhbWVib2FyZCh0eXBlKTtcblxuICBjb25zdCBhdHRlbXB0ID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgYXR0ZW1wdHMucHVzaChjb29yZGluYXRlcyk7XG4gIH07XG5cbiAgY29uc3QgZ2VuZXJhdGVNb3ZlID0gKCkgPT4ge1xuICAgIGNvbnN0IGdldFJhbmRvbUludCA9IChtYXgpID0+IHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpO1xuICAgIH07XG5cbiAgICBjb25zdCBjaGVja0F0dGVtcHRlZCA9IChhdHRlbXB0KSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhdHRlbXB0cy5zb21lKChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IGNvb3JkaW5hdGU7XG5cbiAgICAgICAgcmV0dXJuIHggPT09IGF0dGVtcHRbMF0gJiYgeSA9PT0gYXR0ZW1wdFsxXTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICBsZXQgbW92ZSA9IFtnZXRSYW5kb21JbnQoOSksIGdldFJhbmRvbUludCg5KV07XG5cbiAgICB3aGlsZSAoY2hlY2tBdHRlbXB0ZWQobW92ZSkpIHtcbiAgICAgIG1vdmUgPSBbZ2V0UmFuZG9tSW50KDkpLCBnZXRSYW5kb21JbnQoOSldO1xuICAgIH1cblxuICAgIHJldHVybiBtb3ZlO1xuICB9O1xuXG4gIHJldHVybiB7IGF0dGVtcHQsIGJvYXJkLCB0eXBlLCBnZW5lcmF0ZU1vdmUgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vR2FtZWJvYXJkXCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL1BsYXllclwiO1xuaW1wb3J0IFNoaXAgZnJvbSBcIi4vU2hpcFwiO1xuaW1wb3J0IGdhbWUgZnJvbSBcIi4vZ2FtZVwiO1xuXG5jb25zdCBVSSA9ICgoKSA9PiB7XG4gIGNvbnN0IHJlbmRlclN0YXJ0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHN0YXJ0U2NyZWVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydFNjcmVlblwiKTtcbiAgICBzdGFydFNjcmVlbi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG5cbiAgICBjb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgc3RhcnRCdXR0b24uaWQgPSBcInN0YXJ0QnRuXCI7XG4gICAgc3RhcnRCdXR0b24udGV4dENvbnRlbnQgPSBcIlN0YXJ0IEdhbWVcIjtcblxuICAgIHN0YXJ0U2NyZWVuLmFwcGVuZENoaWxkKHN0YXJ0QnV0dG9uKTtcblxuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2FyZFwiKTtcbiAgICBib2FyZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICBjb25zdCBuZXh0VHVybkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3dpdGNoVHVybkJ0blwiKTtcbiAgICBuZXh0VHVybkJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICBnZW5lcmF0ZUdyaWQoKTtcblxuICAgIHN0YXJ0QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBzdGFydEV2ZW50KHN0YXJ0U2NyZWVuKTtcbiAgICAgIHN0YXJ0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IHN0YXJ0RXZlbnQgPSAoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG5cbiAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9hcmRcIik7XG4gICAgYm9hcmQuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG5cbiAgICBjb25zdCBuZXh0VHVybkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3dpdGNoVHVybkJ0blwiKTtcbiAgICBuZXh0VHVybkJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgfTtcblxuICBjb25zdCByZW5kZXJCb2FyZCA9IChwbGF5ZXJCb2FyZCkgPT4ge1xuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2FyZFwiKTtcbiAgICBib2FyZC5pbm5lckhUTUwgPSBgPGRpdiBpZD1cIm92ZXJsYXlcIj48L2Rpdj5gO1xuXG4gICAgY29uc3QgcGxheWVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgY29uc29sZS5sb2cocGxheWVyQm9hcmQpO1xuICAgIHBsYXllclRpdGxlLmlubmVySFRNTCA9IGAke3BsYXllckJvYXJkLnR5cGV9J3MgVHVybmA7XG5cbiAgICBib2FyZC5hcHBlbmRDaGlsZChwbGF5ZXJUaXRsZSk7XG5cbiAgICBwbGF5ZXJCb2FyZC5ib2FyZEFycmF5LmZvckVhY2goKHJvdywgcm93SW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHJvd0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICByb3dEaXYuY2xhc3NMaXN0LmFkZChcInJvd0RpdlwiKTtcblxuICAgICAgcm93LmZvckVhY2goKGl0ZW0sIGNlbGxJbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiYm9hcmRDZWxsXCIpO1xuICAgICAgICBjZWxsLmlkID0gYCR7cGxheWVyQm9hcmQudHlwZX0gLSAke3Jvd0luZGV4fSwke2NlbGxJbmRleH1gO1xuICAgICAgICBjZWxsLmRhdGFzZXQuYm9hcmQgPSBwbGF5ZXJCb2FyZC50eXBlO1xuICAgICAgICBjZWxsLmRhdGFzZXQueCA9IHJvd0luZGV4O1xuICAgICAgICBjZWxsLmRhdGFzZXQueSA9IGNlbGxJbmRleDtcbiAgICAgICAgaWYgKGl0ZW0gIT09IFwibm9uZVwiKSB7XG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwic2hpcENlbGxcIik7XG5cbiAgICAgICAgICBpZiAoaXRlbS5pc1N1bmsoKSkge1xuICAgICAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgLy8gYWRqdXN0IHRoaXMuIE1heWJlIG1ha2UgaXQgYSBwbGF5Um91bmQgdGhpbmcgdG8ga2ljayBvZmYgYSByb3VuZCBhbmQgZW5kIGl0IHdpdGggYSB0dXJuIHN3aXRjaC5cbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIGlmIChjZWxsLnRleHRDb250ZW50ID09PSBcIlwiKSBnYW1lLm1vdmVFdmVudChjZWxsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcm93RGl2LmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgfSk7XG5cbiAgICAgIGJvYXJkLmFwcGVuZENoaWxkKHJvd0Rpdik7XG4gICAgfSk7XG5cbiAgICBwbGF5ZXJCb2FyZC5taXNzZXMuZm9yRWFjaCgoY29vcmRpbmF0ZXMpID0+IHtcbiAgICAgIGF0dGVtcHQoY29vcmRpbmF0ZXMsIHBsYXllckJvYXJkKTtcbiAgICB9KTtcbiAgICBwbGF5ZXJCb2FyZC5oaXRzLmZvckVhY2goKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgICBhdHRlbXB0KGNvb3JkaW5hdGVzLCBwbGF5ZXJCb2FyZCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgYXR0ZW1wdCA9IChjb29yZGluYXRlcywgZ2FtZWJvYXJkKSA9PiB7XG4gICAgY29uc3QgW3gsIHldID0gY29vcmRpbmF0ZXM7XG4gICAgY29uc3QgdGFyZ2V0Q2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2dhbWVib2FyZC50eXBlfSAtICR7eH0sJHt5fWApO1xuICAgIGNvbnN0IGlzU2hpcCA9IGdhbWVib2FyZC5pc1NoaXAoY29vcmRpbmF0ZXMpO1xuXG4gICAgaWYgKGlzU2hpcCkge1xuICAgICAgdGFyZ2V0Q2VsbC5pbm5lckhUTUwgPSBcIkhpdFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXRDZWxsLmlubmVySFRNTCA9IFwiTWlzc1wiO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBzdG9wQ2xpY2tzID0gKCkgPT4ge1xuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlcIik7XG5cbiAgICBvdmVybGF5LnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImFsbFwiO1xuICB9O1xuXG4gIGNvbnN0IHN0YXJ0Q2xpY2tzID0gKCkgPT4ge1xuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm92ZXJsYXlcIik7XG5cbiAgICBvdmVybGF5LnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgfTtcblxuICBjb25zdCBzdHlsZVN1bmsgPSAoYm9hcmRUeXBlKSA9PiB7XG4gICAgY29uc3Qgcm93cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucm93RGl2XCIpO1xuICAgIHJvd3MuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm9hcmRDZWxsXCIpO1xuICAgICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICBjb25zdCBbeCwgeV0gPSBbY2VsbC5kYXRhc2V0LngsIGNlbGwuZGF0YXNldC55XTtcblxuICAgICAgICBpZiAoYm9hcmRUeXBlID09PSBcIlVzZXJcIikge1xuICAgICAgICAgIGlmIChnYW1lLnVzZXJQbGF5ZXIuYm9hcmQuaXNTaGlwKFt4LCB5XSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBnYW1lLnVzZXJQbGF5ZXIuYm9hcmQuZ2V0U2hpcChbeCwgeV0pO1xuICAgICAgICAgICAgaWYgKHNoaXAuaXNTdW5rKCkpIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGdhbWUuY29tcHV0ZXJQbGF5ZXIuYm9hcmQuaXNTaGlwKFt4LCB5XSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBnYW1lLmNvbXB1dGVyUGxheWVyLmJvYXJkLmdldFNoaXAoW3gsIHldKTtcbiAgICAgICAgICAgIGlmIChzaGlwLmlzU3VuaygpKSBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVUdXJuQnRuID0gKCkgPT4ge1xuICAgIGNvbnN0IHN3aXRjaFR1cm5CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN3aXRjaFR1cm5CdG5cIik7XG4gICAgc3dpdGNoVHVybkJ0bi5kaXNhYmxlZCA9ICFzd2l0Y2hUdXJuQnRuLmRpc2FibGVkO1xuICB9O1xuXG4gIC8vIENob29zZSBTaGlwIExvY2F0aW9uc1xuXG4gIGNvbnN0IGlzVmVydGljYWwgPSB0cnVlO1xuICBjb25zdCBzaGlwTGVuZ3RocyA9IFsyLCAzLCA0LCA1XTtcbiAgY29uc3QgY3VycmVudFNoaXBMZW5ndGggPSAzO1xuXG4gIGNvbnN0IGdlbmVyYXRlR3JpZCA9ICgpID0+IHtcbiAgICBjb25zdCBzdGFydFNjcmVlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhcnRTY3JlZW5cIik7XG4gICAgc3RhcnRTY3JlZW4uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBjb25zdCByb3dEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcm93RGl2LmNsYXNzTGlzdC5hZGQoXCJyb3dEaXZcIik7XG5cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0Q2VsbFwiKTtcbiAgICAgICAgcm93RGl2LmFwcGVuZENoaWxkKGNlbGwpO1xuXG4gICAgICAgIGNlbGwuZGF0YXNldC54ID0gaTtcbiAgICAgICAgY2VsbC5kYXRhc2V0LnkgPSBqO1xuXG4gICAgICAgIGNlbGwub25tb3VzZWVudGVyID0gKGUpID0+IHtcbiAgICAgICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInllbGxvd1wiO1xuICAgICAgICAgIGZvciAobGV0IGsgPSAxOyBrIDwgY3VycmVudFNoaXBMZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgY29uc3QgbmV3Q2VsbCA9IGdldFNlbGVjdENlbGwoW2kgKyBrLCBqXSk7XG4gICAgICAgICAgICBpZiAobmV3Q2VsbCAhPT0gdW5kZWZpbmVkKSBuZXdDZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwieWVsbG93XCI7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuZXdDZWxsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNlbGwub25tb3VzZW91dCA9IChlKSA9PiB7XG4gICAgICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJcIjtcbiAgICAgICAgICBmb3IgKGxldCBrID0gMTsgayA8IGN1cnJlbnRTaGlwTGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0NlbGwgPSBnZXRTZWxlY3RDZWxsKFtpICsgaywgal0pO1xuICAgICAgICAgICAgaWYgKG5ld0NlbGwgIT09IHVuZGVmaW5lZCkgbmV3Q2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIlwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgc3RhcnRTY3JlZW4uYXBwZW5kQ2hpbGQocm93RGl2KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0U2VsZWN0Q2VsbCA9IChjb29yZGluYXRlcykgPT4ge1xuICAgIGNvbnN0IFt4LCB5XSA9IGNvb3JkaW5hdGVzO1xuXG4gICAgY29uc3Qgc2VsZWN0Q2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlbGVjdENlbGxcIik7XG4gICAgZm9yIChjb25zdCBzZWxlY3RDZWxsIG9mIHNlbGVjdENlbGxzKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHBhcnNlSW50KHNlbGVjdENlbGwuZGF0YXNldC54KSA9PT0geCAmJlxuICAgICAgICBwYXJzZUludChzZWxlY3RDZWxsLmRhdGFzZXQueSkgPT09IHlcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gc2VsZWN0Q2VsbDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICByZW5kZXJCb2FyZCxcbiAgICBhdHRlbXB0LFxuICAgIHN0b3BDbGlja3MsXG4gICAgc3RhcnRDbGlja3MsXG4gICAgc3R5bGVTdW5rLFxuICAgIHJlbmRlclN0YXJ0LFxuICAgIHRvZ2dsZVR1cm5CdG4sXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBVSTtcbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vR2FtZWJvYXJkXCI7XG5pbXBvcnQgU2hpcCBmcm9tIFwiLi9TaGlwXCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL1BsYXllclwiO1xuaW1wb3J0IFVJIGZyb20gXCIuL1VJXCI7XG5cbmNvbnN0IGdhbWUgPSAoKCkgPT4ge1xuICBjb25zdCBjb21wdXRlclBsYXllciA9IFBsYXllcihcIkNvbXB1dGVyXCIpO1xuICBjb25zdCB1c2VyUGxheWVyID0gUGxheWVyKFwiVXNlclwiKTtcblxuICBsZXQgY3VycmVudFBsYXllciA9IHVzZXJQbGF5ZXI7XG5cbiAgY29uc3QgaW5pdEdhbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgdXNlckJvYXJkID0gdXNlclBsYXllci5ib2FyZDtcbiAgICBjb25zdCBjb21wdXRlckJvYXJkID0gY29tcHV0ZXJQbGF5ZXIuYm9hcmQ7XG4gICAgY29tcHV0ZXJCb2FyZC5pbml0Qm9hcmQoKTtcbiAgICB1c2VyQm9hcmQuaW5pdEJvYXJkKCk7XG4gIH07XG5cbiAgY29uc3Qgc3dpdGNoVHVybiA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInN0YXJ0IHN3aXRjaFwiLCBnYW1lLmN1cnJlbnRQbGF5ZXIudHlwZSk7XG4gICAgaWYgKGdhbWUuY3VycmVudFBsYXllciA9PT0gdXNlclBsYXllcikge1xuICAgICAgZ2FtZS5jdXJyZW50UGxheWVyID0gY29tcHV0ZXJQbGF5ZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdhbWUuY3VycmVudFBsYXllciA9IHVzZXJQbGF5ZXI7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJlbmQgc3dpdGNoXCIsIGdhbWUuY3VycmVudFBsYXllci50eXBlKTtcbiAgfTtcblxuICBjb25zdCBjaGVja0xvc3MgPSAocGxheWVyKSA9PiB7XG4gICAgY29uc3QgYWxsU3VuayA9IHBsYXllci5ib2FyZC5zaGlwcy5ldmVyeSgoc2hpcCkgPT4ge1xuICAgICAgcmV0dXJuIHNoaXAuaXNTdW5rKCk7XG4gICAgfSk7XG5cbiAgICBpZiAoYWxsU3VuaykgYWxlcnQoXCJ3aW5cIik7XG4gIH07XG5cbiAgY29uc3QgbW92ZUV2ZW50ID0gKGNlbGwpID0+IHtcbiAgICBVSS5zdG9wQ2xpY2tzKCk7XG4gICAgY29uc3QgY2VsbEJvYXJkID1cbiAgICAgIGNlbGwuZGF0YXNldC5ib2FyZCA9PT0gXCJDb21wdXRlclwiXG4gICAgICAgID8gY29tcHV0ZXJQbGF5ZXIuYm9hcmRcbiAgICAgICAgOiB1c2VyUGxheWVyLmJvYXJkO1xuXG4gICAgY2VsbEJvYXJkLnJlY2VpdmVBdHRhY2soW2NlbGwuZGF0YXNldC54LCBjZWxsLmRhdGFzZXQueV0pO1xuICAgIFVJLmF0dGVtcHQoW2NlbGwuZGF0YXNldC54LCBjZWxsLmRhdGFzZXQueV0sIGNlbGxCb2FyZCk7XG4gICAgVUkuc3R5bGVTdW5rKGNlbGxCb2FyZC50eXBlKTtcbiAgICBjaGVja0xvc3MoY3VycmVudFBsYXllcik7XG4gICAgZ2FtZS5zd2l0Y2hUdXJuKCk7XG4gICAgVUkudG9nZ2xlVHVybkJ0bigpO1xuICB9O1xuXG4gIGNvbnN0IGNvbXB1dGVyTW92ZUV2ZW50ID0gYXN5bmMgKCkgPT4ge1xuICAgIFVJLnN0b3BDbGlja3MoKTtcblxuICAgIGNvbnN0IGRlbGF5ID0gKG1pbGxpc2Vjb25kcykgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgbWlsbGlzZWNvbmRzKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBhd2FpdCBkZWxheSg3NTApO1xuXG4gICAgY29uc29sZS5sb2coXCJhZnRlciAxIHNlY1wiKTtcbiAgICBjb25zdCBjb29yZGluYXRlcyA9IGdhbWUuY29tcHV0ZXJQbGF5ZXIuZ2VuZXJhdGVNb3ZlKCk7XG5cbiAgICBjb25zdCBjZWxsQm9hcmQgPSBnYW1lLmNvbXB1dGVyUGxheWVyLmJvYXJkO1xuICAgIGNlbGxCb2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKTtcbiAgICBVSS5hdHRlbXB0KGNvb3JkaW5hdGVzLCBjZWxsQm9hcmQpO1xuICAgIFVJLnN0eWxlU3VuayhjZWxsQm9hcmQudHlwZSk7XG4gICAgZ2FtZS5jaGVja0xvc3MoZ2FtZS5jdXJyZW50UGxheWVyKTtcbiAgICBnYW1lLnN3aXRjaFR1cm4oKTtcbiAgICBVSS50b2dnbGVUdXJuQnRuKCk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0R2FtZSxcbiAgICBzd2l0Y2hUdXJuLFxuICAgIGNvbXB1dGVyUGxheWVyLFxuICAgIHVzZXJQbGF5ZXIsXG4gICAgY3VycmVudFBsYXllcixcbiAgICBjaGVja0xvc3MsXG4gICAgbW92ZUV2ZW50LFxuICAgIGNvbXB1dGVyTW92ZUV2ZW50LFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2FtZTtcbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vbW9kdWxlcy9HYW1lYm9hcmQuanNcIjtcbmltcG9ydCBTaGlwIGZyb20gXCIuL21vZHVsZXMvU2hpcC5qc1wiO1xuaW1wb3J0IGdhbWUgZnJvbSBcIi4vbW9kdWxlcy9nYW1lLmpzXCI7XG5pbXBvcnQgVUkgZnJvbSBcIi4vbW9kdWxlcy9VSS5qc1wiO1xuXG5nYW1lLmluaXRHYW1lKCk7XG5jb25zdCBzd2l0Y2hUdXJuQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzd2l0Y2hUdXJuQnRuXCIpO1xuVUkucmVuZGVyQm9hcmQoZ2FtZS5jdXJyZW50UGxheWVyLmJvYXJkKTtcblVJLnJlbmRlclN0YXJ0KCk7XG5cbnN3aXRjaFR1cm5CdG4ub25jbGljayA9ICgpID0+IHtcbiAgVUkudG9nZ2xlVHVybkJ0bigpO1xuXG4gIFVJLnJlbmRlckJvYXJkKGdhbWUuY3VycmVudFBsYXllci5ib2FyZCk7XG5cbiAgaWYgKGdhbWUuY3VycmVudFBsYXllciA9PT0gZ2FtZS5jb21wdXRlclBsYXllcikge1xuICAgIGdhbWUuY29tcHV0ZXJNb3ZlRXZlbnQoKTtcbiAgfSBlbHNlIHtcbiAgICBVSS5zdGFydENsaWNrcygpO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbInBhdGgiLCJoaXRzIiwiZ2V0TGVuZ3RoIiwiY291bnQiLCJmb3JFYWNoIiwiZWxlbWVudCIsImlzU3VuayIsImhpdCIsImdldEhpdHMiLCJnZXRQYXRoIiwicmVzZXRIaXRzIiwidHlwZSIsImJvYXJkQXJyYXkiLCJBcnJheSIsIm1hcCIsImUiLCJmaWxsIiwibWlzc2VzIiwic2hpcHMiLCJwbGFjZVNoaXAiLCJzaGlwT2JqZWN0IiwiY29vcmRpbmF0ZXMiLCJ4IiwieSIsImFkZFNoaXAiLCJzaGlwIiwicHVzaCIsInJlY2VpdmVBdHRhY2siLCJhbHJlYWR5SGl0IiwiYWxyZWFkeU1pc3MiLCJzb21lIiwiaXRlbSIsInhJdGVtIiwieUl0ZW0iLCJyZXNldEdhbWVib2FyZCIsImluaXRCb2FyZCIsImlzU2hpcCIsImdldFNoaXAiLCJhdHRlbXB0cyIsImF0dGVtcHQiLCJib2FyZCIsImdlbmVyYXRlTW92ZSIsImdldFJhbmRvbUludCIsIm1heCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNoZWNrQXR0ZW1wdGVkIiwiY29vcmRpbmF0ZSIsIm1vdmUiLCJVSSIsImdhbWVib2FyZCIsInRhcmdldENlbGwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwiZ2V0U2VsZWN0Q2VsbCIsInNlbGVjdENlbGxzIiwicXVlcnlTZWxlY3RvckFsbCIsInNlbGVjdENlbGwiLCJwYXJzZUludCIsImRhdGFzZXQiLCJyZW5kZXJCb2FyZCIsInBsYXllckJvYXJkIiwicGxheWVyVGl0bGUiLCJjcmVhdGVFbGVtZW50IiwiY29uc29sZSIsImxvZyIsImFwcGVuZENoaWxkIiwicm93Iiwicm93SW5kZXgiLCJyb3dEaXYiLCJjbGFzc0xpc3QiLCJhZGQiLCJjZWxsSW5kZXgiLCJjZWxsIiwiaWQiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdG9wUHJvcGFnYXRpb24iLCJ0ZXh0Q29udGVudCIsIm1vdmVFdmVudCIsInN0b3BDbGlja3MiLCJwb2ludGVyRXZlbnRzIiwic3RhcnRDbGlja3MiLCJzdHlsZVN1bmsiLCJib2FyZFR5cGUiLCJ1c2VyUGxheWVyIiwiY29tcHV0ZXJQbGF5ZXIiLCJyZW5kZXJTdGFydCIsInN0YXJ0U2NyZWVuIiwiZGlzcGxheSIsInN0YXJ0QnV0dG9uIiwiaSIsImoiLCJvbm1vdXNlZW50ZXIiLCJ0YXJnZXQiLCJrIiwibmV3Q2VsbCIsInVuZGVmaW5lZCIsIm9ubW91c2VvdXQiLCJnZW5lcmF0ZUdyaWQiLCJvbmNsaWNrIiwidG9nZ2xlVHVybkJ0biIsInN3aXRjaFR1cm5CdG4iLCJkaXNhYmxlZCIsImdhbWUiLCJjdXJyZW50UGxheWVyIiwiY2hlY2tMb3NzIiwicGxheWVyIiwiZXZlcnkiLCJhbGVydCIsImluaXRHYW1lIiwidXNlckJvYXJkIiwic3dpdGNoVHVybiIsImNlbGxCb2FyZCIsImNvbXB1dGVyTW92ZUV2ZW50IiwiYXN5bmMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiXSwic291cmNlUm9vdCI6IiJ9