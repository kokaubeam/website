import {
  workHistorySelector,
  workHistoryOrderByStartSelector
} from './selectors'

describe('WorkHistory selectors', () => {
  const mockState = {
    workHistory: [{
      name: 'Aperture Science',
      position: 'Test Subject',
      description: 'Ate cake and tested Aperature Science products.',
      logo: './media/aperture-science.svg',
      start: new Date('Jun 1, 1940'),
      end: new Date('Aug 1, 1998')
    }, {
      name: 'Black Mesa',
      position: 'Level 3 Research Associate Scientist',
      description: 'Defended the human race against hostile aliens. Lead an uprising against alien invaders.',
      logo: './media/black-mesa.svg',
      start: new Date('May 1, 2000'),
      end: new Date('May 16, 2005')
    }]
  }

  describe('#workHistorySelector', () => {
    let result

    beforeAll(() => {
      result = workHistorySelector(mockState)
    })

    it('should return the stack', () => {
      expect(result).toBe(mockState.workHistory)
    })
  })

  describe('#workHistoryOrderByStartSelector', () => {
    let result

    beforeAll(() => {
      result = workHistoryOrderByStartSelector(mockState)
    })

    it('should return the stack sorted by start date', () => {
      expect(result).toEqual([{
        name: 'Black Mesa',
        position: 'Level 3 Research Associate Scientist',
        description: 'Defended the human race against hostile aliens. Lead an uprising against alien invaders.',
        logo: './media/black-mesa.svg',
        start: new Date('May 1, 2000'),
        end: new Date('May 16, 2005')
      }, {
        name: 'Aperture Science',
        position: 'Test Subject',
        description: 'Ate cake and tested Aperature Science products.',
        logo: './media/aperture-science.svg',
        start: new Date('Jun 1, 1940'),
        end: new Date('Aug 1, 1998')
      }])
    })
  })
})