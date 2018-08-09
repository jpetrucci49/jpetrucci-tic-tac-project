
let gameWin = false
let played = []
const winConditions = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]]

const ticTacBoard = function (e) {
  const cell = parseInt(e.target.id)
  console.log('You clicked cell -', cell)
  if (played.includes(cell)) {
    console.log('That cell is already played.')
  } else {
    played.push(cell)
  }

  if (played.length === 9 && !gameWin) {
    console.log('Game over, It\'s a draw.')
    played = []
  }
  console.log('Cells played -', played)
}

module.exports = {
  ticTacBoard
}
