resp_body="$(mktemp)"

curl -s \
  -X POST \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{"watchList":["001","001","001","001","001","001","002","002","002","003"]}' \
  http://localhost:8080/checkout \
> "$resp_body"

cat "$resp_body"
