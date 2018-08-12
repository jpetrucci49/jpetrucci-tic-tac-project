'use strict'
const api = require('./api.js')
const ui = require('./ui.js')

let gameWin = false
let played = []
const winConditions = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]]
let x = true

const clearBoard = function () {
  played = []
  x = true
  $('div.box').text('')
  gameWin = false
  $('#message').text('')
}

const checkWin = function () {
  const result = winConditions.some(function (condition) {
    //  If line is filled
    if (condition.every(id => played.includes(id))) {
      const line = []
      condition.forEach(id => {
        line.push($(`div#${id}`).text())
      })
      const test = line.every(x => line.every(y => x === y))
      if (test) {
        gameWin = !gameWin
      }
    }
  })
  return result
}

const ticTacBoard = function (e) {
  if (gameWin === false) {
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
      checkWin()
    }

    if (played.length === 9 && !gameWin) {
      console.log('Game over, It\'s a draw.')
      $('#message').text(`Too bad, It's a draw.`)
      setTimeout(clearBoard, 1000)
    } else if (gameWin) {
      console.log('Yeah! Thats a win!')
      const winner = $(`div#${played[played.length - 1]}`).text()
      $('#message').text(`${winner} is the Winner!`)
      setTimeout(clearBoard, 1000)
    }
    console.log('Cells played -', played)
  }
}

const handler = function () {
  $('#ticTac').on('click', ticTacBoard)
}

module.exports = {
  handler
}
