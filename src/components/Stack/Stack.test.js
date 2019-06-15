import React from 'react'
import { render } from 'utils/test-utils'

import Stack from './Stack'

jest.mock('./data/tools', () => [
  {
    name: 'React',
    logo: './media/react.svg',
    tags: ['Toolkit'],
    url: 'https://reactjs.org/',
  },
  {
    name: 'Slack',
    logo: './media/slack.svg',
    tags: ['Business Tools'],
    url: 'https://slack.com',
  },
  {
    name: 'Trello',
    logo: './media/trello.svg',
    tags: ['Business Tools'],
    url: 'https://trello.com',
  },
  {
    name: 'Kafka',
    logo: './media/kafka.svg',
    tags: ['Data'],
    url: 'https://kafka.apache.org/',
  },
  {
    name: 'CI/CD',
    logo: './media/ci-cd.svg',
    tags: ['Infrastructure'],
    url: 'https://en.wikipedia.org/wiki/CI/CD',
  },
])

test('renders the heading', () => {
  const { getByText } = render(<Stack />)

  getByText(/the stack/i)
})

test('tag groups are in the expected order', () => {
  const { queryAllByTestId } = render(<Stack />)

  const expectTagGroupOrder = [
    'Toolkit',
    'Data',
    'Infrastructure',
    'Business Tools',
  ]

  const toolGroups = queryAllByTestId('tool-group')
  expect(toolGroups.length).toBe(expectTagGroupOrder.length)
  toolGroups.forEach((toolGroup, index) => {
    expect(toolGroup).toHaveTextContent(expectTagGroupOrder[index])
  })
})

test('sets the title', () => {
  render(<Stack />)

  expect(document.title).toBe('The Stack | Jonathan Davis')
})
