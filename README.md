[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# jQuery AJAX CRUD

## Prerequisites

-   [http-study](https://git.generalassemb.ly/ga-wdi-boston/http-study)
-   [json-study](https://git.generalassemb.ly/ga-wdi-boston/json-study)

## Objectives

By the end of this, developers should be able to:

- Make HTTP requests to an API using `curl` and AJAX to:
  -  (R)EAD resource collection.
  -  (R)EAD specific resource.
  -  (D)ELETE specific resource.
  -  (U)PDATE specific resource.
  -  (C)REATE new resource.
- Use response data in future requests.

## Preparation

1.  Fork and clone this repository.
 [FAQ](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone)
1.  Create a new branch, `training`, for your work.
1.  Checkout to the `training` branch.
1.  Install dependencies with `npm install`.

## Library API

| Verb   | URI Pattern  | Result |
|:-------|:-------------|:------------------|
| GET    | `/books`     | read list of books|
| GET    | `/books/:id` | read single book  |
| POST   | `/books`     | create book       |
| PATCH  | `/books/:id` | update book       |
| DELETE | `/books/:id` | destroy book      |

We'll make requests to and receive responses from an HTTP server hosted at https://wdi-library-api.herokuapp.com.

If not already installed in chrome, let's add a [JSON formatting utility](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en).  Go to https://wdi-library-api.herokuapp.com/books to read the list of books.

## Methodical Approach
1.  Test API in browser (if possible)
1.  Test API with curl script
1.  Add feature to web application with AJAX
    1.  Add a form to `index.html`.
    1.  Add a input fields and submit input to the form.
    1.  Add an event listener to the form in the document ready event in
 `assets/scripts/index.js`.
    1.  Add a submit handler to pass as callback to event listener
  `assets/scripts/books/events.js`.
    1.  Add a API call in `assets/scripts/books/api.js`.
    1.  Add a success and failure handler in `assets/scripts/books/ui.js`.

### How to use `getFormFields`

To be able to fetch data for just one book, we'll need a way to tell the API
which book we're looking for. One way to do this is to have the user input the
ID of the book they're looking for. It turns out that needing to grab some user
input and send it to the API is a very common problem in front-end web
development.

To help solve that problem, we've included a function called `getFormFields` in
the template that we use for our lessons, which is also the template you'll use
for your projects. Let's take a look at how to use that function.

First, your `<input>`s will need to be wrapped in a `<form>`, like this:

```html
<form id="my-form">
  <input name="book[id]" type="text">
  <input name="book[name]" type="text">
  <button type="submit">Get Book</button>
</form>
```
Then, in your Javascript, you'd do something like this:

```js
const getFormFields = require('<path to lib>/get-form-fields.js')

$('#my-form').on('submit', function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
})
```

Then, the `data` variable would look like this:

```js
{
  book: {
    id: "<whatever was entered in the ID input >",
    name: "<whatever was entered in the name input>"
  }
}
```

**Note:** In this training, and in your projects, you'll spread the above Javascript across a couple different files to keep everything organized.

## CRUD a Book

### Code along: (R)EAD books collection
- browser
- curl
- AJAX

### Code along: (R)EAD specific book
- browser
- curl
- AJAX

### Lab: (D)ELETE specific book
- browser(?)
- curl
- AJAX

### Code along: (U)PDATE specific book
- browser(?)
- curl
- AJAX

### Lab: (C)REATE new book
- browser(?)
- curl
- AJAX

### Demo: UX
- Input Validation: Javascript
- Input Validation: HTML5
- Clearing Forms

## Additional Resources
-   [Learn jQuery AJAX](https://learn.jquery.com/ajax/jquery-ajax-methods/)
-   [jQuery AJAX Docs](http://api.jquery.com/jquery.ajax/)

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
