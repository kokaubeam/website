import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Page from '../../../Page'
import StackToolGroup from '../StackToolGroup'
import Bio from '../../../Bio'
import { stackOrderedGroupedByTagSelector } from '../../selectors'
import { requestStack } from '../../actions'
import './StackPage.css'

export class StackPage extends Component {
  static propTypes = {
    stackGroups: PropTypes.array.isRequired,
    getStack: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { getStack } = this.props
    getStack()
  }

  render() {
    const { stackGroups } = this.props

    return (
      <Page className="StackPage">
        <aside>
          <Bio />
        </aside>
        <main>
          <h1>The Stack</h1>
          {stackGroups.map(stackGroup => <StackToolGroup key={stackGroup.name} name={stackGroup.name} tools={stackGroup.tools} />)}
        </main>
      </Page>
    )
  }
}

export const mapStateToProps = state => ({
  stackGroups: stackOrderedGroupedByTagSelector(state)
})

export const mapDispatchToProps = dispatch => ({
  getStack: async () => {
    await dispatch(requestStack())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(StackPage)
