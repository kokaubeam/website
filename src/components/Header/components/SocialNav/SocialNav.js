import React from 'react'
import twitterIcon from './media/twitterIcon.svg'
import githubIcon from './media/githubIcon.svg'
import linkedInIcon from './media/linkedInIcon.svg'
import {
  Container,
  SocialNavList,
  SocialNavListItem,
  SocialLink,
  SocialIcon,
} from './styles'

const links = [
  {
    href: 'https://twitter.com/kokaubeam',
    src: twitterIcon,
    description: 'My Twitter',
  },
  {
    href: 'https://github.com/kokaubeam',
    src: githubIcon,
    description: 'My Github',
  },
  {
    href: 'https://www.linkedin.com/in/kokaubeam/',
    src: linkedInIcon,
    description: 'My LinkedIn',
  },
]

export const SocialNav = props => (
  <Container {...props}>
    <SocialNavList>
      {links.map((link, index) => (
        <SocialNavListItem key={index}>
          <SocialLink
            href={link.href}
            target='_blank'
            rel='noopener noreferrer'
          >
            <SocialIcon src={link.src} alt={link.description} />
          </SocialLink>
        </SocialNavListItem>
      ))}
    </SocialNavList>
  </Container>
)

export default SocialNav
