import experience from './experience'

test('export an array', () => {
  expect(experience).toBeInstanceOf(Array)
})

test('contains data', () => {
  expect(experience.length).toBeGreaterThan(0)
})

test('contains all required attributes for each experience item', () => {
  experience.forEach(history => {
    expect(history).toMatchObject({
      name: expect.any(String),
      position: expect.any(String),
      description: expect.any(String),
      logo: expect.any(String),
      start: expect.any(Date),
      end: expect.any(Date),
    })
  })
})
