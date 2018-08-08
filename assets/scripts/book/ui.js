'use strict'

const onListSuccess = (response) => {
  $('#books').html('')
  response.books.forEach((book) => {
    const bookHTML = `
      <h4>${book.title}</h4>
      <p>${book.author}</p>
      <p>${book.id}</p>
    `
    $('#books').append(bookHTML)
  })
}
const onShowSuccess = (response) => {
  const book = response.book
  const bookHTML = `
    <h4>${book.title}</h4>
    <p>${book.author}</p>
    <p>${book.id}</p>
  `
  $('#books').html(bookHTML)
}
const onDestroySuccess = (response) => {
  $('#books').html('<h4>Book Deleted</h4>')
}
const onCreateSuccess = (response) => {
  const book = response.book
  const bookHTML = `
    <h4>${book.title}</h4>
    <p>${book.author}</p>
    <p>${book.id}</p>
    <h4>Created</h4>
  `
  $('#books').html(bookHTML)
}
const onPatchSuccess = (response) => {
  const book = response.book
  const bookHTML = `
    <h4>${book.title}</h4>
    <p>${book.author}</p>
    <p>${book.id}</p>
    <h4>Book Updated</h4>
  `
  $('#books').html(bookHTML)
}
const onFailure = (response) => {
  $('#books').html(`<h4>Sorry, it failed</h4>`)
}

module.exports = {
  onListSuccess,
  onShowSuccess,
  onDestroySuccess,
  onCreateSuccess,
  onPatchSuccess,
  onFailure
}
