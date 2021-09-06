const watchStore = require("./watch.json")

function occurences (requiredWatches) {
  return requiredWatches.reduce(function (acc, curr) {
    acc[curr] == undefined ? acc[curr] = 1 : acc[curr] += 1
    return acc
  }, {});
}

function calcTotalPrice (watches) {
  let totalPrice = 0
  const occ = occurences(watches)
  for (const key in occ) {
    let remainder = 0
    let discountUnits = 0
    if ((watchStore[key].discount != null ) && (occ[key] >= watchStore[key].discount.on)) {
      remainder = occ[key] % watchStore[key].discount.on
      discountUnits = (occ[key] - remainder) / watchStore[key].discount.on
      totalPrice += discountUnits * watchStore[key].discount.amount + remainder * watchStore[key].unitPrice
    } else {
      totalPrice += watchStore[key].unitPrice * occ[key]
    }
  }
  return totalPrice
}

module.exports = calcTotalPrice
