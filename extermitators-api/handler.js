const calcTotalPrice = require("./calc")

module.exports.checkout = async (event) => {
  const parsedBody = JSON.parse(event.body)

  try {
    const totalPrice = calcTotalPrice(parsedBody.watchList)
    return JSON.stringify({price: totalPrice})
  } catch (e) {
    return e
  }
}
