const { any } = require('expect')
const { Amount, fromAmountAndCurrency } = require('./amount')

describe('The Amount Class', () => {
  it('should be defined when instantiated', () => {
    const subject = new Amount('100', 2, 'USD')
    expect(subject).toBeDefined()
    expect(subject.amount).toEqual('100')
    expect(subject.numberOfDecimals).toEqual(2)
    expect(subject.currency).toEqual('USD')
  })

  describe('The getAmount function', () => {
    it('should return the amount using decimals', () => {
      const subject = new Amount('100', 2, 'USD')
      const amount = subject.getAmount()
      expect(amount).toEqual('1.00')
    })

    it('when an amount is not specified and 2 decimal places are used, it should use 0.00', () => {
      const subject = new Amount('', 2, 'USD')
      const amount = subject.getAmount()
      expect(amount).toEqual('0.00')
    })

    it('shoud handle decimal places longer than the amount', () => {
      const subject = new Amount('1', 2, 'USD')
      const amount = subject.getAmount()
      expect(amount).toEqual('0.01')
    })
  })

  describe('The fromAmountAndCurrency', () => {
    it('should return an Amount instance from the amount with 2 decimal places and set currency to EUR when not provided', () => {
      const subject = fromAmountAndCurrency('1.23')
      expect(subject).toEqual({
        amount: '123',
        numberOfDecimals: 2,
        currency: 'EUR',
        getAmount: expect.any(Function)
      })
    })

    it('should return an Amount instance from the amount with 3 decimal places', () => {
      const subject = fromAmountAndCurrency('1.234', 'USD')
      expect(subject).toEqual({
        amount: '1234',
        numberOfDecimals: 3,
        currency: 'USD',
        getAmount: any(Function)
      })
    })
  })
})
