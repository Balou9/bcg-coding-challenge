[![ci](https://github.com/Balou9/bcg-coding-challenge/workflows/ci/badge.svg)](https://github.com/Balou9/bcg-coding-challenge/actions)

# bcg-coding-challenge
I have build an API with a single endpoint that performs a
checkout action. The single endpoint takes a list of watch ids and returns the total cost. In terms of programming language & framework, i am working with node.js and serverless.

# usage
## setup
Open a console and type in the following
```
git clone https://github.com/Balou9/bcg-coding-challenge.git  
cd extermitators-api && npm i  
```
Open another console and type in the following

```
serverless offline start --noPrependStageInUrl
```

## send post request to localhost
Send a [sample curl request](https://github.com/Balou9/bcg-coding-challenge/blob/main/extermitators-api/sample.sh) from another console

```
curl -s \
  -X POST \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{"watchList":["001","001","001","001","001","001","002","002","002","003"]}' \
  http://localhost:8080/checkout
```

# test
The unit tests are defined in [test.js](https://github.com/Balou9/bcg-coding-challenge/blob/main/extermitators-api/test.js) and [will be runned any time a push is made to the repo](https://github.com/Balou9/bcg-coding-challenge/blob/main/.github/workflows/ci.yml#L3).


Run tests locally in api directory:
```
npm test
```

# improvements // to do's

- [ ] add cd to the pipeline
- [ ] `calctotalPrice` to async
