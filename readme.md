[![ci](https://github.com/Balou9/bcg-coding-challenge/workflows/ci/badge.svg)](https://github.com/Balou9/bcg-coding-challenge/actions)


# bcg-coding-challenge

I have build an API with a single endpoint that performs a
checkout action. The single endpoint should take a list of watches and return the total cost.

# usage
## setup
open a console and type in the following
```
git clone https://github.com/Balou9/bcg-coding-challenge.git  
cd extermitators-api && npm i  
```
open another console and type in the following

```
serverless offline
```

## send request to localhost
curl request from another console


```
curl -s \
  -X POST \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"watchList":["001","001","001","001","001","001","002","002","002","003"]}' \
  http://localhost:8080/dev/checkout/
```

# test
npm unit tests  

bash integration tests

# improvements // to do's

- [ ] deploy endpoint on stage
- [ ] add cd to the pipeline
- [ ] `calctotalPrice` to async
