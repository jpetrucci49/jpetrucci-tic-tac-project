'use strict'
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('./../store.js')

const winConditions = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['1', '4', '7'], ['2', '5', '8'], ['3', '6', '9'], ['1', '5', '9'], ['3', '5', '7']]
let player

const clearBoard = function () {
  x = true
  $('div.box').text('')
}

const currentPlayer = function () {
  if (store.x) {
    player = 'X'
  } else {
    player = 'O'
  }
  store.x = !store.x
  return player
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

const ticTacBoard = function (e) {
  if (gameWin === false) {
    const tgt = e.target
    const cell = parseInt(tgt.id)
    if (played.includes(cell)) {
    } else {
      if (x) {
        $(tgt).text('X')
        x = !x
      } else {
        $(tgt).text('O')
        x = !x
      }
      played.push(cell)
      store.played.push(cell)
      checkWin()
    }

    if (played.length === 9 && !gameWin) {
      $('#message').text(`Too bad, It's a draw.`)
    } else if (gameWin) {
      const winner = $(`div#${played[played.length - 1]}`).text()
      $('#message').text(`${winner} is the Winner!`)
    }
  }
}
const onNewGame = function () {
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFail)
}
const onPlacePiece = function (e) {
  if (store.game.over === false && store.played.length < 9) {
    if (store.played.includes(e.target.id)) {
      $('#message').text('This cell has already been played!')
    } else {
      store.clicked = e.target
      // store.clicked.id for cell #
      store.player = currentPlayer()
      const cell = e.target.id
      store.played.push(cell)
      const index = (cell - 1)
      const value = store.player
      const data = {
        'game': {
          'cell': {
            'index': `${index}`,
            'value': `${value}`
          },
          'over': `${store.game.over}`
        }
      }
      api.placePiece(data)
        .then(ui.piecePlaced)
        .catch(ui.pieceFail)
    }
  }
}
const onListGame = function (e) {
  e.preventDefault()
  api.listGame()
    .then(ui.listGameSuccess)
    .catch(ui.listGameFail)
}
const handler = function () {
  $('#ticTac > div').on('click', onPlacePiece)
  $('#new-game-shell').on('click', onNewGame)
  $('#game-list-shell').on('click', onListGame)
}

module.exports = {
  handler
}
