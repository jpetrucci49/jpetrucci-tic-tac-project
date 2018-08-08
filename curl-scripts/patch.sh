curl --include --request PATCH "https://wdi-library-api.herokuapp.com/books/${ID}" \
  --header "Content-type: application/json" \
  --data '{
    "book": {
      "title": "'"${TITLE}"'",
      "author": "'"${AUTHOR}"'"
    }
  }'

echo
