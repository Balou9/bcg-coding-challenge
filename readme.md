[![ci](https://github.com/Balou9/bcg-coding-challenge/workflows/ci/badge.svg)](https://github.com/Balou9/bcg-coding-challenge/actions)

# bcg-coding-challenge
I have build an API with a single endpoint that performs a
checkout action. The single endpoint should take a list of watch ids and return the total cost.

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

## send post request to localhost
send [sample curl request](https://github.com/Balou9/bcg-coding-challenge/blob/main/extermitators-api/sample.sh) from another console

```
curl -s \
  -X POST \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{"watchList":["001","001","001","001","001","001","002","002","002","003"]}' \
  http://localhost:8080/dev/checkout
```

# test
The unit tests are defined in [test.js](https://github.com/Balou9/bcg-coding-challenge/blob/main/extermitators-api/test.js) and [will be runned any time a push is made to the repo](https://github.com/Balou9/bcg-coding-challenge/blob/main/.github/workflows/ci.yml).


Run tests locally in api directory:
```
npm test
```

# improvements // to do's

- [ ] deploy endpoint to stage
- [ ] add cd to the pipeline
- [ ] `calctotalPrice` to async
