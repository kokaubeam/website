import data from './data'

describe('Experience data', () => {
  it('should export an array', () => {
    expect(data).toBeInstanceOf(Array)
  })

  it('should contain data', () => {
    expect(data.length).toBeGreaterThan(0)
  })

  it('should contain all required attributes for each work history item', () => {
    data.forEach(history => {
      expect(history).toMatchObject({
        name: expect.any(String),
        position: expect.any(String),
        description: expect.any(String),
        logo: expect.any(String),
        start: expect.any(Date),
        end: expect.any(Date)
      })
    })
  })
})
