import React from 'react'
import { render } from 'utils/test-utils'
import { axe } from 'jest-axe'

import ToolLink from './ToolLink'

const mockTool = {
  name: 'Tool 1',
  url: 'https://tool-1.puppies',
  logo: './media/tool-1.svg',
}

test('content is accessible', async () => {
  const { container } = render(<ToolLink tool={mockTool} />)
  const results = await axe(container.innerHTML)

  expect(results).toHaveNoViolations()
})

test('renders the name', () => {
  const { getByText } = render(<ToolLink tool={mockTool} />)

  getByText(mockTool.name)
})

test('renders the logo', () => {
  const { getByAltText } = render(<ToolLink tool={mockTool} />)

  const logo = getByAltText(mockTool.name)
  expect(logo).toHaveAttribute('src', mockTool.logo)
})

test("links to the tool's website", () => {
  const { getByTestId } = render(<ToolLink tool={mockTool} />)

  const toolLink = getByTestId('tool-link')

  expect(toolLink).toHaveAttribute('href', mockTool.url)
  expect(toolLink).toHaveAttribute('target', '_blank')
})
