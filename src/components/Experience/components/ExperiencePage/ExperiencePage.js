import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Page from '../../../Page'
import ExperienceItem from '../ExperienceItem'
import Bio from '../../../Bio'
import {
  experienceOrderByStartSelector,
  experienceYearsOfExperienceSelector
} from '../../selectors'
import { requestExperience } from '../../actions'
import './ExperiencePage.css'

export class ExperiencePage extends Component {
  static propTypes = {
    experience: PropTypes.array.isRequired,
    getExperience: PropTypes.func.isRequired,
    yearsOfExperience: PropTypes.number.isRequired
  }

  componentDidMount() {
    const { getExperience } = this.props
    getExperience()
  }

  render() {
    const { experience, yearsOfExperience } = this.props

    return (
      <Page className="ExperiencePage">
        <aside>
          <Bio />
        </aside>
        <main>
          <h1>{yearsOfExperience} Years of Professional Experience</h1>

          <ul className="ExperienceList">
            {experience.map(history => (
            <li key={history.name}>
              <ExperienceItem history={history} />
            </li>
            ))}
          </ul>
        </main>
      </Page>
    )
  }
}

export const mapStateToProps = state => ({
  experience: experienceOrderByStartSelector(state),
  yearsOfExperience: experienceYearsOfExperienceSelector(state)
})

export const mapDispatchToProps = dispatch => ({
  getExperience: async () => {
    await dispatch(requestExperience())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ExperiencePage)
