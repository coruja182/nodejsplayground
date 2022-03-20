const { Amount } = require('./amount')

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
  })
})
