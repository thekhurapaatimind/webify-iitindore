import React from 'react'
import './Hero.css'
import hero from '../../assets/hero.webp'

function Hero() {
  const factor = 8;
  const clipPath = `polygon(0 0, 100% 0, ${100 - factor}% 100%, ${factor}% 100%)`
  return (
    <>
      <div className="hero">
        <img src={hero} alt="hero" className='hero-bg' />
        <div className="hero-text">
          <h1>MOVIE<span className="hero-name">MANIA</span></h1>
        </div>
      </div>
      <div className="trapezium"
        style={{
          clipPath: clipPath,
          background: "#000",
          height: "52px",
          padding: "10px 30px",
          color: "white",
          fontSize: "1.5rem",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <i class="fa-solid fa-angles-up"></i>
      </div>
    </>
  )
}

export default Hero