'use strict'
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('./../store.js')

let player

const currentPlayer = function () {
  if (store.x) {
    player = 'X'
  } else {
    player = 'O'
  }
  store.x = !store.x
  return player
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
  $('div.box').on('click', onPlacePiece)
  $('#new-game-shell').on('click', onNewGame)
  $('#game-list-shell').on('click', onListGame)
}

module.exports = {
  handler
}
