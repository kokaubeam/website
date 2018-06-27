import React from 'react'
import Page from '../../../Page/Page'
import meImage from '../../media/me.jpg'
import laptopImage from '../../media/laptop.jpg'
import './HomePage.css'

export const HomePage = () => (
  <Page className="HomePage">
    <main>
      <img className="me" src={meImage} alt="Jonathan Davis"/>

      <h1>Husband, Father, Technology&nbsp;Innovator</h1>

      <img className="laptop" src={laptopImage} alt="Laptop, partially closed, with colorful lights expressed from the display reflecting off the keyboard."/>

      <div className="introduction">
        <p className="greeting">Hi, I’m Jonathan.</p>

        <p>I love thoughts and ideas. I enjoy conversation and people. I’m drivin by learning and creativity.</p>

        <p>Professionally, I thrive in technology and exploring it’s ever evolving potential to transform the way we live and connect.</p>
      </div>
    </main>
  </Page>
)

export default HomePage
