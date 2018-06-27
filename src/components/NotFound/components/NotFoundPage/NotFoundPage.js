import React from 'react'
import { Link } from 'react-router-dom'
import Page from '../../../Page/Page'
import './NotFoundPage.css'

export const NotFoundPage = () => (
  <Page className="NotFoundPage">
    <main>
      <h1>Page Not Found</h1>
      <p>Hmm... can&apos;t find that page. Maybe you can find it from the <Link to="/">home</Link> page.</p>
    </main>
  </Page>
)

export default NotFoundPage
