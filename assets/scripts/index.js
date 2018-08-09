'use strict'
const ticTac = require('./gameBoard.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#ticTac').on('click', ticTac.ticTacBoard)
  // $('#books-list').on('submit', events.onListBook)
  // $('#books-show').on('submit', events.onShowBook)
  // $('#books-destroy').on('submit', events.onDestroyBook)
  // $('#books-create').on('submit', events.onCreateBook)
  // $('#books-patch').on('submit', events.onPatchBook)
})
