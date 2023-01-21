import React from 'react'
import './LandingPage.css'
import hero from '../../assets/hero.webp'
import Hero from '../Hero/Hero'

function LandingPage() {
  return (
    <>
      <Hero/>
      <div>
        <img src={hero} alt="hero" className='hero-bg'/>
      </div>
    </>
  )
}

export default LandingPage