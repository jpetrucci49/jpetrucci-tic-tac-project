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
      condition.forEach(id => line.push($(`div#${id}`).text()))
      // line.reduce((curr, next) => curr === next ? next : false)
      // does the same as -~-~-~-
      if (line.every(x => line.every(y => x === y))) {
        store.game.over = true
      }
    }
  })
  return result
}

module.exports = {
  clearBoard,
  currentPlayer,
  checkWin
}
