'use strict'

const store = require('./../store.js')

const winConditions = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['1', '4', '7'], ['2', '5', '8'], ['3', '6', '9'], ['1', '5', '9'], ['3', '5', '7']]

const clearBoard = function () {
  store.played = []
  $('div.box').text('')
  store.game.over = false
  store.x = true
  $('#message').text('It\'s X\'s Turn.')
}

const currentPlayer = function () {
  if (store.played.length % 2 === 0) {
    return 'X'
  } else {
    return 'O'
  }
}

const checkWin = function () {
  const result = winConditions.some(function (condition) {
    //  If line is filled
    if (condition.every(id => store.played.includes(id))) {
      const line = []
      condition.forEach(id => {
        line.push($(`div#${id}`).text())
      })
      const test = line.every(x => line.every(y => x === y))
      if (test) {
        store.game.over = true
      }
    }
  })
  return result
}
const placePiece = function (e) {
  if (!store.game.over && store.played.length < 9) {
    const tgt = (store.played[store.played.length - 1])
    const cell = tgt
    if (store.played.includes(cell)) {
    } else {
      $(`div#${store.played[store.played.length - 1]}`).text(currentPlayer())
      // store.played.push(cell)
      checkWin()
    }

    if (store.played.length === 9 && !store.game.over) {
      $('#message').text(`Too bad, It's a draw.`)
    } else if (store.game.over) {
      const winner = $(`div#${store.played[store.played.length - 1]}`).text()
      $('#message').text(`${winner} is the Winner!`)
    }
  }
}

module.exports = {
  clearBoard,
  currentPlayer,
  checkWin
}
