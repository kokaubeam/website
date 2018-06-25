import data from './data'

import * as service from './service'

describe('Stack service', () => {
  describe('#getStack', () => {
    let stacks

    beforeAll(async () => {
      stacks = await service.getStack()
    })

    it('should return the stack data', () => {
      expect(stacks).toBe(data)
    })
  })
})
