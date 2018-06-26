import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Page from '../../../Page'
import WorkHistoryItem from '../WorkHistoryItem'
import Bio from '../../../Bio'
import { workHistoryOrderByStartSelector } from '../../selectors'
import { requestWorkHistory } from '../../actions'
import './WorkHistoryPage.css'

export class WorkHistoryPage extends Component {
  static propTypes = {
    workHistory: PropTypes.array.isRequired,
    getWorkHistory: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { getWorkHistory } = this.props
    getWorkHistory()
  }

  render() {
    const { workHistory } = this.props

    return (
      <Page className="WorkHistoryPage">
        <aside>
          <Bio />
        </aside>
        <main>
          <h1>Work History</h1>
          <ul className="WorkHistoryList">
            {workHistory.map(history => (
            <li key={history.name}>
              <WorkHistoryItem history={history} />
            </li>
            ))}
          </ul>
        </main>
      </Page>
    )
  }
}

export const mapStateToProps = state => ({
  workHistory: workHistoryOrderByStartSelector(state)
})

export const mapDispatchToProps = dispatch => ({
  getWorkHistory: async () => {
    await dispatch(requestWorkHistory())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(WorkHistoryPage)
