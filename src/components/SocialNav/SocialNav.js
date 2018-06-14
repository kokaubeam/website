import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import twitterIcon from './media/twitterIcon.svg'
import githubIcon from './media/githubIcon.svg'
import linkedInIcon from './media/linkedInIcon.svg'
import './SocialNav.css'

export const SocialNav = ({ className }) => (
  <nav className={classNames('SocialNav', className)}>
    <ul>
      <li><a href="https://twitter.com/kokaubeam" target="_blank" rel="noopener noreferrer"><img src={twitterIcon} alt="My Twitter"/></a></li>
      <li><a href="https://github.com/kokaubeam" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="My Github"/></a></li>
      <li><a href="https://www.linkedin.com/in/kokaubeam/" target="_blank" rel="noopener noreferrer"><img src={linkedInIcon} alt="My LinkedIn"/></a></li>
    </ul>
  </nav>
)

SocialNav.propTypes = {
  className: PropTypes.string
}

export default SocialNav
