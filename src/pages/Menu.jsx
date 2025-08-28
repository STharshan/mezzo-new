import React from 'react'
import PokeBowlSection from '../components/Menu/Header'
import MenuCard from '../components/Menu/MenuCard'
import ResponsiveForm from '../components/Menu/Form'
import HomeHeader from '../components/HomeHeader'
import ConceptSection from '../components/ConceptSection'
import ResponsiveBanner from '../components/ResponsiveBanner'
import AutoScrollCarousel from '../components/AutoScrollCarousel'

const Menu = () => {
  return (
    <div>
        <HomeHeader />
      <PokeBowlSection />
      <ConceptSection />
      <MenuCard />
      <AutoScrollCarousel />
      <ResponsiveForm />
      <ResponsiveBanner />
    </div>
  )
}

export default Menu