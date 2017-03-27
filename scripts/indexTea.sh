#!/bin/bash

API="http://localhost:4741"
URL_PATH="/teas"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}"

echo
