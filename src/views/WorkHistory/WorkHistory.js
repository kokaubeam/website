import React from 'react'
import Page from '../../components/Page/Page'
import data from './data'
import WorkHistoryItem from './components/WorkHistoryItem'
import './WorkHistory.css'

export const WorkHistory = () => (
  <Page className="WorkHistory">
    <main>
      <h1>Work History</h1>
      {data.sort((a, b) => b.start - a.start).map(history => <WorkHistoryItem
        key={history.name}
        history={history} />
      )}
    </main>
  </Page>
)

export default WorkHistory
