import {
  stackSelector,
  stackGroupedByTagSelector,
  stackOrderedGroupedByTagSelector
} from './selectors'

describe('Stack selectors', () => {
  const state = {
    stack: {
      tagSortOrder: ['Toolkit', 'Data', 'Infrastructure', 'Business Tools'],
      tools: [{
        name: 'Slack',
        logo: './media/slack.svg',
        tags: ['Business Tools']
      }, {
        name: 'Trello',
        logo: './media/trello.svg',
        tags: ['Business Tools']
      }, {
        name: 'Kafka',
        logo: './media/kafka.svg',
        tags: ['Data']
      }, {
        name: 'CI/CD',
        logo: './media/ci-cd.svg',
        tags: ['Infrastructure']
      }]
    }
  }

  describe('#stackSelector', () => {
    let result

    beforeAll(() => {
      result = stackSelector(state)
    })

    it('should return the stack', () => {
      expect(result).toBe(state.stack)
    })
  })

  describe('#stackGroupedByTagSelector', () => {
    let result

    beforeAll(() => {
      result = stackGroupedByTagSelector(state)
    })

    it('should return the stack grouped by tag', () => {
      expect(result).toEqual({
        'Business Tools': [{
          name: 'Slack',
          logo: './media/slack.svg',
          tags: ['Business Tools']
        }, {
          name: 'Trello',
          logo: './media/trello.svg',
          tags: ['Business Tools']
        }],
        'Data': [{
          name: 'Kafka',
          logo: './media/kafka.svg',
          tags: ['Data']
        }],
        'Infrastructure': [{
          name: 'CI/CD',
          logo: './media/ci-cd.svg',
          tags: ['Infrastructure']
        }]
      })
    })
  })

  describe('#stackOrderedGroupedByTagSelector', () => {
    let result

    beforeAll(() => {
      result = stackOrderedGroupedByTagSelector(state)
    })

    it('should return the stack grouped by tag', () => {
      expect(result).toEqual([{
        name: 'Data',
        tools: [{
          name: 'Kafka',
          logo: './media/kafka.svg',
          tags: ['Data']
        }]
      }, {
        name: 'Infrastructure',
        tools: [{
          name: 'CI/CD',
          logo: './media/ci-cd.svg',
          tags: ['Infrastructure']
        }]
      }, {
        name: 'Business Tools',
        tools: [{
          name: 'Slack',
          logo: './media/slack.svg',
          tags: ['Business Tools']
        }, {
          name: 'Trello',
          logo: './media/trello.svg',
          tags: ['Business Tools']
        }]
      }])
    })
  })
})
