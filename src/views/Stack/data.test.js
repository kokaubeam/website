import data from './data'

describe('Stack data', () => {
  it('should export an array', () => {
    expect(data).toBeInstanceOf(Array)
  })

  it('should contain data', () => {
    expect(data.length).toBeGreaterThan(0)
  })

  it('should contain all required attributes on each stack', () => {
    data.forEach(stack => {
      expect(stack).toMatchObject({
        name: expect.any(String),
        items: expect.any(Array)
      })
    })
  })

  it('should contain all the required attributes on each stack item', () => {
    data.forEach(stack => stack.items.forEach(item => {
      expect(item).toMatchObject({
        name: expect.any(String),
        logo: expect.any(String)
      })
    }))
  })
})
