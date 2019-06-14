import React, { useEffect } from 'react'
import ToolList from './components/ToolList'
import tools from './data/tools'
import { Container, Heading, ToolGroup, ToolGroupHeading } from './styles'

const tagGroupSortOrder = [
  'Toolkit',
  'Data',
  'Infrastructure',
  'Business Tools',
]

const toolsGroupedByTag = tools.reduce((toolsGroupedByTag, tool) => {
  tool.tags.forEach(tag => {
    if (toolsGroupedByTag[tag]) {
      toolsGroupedByTag[tag].push(tool)
    } else {
      toolsGroupedByTag[tag] = [tool]
    }
  })

  return toolsGroupedByTag
}, {})

const toolGroups = tagGroupSortOrder.reduce((toolGroups, tag) => {
  if (toolsGroupedByTag[tag]) {
    toolGroups.push({
      name: tag,
      tools: toolsGroupedByTag[tag],
    })
  }

  return toolGroups
}, [])

export default () => {
  useEffect(() => {
    document.title = 'The Stack | Jonathan Davis'
  })

  return (
    <Container data-testid='stack'>
      <Heading>The Stack</Heading>

      {toolGroups.map(stackToolGroup => (
        <ToolGroup key={stackToolGroup.name} data-testid='tool-group'>
          <ToolGroupHeading>{stackToolGroup.name}</ToolGroupHeading>
          <ToolList tools={stackToolGroup.tools} />
        </ToolGroup>
      ))}
    </Container>
  )
}
