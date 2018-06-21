import data from './data'

describe('Stack data', () => {
  it('should export an array', () => {
    expect(data).toBeInstanceOf(Array)
  })

  it('should contain data', () => {
    expect(data.length).toBeGreaterThan(0)
  })

  it('should contain all required attributes on the Stacks', () => {
    data.forEach(stack => {
      expect(stack).toMatchObject({
        name: expect.any(String),
        tools: expect.any(Array)
      })
    })
  })

  it('should contain all the required attributes on the Tools', () => {
    data.forEach(stack => stack.tools.forEach(tool => {
      expect(tool).toMatchObject({
        name: expect.any(String),
        logo: expect.any(String)
      })
    }))
  })
})
