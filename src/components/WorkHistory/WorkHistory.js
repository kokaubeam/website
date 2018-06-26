import React from 'react'
import Page from '../../components/Page/Page'
import data from './data'
import WorkHistoryItem from './components/WorkHistoryItem'
import Bio from '../../components/Bio'
import './WorkHistory.css'

export const WorkHistory = () => (
  <Page className="WorkHistory">
    <aside>
      <Bio />
    </aside>
    <main>
      <h1>Work History</h1>
      <ul className="WorkHistoryList">
        {data.sort((a, b) => b.start - a.start).map(history => (
        <li key={history.name}>
          <WorkHistoryItem history={history} />
        </li>
        ))}
      </ul>
    </main>
  </Page>
)

export default WorkHistory
