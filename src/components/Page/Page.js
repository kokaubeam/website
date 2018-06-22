import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Header from '../Header/Header'
import './Page.css'

export const Page = ({ children, className }) => (
  <div className={classNames('Page', className)}>
    <Header className="Header" />
    {children}
  </div>
)

Page.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default Page
