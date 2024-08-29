import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/images/dark-arrow.png'
function Hero() {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We Ensure Better Education For a Better World</h1>
        <p>Our cutting-edge currication is designed to empower students with the Knowledge, Skills, and experiences needed to excel in the dynamic field of education </p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="arrow" /></button>
      </div>
    </div>
  )
}

export default Hero
