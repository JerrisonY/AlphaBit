import React from 'react'
import './LandingPage.css'
import Features from '../../components/Features/Features'
import LogoCloud from '../../components/LogoCloud/LogoCloud'
import HeroSection from '../../components/HeroSection/HeroSection'
import Stats from '../../components/Stats/Stats'
import MarketPlace from '../../components/MarketPlace/MarketPlace'
import JoinComp from '../../components/JoinComp/JoinComp'
import Footer from '../../components/Footer/Footer'

function LandingPage() {
  return (
    <>
      <HeroSection />
      <LogoCloud />
      <MarketPlace />
      <Stats />
      <Features />
      <JoinComp />
      <Footer />
    </>
  )
}

export default LandingPage