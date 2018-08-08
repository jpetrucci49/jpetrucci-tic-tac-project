'use strict'

const list = () => {
  return $.ajax({
    method: 'GET',
    url: 'https://wdi-library-api.herokuapp.com/books'
  })
}
const show = (data) => {
  return $.ajax({
    method: 'GET',
    url: 'https://wdi-library-api.herokuapp.com/books/' + data.book.id
  })
}
const destroy = (data) => {
  return $.ajax({
    method: 'DELETE',
    url: 'https://wdi-library-api.herokuapp.com/books/' + data.book.id
  })
}
const create = (data) => {
  return $.ajax({
    method: 'POST',
    url: 'https://wdi-library-api.herokuapp.com/books/',
    data
  })
}
const patch = (data) => {
  return $.ajax({
    method: 'PATCH',
    url: 'https://wdi-library-api.herokuapp.com/books/' + data.book.id,
    data
  })
}

module.exports = {
  list,
  show,
  destroy,
  create,
  patch
}
