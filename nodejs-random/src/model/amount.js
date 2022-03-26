const DEFAULT_CURRENCY = 'EUR'

class Amount {
  constructor(amount = '', numberOfDecimals = 2, currency = DEFAULT_CURRENCY) {
    this.amount = amount
    this.numberOfDecimals = numberOfDecimals
    this.currency = currency
  }

  getAmount = () => {
    return (+this.amount / Math.pow(10, this.numberOfDecimals)).toFixed(this.numberOfDecimals).toString()
  }
}

const fromAmountAndCurrency = (amount='0.00', currency=DEFAULT_CURRENCY) => {
  const numberOfDecimals = amount.length - amount.indexOf('.') -1
  const amountValue = amount.replace('.', '')
  return new Amount(amountValue, numberOfDecimals, currency)
}

module.exports = {
  Amount,
  fromAmountAndCurrency
}
