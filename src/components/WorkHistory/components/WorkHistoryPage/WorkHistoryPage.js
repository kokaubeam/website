import React from 'react'
import Page from '../../../Page'
import data from '../../data'
import WorkHistoryItem from '../WorkHistoryItem'
import Bio from '../../../Bio'
import './WorkHistoryPage.css'

export const WorkHistoryPage = () => (
  <Page className="WorkHistoryPage">
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

export default WorkHistoryPage
