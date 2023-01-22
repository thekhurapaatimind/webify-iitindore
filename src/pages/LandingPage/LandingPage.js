import React from 'react'
import './LandingPage.css'
import Hero from '../../components/Hero/Hero'
import SwiperComponent from '../../components/SwiperComponent/SwiperComponent'
import Genre from '../../components/Genres/Genre'

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