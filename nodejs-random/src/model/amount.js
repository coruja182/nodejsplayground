class Amount {
  constructor(amount = '', numberOfDecimals = 2, currency = 'EUR') {
    this.amount = amount
    this.numberOfDecimals = numberOfDecimals
    this.currency = currency
  }

  getAmount = () => {
    return (+this.amount / Math.pow(10, this.numberOfDecimals)).toFixed(this.numberOfDecimals).toString()
  }
}

module.exports = {
  Amount
}
