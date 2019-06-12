import React from 'react'
import { Link } from 'react-router-dom'

import { Container, Heading } from './styles'

export default () => (
  <Container data-testid='not-found'>
    <Heading>Page Not Found</Heading>

    <p>
      Hmm... can&apos;t find that page. Maybe you can find it from the{' '}
      <Link to='/'>home</Link> page.
    </p>
  </Container>
)
