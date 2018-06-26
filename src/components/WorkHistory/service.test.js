import data from './data'

import * as service from './service'

describe('WorkHistory service', () => {
  describe('#getWorkHistory', () => {
    let stacks

    beforeAll(async () => {
      stacks = await service.getWorkHistory()
    })

    it('should return the work history data', () => {
      expect(stacks).toBe(data)
    })
  })
})
