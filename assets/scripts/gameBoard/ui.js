'use strict'
const store = require('./../store.js')
const game = require('./game.js')

const newGameSuccess = function (data) {
  store.game = data.game
  store.played = []
  $('#ticTac').show()
  game.clearBoard()
  $('#ticTac').show()
  $('#history').hide()
}
const newGameFail = function () {
  console.log('It borked')
}
const piecePlaced = function (response) {
  store.game = response.game
  $(store.clicked).text(store.player)
  if (store.player === 'X') {
    $('#message').text('It\'s O\'s Turn!')
  } else {
    $('#message').text('It\'s X\'s Turn!')
  }
  game.checkWin()
  if (store.played.length === 9 && !store.game.over) {
    $('#message').text(`Too bad, It's a draw.`)
  } else if (store.game.over) {
    const winner = $(`div#${store.played[store.played.length - 1]}`).text()
    $('#message').text(`${winner} is the Winner!`)
  }
}
const pieceFail = function () {
  $('#message').text('There was an error.')
}
const listGameSuccess = function (response) {
  $('#ticTac').hide()
  $('#history').show()
  $('#games').html('')
  response.games.slice(-30).forEach((game) => {
    const historyHTML = `
      <p>ID: ${game.id} - Cells: ${game.cells}</p>
    `
    $('#games').append(historyHTML)
  })
  if (response.games.length < 1) {
    $('#message').text('You haven\'t played any games!')
  }
}
const listGameFail = function () {
  $('#message').text('There was an error')
}
module.exports = {
  newGameSuccess,
  newGameFail,
  piecePlaced,
  pieceFail,
  listGameSuccess,
  listGameFail
}
