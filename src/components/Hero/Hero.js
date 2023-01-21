import React from 'react'
import './Hero.css'
import hero from '../../assets/hero.webp'

function Hero() {
  return (
    <div className="hero">
      <img src={hero} alt="hero" className='hero-bg'/>
      <div className="hero-text">
        <h1>MOVIE<span className="hero-name">MANIA</span></h1>
      </div>
    </div>
  )
}

export default Hero