import { createSelector } from 'reselect'
import moment from 'moment'

export const experienceSelector = state => state.experience

export const experienceOrderByStartSelector = createSelector(
  experienceSelector,
  experience => {
    const unsortedExperience = [...experience]
    unsortedExperience.sort((a, b) => b.start - a.start)

    return unsortedExperience
  }
)

export const experienceYearsOfExperienceSelector = createSelector(
  experienceOrderByStartSelector,
  experience => {
    if (experience.length === 0) {
      return 0
    }

    const oldestHistory = experience[experience.length - 1]

    return moment().diff(oldestHistory.start, 'years', false)
  }
)
