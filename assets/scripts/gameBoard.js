
let gameWin = false
let played = []
const winConditions = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]]
let x = true

const clearBoard = function () {
  $('div.box').text('')
}

const match = function () {
  // if (played.length < 3) {
  //   return false
  // }
  const result = winConditions.some(function (condition) { // reduce(function(a, b){ return (a === b) ? a : NaN; })
    if (condition.every(id => played.includes(id)) condition.every(y => $(`div#${id}`).text())) {
      console.log('Yeaaaaaaah')
    }
  })
  return result
  // winConditions.forEach(function (x) {
  //   return played.forEach(function (y) {
  //     console.log((x.indexOf(y) > -1))
  // })
  // })
}

// var array1 = [[1, 3, 5], [2, 4, 7], [1, 5, 9]],
//     array2 = [1, 2, 4, 5, 9],
//     result = array1.some(a => a.every(v => array2.includes(v)));

const winCheck = function () {
  console.log(match())
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
    winCheck()
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
