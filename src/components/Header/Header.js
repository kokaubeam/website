import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { headerNavToggle, headerNavClose } from './actions'
import { isNavOpenSelector } from './selectors'
import SocialNav from '../SocialNav'
import menuIcon from './media/menuIcon.svg'
import './Header.css'

export const Header = ({ isNavOpen, toggleNav, closeNav }) => (
  <div className="Header">
    <header>
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

      <nav id="primary-nav" className={classNames('nav primary', { open: isNavOpen })} aria-labelledby="primary-nav-toggle">
        <ul>
          <li><NavLink to="/stack">Stack</NavLink></li>
        </ul>
      </nav>

      <SocialNav className="nav social" />
    </header>
    { isNavOpen && <div id="backdrop" className="backdrop" onClick={closeNav}></div> }
  </div>
)

Header.propTypes = {
  isNavOpen: PropTypes.bool,
  closeNav: PropTypes.func.isRequired,
  toggleNav: PropTypes.func.isRequired
}

export const mapStateToProps = state => ({
  isNavOpen: isNavOpenSelector(state)
})

export const mapDispatchToProps = dispatch => ({
  closeNav: () => dispatch(headerNavClose()),
  toggleNav: () => dispatch(headerNavToggle())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
