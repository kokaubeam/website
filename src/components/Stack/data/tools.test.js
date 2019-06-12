import tools from './tools'

test('exports an array', () => {
  expect(tools).toBeInstanceOf(Array)
})

test('contain data', () => {
  expect(tools.length).toBeGreaterThan(0)
})

test('contains the required attributes on each tool', () => {
  tools.forEach(tool => {
    expect(tool).toMatchObject({
      name: expect.any(String),
      logo: expect.any(String),
      url: expect.any(String),
      tags: expect.any(Array),
    })
  })
})
