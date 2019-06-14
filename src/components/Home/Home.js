import React, { useEffect } from 'react'
import {
  Container,
  Greeting,
  Heading,
  Introduction,
  LaptopImage,
  ProfilePicture,
} from './styles'

export const HomePage = () => {
  useEffect(() => {
    document.title = 'Jonathan Davis'
  })

  return (
    <Container data-testid='home'>
      <ProfilePicture />

      <Heading>Husband, Father, Technology&nbsp;Innovator</Heading>

      <LaptopImage />

      <Introduction>
        <Greeting>Hi, I’m Jonathan.</Greeting>

        <p>
          I love thoughts and ideas, enjoy conversation and people, and am
          driven by learning and creativity.
        </p>

        <p>
          Professionally, I thrive in technology and exploring its ever evolving
          potential to transform the way we live and connect.
        </p>
      </Introduction>
    </Container>
  )
}

export default HomePage
