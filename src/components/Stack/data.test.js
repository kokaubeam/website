import data from './data'

describe('Stack data', () => {
  it('should export an object', () => {
    expect(data).toMatchObject({
      tools: expect.any(Array)
    })
  })

  it('should contain tools', () => {
    expect(data.tools.length).toBeGreaterThan(0)
  })

  it('should have the required attributes on each tool', () => {
    data.tools.forEach(tool => {
      expect(tool).toMatchObject({
        name: expect.any(String),
        logo: expect.any(String),
        url: expect.any(String),
        tags: expect.any(Array)
      })
    })
  })
})
