import React from 'react'
import { render } from 'utils/test-utils'

import ToolList from './ToolList'

const mockTools = [
  {
    name: 'Tool 1',
    url: 'https://tool-1.puppies',
    logo: './media/tool-1.svg',
    tags: ['Toolkit'],
  },
  {
    name: 'Tool 2',
    url: 'https://tool-2.io',
    logo: './media/tool-2.svg',
    tags: ['Toolkit'],
  },
]

test('renders each tool', () => {
  const { getByText } = render(<ToolList tools={mockTools} />)

  mockTools.forEach(tool => {
    getByText(tool.name)
  })
})

test('renders each tool', () => {
  const { getByText } = render(<ToolList tools={mockTools} />)

  mockTools.forEach(tool => {
    getByText(tool.name)
  })
})
