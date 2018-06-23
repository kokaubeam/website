import React from 'react'
import meImage from './media/me.jpg'
import './Bio.css'

export const Bio = () => (
  <div className="Bio">
    <img className="me" src={meImage} alt="Jonathan Davis"/>
    <h1>Husband, Father, Technology&nbsp;Innovator</h1>
    <p>I love thoughts and ideas. I enjoy conversation and people. I’m drivin by learning and creativity.</p>
    <p>Professionally, I thrive in technology and exploring it’s ever evolving potential to transform the way we live and connect.</p>
  </div>
)

export default Bio