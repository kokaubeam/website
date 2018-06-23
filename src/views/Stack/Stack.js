import React from 'react'
import Page from '../../components/Page/Page'
import data from './data'
import StackList from './components/StackList'
import Bio from '../../components/Bio'
import './Stack.css'

export const Stack = () => (
  <Page className="Stack">
    <aside>
      <Bio />
    </aside>
    <main>
      <h1>The Stack</h1>
      {data.map(stack => <StackList key={stack.name} name={stack.name} items={stack.items} />)}
    </main>
  </Page>
)

export default Stack
