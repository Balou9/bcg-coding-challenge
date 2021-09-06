const tape = require("tape")
const calctotalPrice = require("./calc")
const sampleRequestObject1 = [ "001", "002", "001", "004", "003"]
const sampleRequestObject2 = [ "002", "002", "001", "004", "003"]
const sampleRequestObject3 = [ "001", "002", "001", "001", "002", "001", "002"]

tape("Calculates the total cost", (t) => {
  const totalCost1 = calctotalPrice(sampleRequestObject1)
  t.equal(totalCost1, 360)
  t.end()
})

tape("Calculates the total cost with discount", (t) => {
  const totalCost2 = calctotalPrice(sampleRequestObject2)
  const totalCost3 = calctotalPrice(sampleRequestObject3)
  t.equal(totalCost2, 300)
  t.equal(totalCost3, 500)
  t.end()
})
