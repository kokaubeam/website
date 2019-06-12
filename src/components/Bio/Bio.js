import React from 'react'
import meImage from '../../media/me.jpg'

import { Container, ProfilePicture, Heading } from './styles'

export const Bio = () => (
  <Container data-testid='bio'>
    <ProfilePicture src={meImage} alt='Jonathan Davis' />

    <Heading>Husband, Father, Technology&nbsp;Innovator</Heading>

    <p>
      I love thoughts and ideas, enjoy conversation and people, and am driven by
      learning and creativity.
    </p>

    <p>
      Professionally, I thrive in technology and exploring its ever evolving
      potential to transform the way we live and connect.
    </p>
  </Container>
)

export default Bio
