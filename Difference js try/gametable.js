import findAllDifferences from "./difference_try01.js"

console.log("Table Test");

const tableDiv = document.getElementById("game-table-div");
const gametable = document.getElementById("game-table");

const calBtn = document.getElementById("cal-btn");
const resetBtn = document.getElementById("reset-btn");
const playerResultRow = document.getElementById("player-result-row")
const payAmountRow = document.getElementById("pay-amount-row")

const playerNum = 3;

let scoreArray = [];

for(let i=0; i<playerNum; i++){
  scoreArray.push([]);
}

// console.log(calculatePlayerTotal());

// console.log(gametable.rows[1].cells[2].childNodes[0].value)
// console.log(gametable.rows[1].cells.length)
// console.log(gametable.rows.length);

function calculatePlayerTotal() {
  let totalArray = Array(playerNum).fill(0)

  for(let i=1; i<(gametable.rows.length); i++) {
    for(let j=1; j<gametable.rows[i].cells.length; j++){
      totalArray[j-1] += Number(gametable.rows[i].cells[j].childNodes[0].value)
    }
  }
  console.log(totalArray);

  return totalArray
}

calBtn.onclick = function() {
  playerResultRow.innerHTML = `<tr><td  class="row-label">Total</td>`
  payAmountRow.innerHTML = `<tr><td class="row-label">Pay</td>`

  const results = calculatePlayerTotal()
  const resultsDisplay = results.map(result => {
    playerResultRow.innerHTML += `<td class="player-result-cell">${result}</td>`
  })

  playerResultRow.innerHTML += `</tr>`

  const payAmount = findAllDifferences(results)
  const payAmountDisplay = payAmount.map(ele => {
    payAmountRow.innerHTML += `<td class="pay-amount-cell">$${ele}</td>`
  })

  payAmountRow.innerHTML += `</tr>`
}

function resetTable() {
  playerResultRow.innerHTML = ""
  payAmountRow.innerHTML = ""

  for(let i=1; i<(gametable.rows.length); i++) {
    for(let j=1; j<gametable.rows[i].cells.length; j++){
      gametable.rows[i].cells[j].childNodes[0].value = 0
    }
  }
}

resetBtn.onclick = function() {
  resetTable()
}
