import React from 'react'
import './LandingPage.css'
import Features from '../../components/Features/Features'
import LogoCloud from '../../components/LogoCloud/LogoCloud'
import HeroSection from '../../components/HeroSection/HeroSection'
import Stats from '../../components/Stats/Stats'


function LandingPage() {
  return (
    <>
      <HeroSection />
      <LogoCloud />
      <Features />
      <Stats />
    </>
  )
}

export default LandingPage