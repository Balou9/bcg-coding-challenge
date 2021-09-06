resp_body="$(mktemp)"

curl -s \
  -X POST \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"watchList":["001","001","001","001","001","001","002","002","002","003"]}' \
  http://localhost:8080/dev/checkout \
> "$resp_body"

cat "$resp_body"
