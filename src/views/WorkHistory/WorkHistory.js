import React from 'react'
import Page from '../../components/Page/Page'
import data from './data'
import WorkHistoryItem from './components/WorkHistoryItem'
import './WorkHistory.css'

export const WorkHistory = () => (
  <Page className="WorkHistory">
    <main>
      <h1>Work History</h1>
      {data.sort((a, b) => a.start < b.start).map(history => <WorkHistoryItem
        key={history.name}
        name={history.name}
        position={history.position}
        description={history.description}
        logo={history.logo}
        start={history.start}
        end={history.end} />
      )}
    </main>
  </Page>
)

export default WorkHistory
