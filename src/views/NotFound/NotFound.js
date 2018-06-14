import React from 'react'
import Page from '../../components/Page/Page'
import { Link } from 'react-router-dom'
import './NotFound.css'

export const NotFound = () => (
  <Page className="NotFound">
    <main>
      <h1>Page Not Found</h1>
      <p>Hmm... can&apos;t find that page. Maybe you can find it from the <Link to="/">home</Link> page.</p>
    </main>
  </Page>
)

export default NotFound
