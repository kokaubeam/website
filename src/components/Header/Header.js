import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { headerNavToggle } from './actions'
import { isNavOpenSelector } from './selectors'
import PrimaryNav from './components/PrimaryNav'
import SocialNav from './components/SocialNav'
import menuIcon from './media/menuIcon.svg'
import './Header.css'

export const Header = ({ isNavOpen, toggleNav, className }) => (
  <header className={classNames('Header', { open: isNavOpen }, className)}>
    <Link className="brand regular" to="/">Jonathan Davis</Link>
    <Link className="brand compact" to="/">JD</Link>

    <button
      id="primary-nav-toggle"
      type="button"
      onClick={toggleNav}
      aria-haspopup="true"
      aria-controls="primary-nav">
      <img src={menuIcon} alt="Navigation" />
    </button>

    <PrimaryNav id="primary-nav" className="nav primary" aria-labelledby="primary-nav-toggle" />
    <SocialNav className="nav social" />
  </header>
)

Header.propTypes = {
  isNavOpen: PropTypes.bool,
  toggleNav: PropTypes.func.isRequired,
  className: PropTypes.string
}

export const mapStateToProps = state => ({
  isNavOpen: isNavOpenSelector(state)
})

export const mapDispatchToProps = dispatch => ({
  toggleNav: () => dispatch(headerNavToggle())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
