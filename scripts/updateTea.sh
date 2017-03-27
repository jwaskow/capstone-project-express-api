
#!/bin/bash

API="http://localhost:4741"
URL_PATH="/teas"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "tea": {
      "name": "'"${NAME}"'",
      "type": "'"${TYPE}"'",
      "steepTime": "'"${STEEPTIME}"'",
      "description": "'"${DESCRIPTION}"'"
    }
  }'

echo
