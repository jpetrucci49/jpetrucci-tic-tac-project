
let gameWin = false
let played = []
const winConditions = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]]
let x = true

const clearBoard = function () {
  $('div.box').text('')
}
const ticTacBoard = function (e) {
  const tgt = e.target
  const cell = parseInt(tgt.id)
  console.log('You clicked cell -', cell)
  if (played.includes(cell)) {
    console.log('That cell is already played.')
  } else {
    if (x) {
      $(tgt).text('X')
      x = !x
    } else {
      $(tgt).text('O')
      x = !x
    }
    played.push(cell)
  }

  if (played.length === 9 && !gameWin) {
    console.log('Game over, It\'s a draw.')
    played = []
    x = true

    setTimeout(clearBoard, 1000)
  }
  console.log('Cells played -', played)
}

const handler = function () {
  $('#ticTac').on('click', ticTacBoard)
}
module.exports = {
  handler
}
