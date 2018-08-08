# Delivery Notes

## CRUD a Resource

### Code along: (R)EAD resource collection
- browser
- curl
- AJAX
  - For this first code along, complete the whole feature in the `index.js` first.  That way they can see the entire flow from click handler, to api call, and response.  After they have that working, then refactor to `events.js`, `api.js` and `ui.js`

### Code along: (R)EAD specific resource
- browser
- curl
- AJAX
  - Do not build the entire feature in in the `index.js`. Follow the pattern you created with `events.js`, `api.js` and `ui.js`.
  - Introduce `getFormFields`, diagram the `name='object[property]'` and the `{}` it creates as shown in [this whiteboard diagram](https://git.generalassemb.ly/storage/user/3667/files/2f6c4f8a-9f9d-11e7-8a08-7331706dbc13)

### Lab: (D)ELETE specific resource
- browser(?)
  - Highlight how we can not test DELETE from browser
- curl
- AJAX
  - Assigning numbers for `DELETE` and `PATCH` at this point in the sequence, developers should be assigned a range of ids of books that they can modify. This ensures that no two people are trying to delete / update the same records
  - There are currently `168` books in the db
  - assign range by dividing `168/<number_of_devs>`

### Code along: (U)PDATE specific resource
- browser(?)
  - Highlight how we can not test UPDATE from browser
- curl
- AJAX
  - Highlight how we pass data to an AJAX call

### Lab: (C)REATE new resource
- browser(?)
  - Highlight how we can not test CREATE from browser
- curl
- AJAX

## Methodical Steps for AJAX
![Methodical Steps](https://git.generalassemb.ly/storage/user/3667/files/a949163c-39ac-11e7-98e4-36bb118f04df)

## If a developer is absent or falls behind

`git checkout -b <new branch name> <sha>`
to checkout a new branch from a certain commit with whatever name you want. So if a dev didn't manage to finish delete, we have them run `git checkout -b update <sha for commit #3>` and then they've got a branch called `update` which has delete all done, so they're ready to go with update.
