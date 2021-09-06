const tape = require("tape")
const calcTotalPrice = require("./calc")
const sampleRequestObject1 = [ "001", "002", "001", "004", "003"]
const sampleRequestObject2 = [ "002", "002", "001", "004", "003"]
const sampleRequestObject3 = [ "001", "002", "001", "001", "002", "001", "002"]

tape("Calculates the total price", (t) => {
  const totalPrice1 = calcTotalPrice(sampleRequestObject1)
  t.equal(totalPrice1, 360, "should equal 360")
  t.end()
})

tape("Calculates the total price with discount", (t) => {
  const totalPrice2 = calcTotalPrice(sampleRequestObject2)
  const totalPrice3 = calcTotalPrice(sampleRequestObject3)
  t.equal(totalPrice2, 300, "should equal 300")
  t.equal(totalPrice3, 500, "should equal 500")
  t.end()
})
