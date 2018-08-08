'use strict'
const api = require('./api.js')
const ui = require('./ui.js')
const fields = require('./../../../lib/get-form-fields.js')

const onListBook = (event) => {
  event.preventDefault()
  api.list()
    .then(ui.onListSuccess)
    .catch(ui.onFailure)
}
const onShowBook = (event) => {
  event.preventDefault()
  const data = fields(event.target)
  api.show(data)
    .then(ui.onShowSuccess)
    .catch(ui.onFailure)
}
const onDestroyBook = (event) => {
  event.preventDefault()
  const data = fields(event.target)
  api.destroy(data)
    .then(ui.onDestroySuccess)
    .catch(ui.onFailure)
}
const onCreateBook = (event) => {
  event.preventDefault()
  const data = fields(event.target)
  api.create(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onFailure)
}
const onPatchBook = (event) => {
  event.preventDefault()
  const data = fields(event.target)
  api.patch(data)
    .then(ui.onPatchSuccess)
    .catch(ui.onFailure)
}

module.exports = {
  onListBook,
  onShowBook,
  onDestroyBook,
  onCreateBook,
  onPatchBook
}
