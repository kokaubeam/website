import { createSelector } from 'reselect'

export const stackSelector = state => state.stack

export const stackGroupedByTagSelector = createSelector(
  stackSelector,
  stack => stack.tools.reduce((groups, tool) => {
    tool.tags.forEach(tag => {
      if (groups[tag]) {
        groups[tag].push(tool)
      } else {
        groups[tag] = [tool]
      }
    })

    return groups
  }, {})
)

export const stackOrderedGroupedByTagSelector = createSelector(
  stackSelector,
  stackGroupedByTagSelector,
  (stack, stackGroups) => stack.tagSortOrder.reduce((orderedGroups, tag) => {
    if (stackGroups[tag]) {
      orderedGroups.push({
        name: tag,
        tools: stackGroups[tag]
      })
    }

    return orderedGroups
  }, [])
)
