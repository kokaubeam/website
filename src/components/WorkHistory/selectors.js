import { createSelector } from 'reselect'
import moment from 'moment'

export const workHistorySelector = state => state.workHistory

export const workHistoryOrderByStartSelector = createSelector(
  workHistorySelector,
  workHistory => {
    const unsortedWorkHistory = [...workHistory]
    unsortedWorkHistory.sort((a, b) => b.start - a.start)

    return unsortedWorkHistory
  }
)

export const workHistoryYearsOfExperienceSelector = createSelector(
  workHistoryOrderByStartSelector,
  workHistory => {
    if (workHistory.length === 0) {
      return 0
    }

    const oldestHistory = workHistory[workHistory.length - 1]

    return moment().diff(oldestHistory.start, 'years', false)
  }
)
