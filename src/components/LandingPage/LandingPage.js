import React from 'react'
import './LandingPage.css'
import hero from '../../assets/hero.webp'
import Hero from '../Hero/Hero'
import SwiperComponent from '../SwiperComponent/SwiperComponent'
import Genre from '../Genres/Genre'

function LandingPage() {
  return (
    <>
      <Hero/>
      <SwiperComponent/>
      <Genre/>
    </>
  )
}

export default LandingPage