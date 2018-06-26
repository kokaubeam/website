import { createSelector } from 'reselect'

export const workHistorySelector = state => state.workHistory

export const workHistoryOrderByStartSelector = createSelector(
  workHistorySelector,
  workHistory => {
    const unsortedWorkHistory = [...workHistory]
    unsortedWorkHistory.sort((a, b) => b.start - a.start)

    return unsortedWorkHistory
  }
)
