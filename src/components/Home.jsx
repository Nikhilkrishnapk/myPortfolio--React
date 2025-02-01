import React from 'react'
import './cssforcomponents/Home.css'
import PROFILE from '../assets/img.png'

const Home = () => {
  return (
    <div className='hero'>
        <img src={PROFILE} alt="" />
        <h1><span>Hi, I'm Nikhil Krishna Pk,</span> a MEARN Stack Developer</h1>
        <p style={{color:'D8D8D8'}}>I love building scalable web applications and crafting seamless user experiences. Skilled in React, Node.js, MongoDB, and Express, I thrive on solving complex problems with clean, efficient code. Let's create something amazing together!</p>
        <div className="hero-action">
          <div className="hero-connect">
            Connect With Me
          </div>
          <div className="hero-resume">
            My Resume
          </div>
        </div>
    </div>
  )
}

export default Home