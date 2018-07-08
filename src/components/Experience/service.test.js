import data from './data'

import * as service from './service'

describe('Experience service', () => {
  describe('#getExperience', () => {
    let stacks

    beforeAll(async () => {
      stacks = await service.getExperience()
    })

    it('should return the work history data', () => {
      expect(stacks).toBe(data)
    })
  })
})
