import React from 'react'
import RestoBarHero from '../../components/RestoBarHero/RestoBarHero'
import RestaurantSection from '../../components/ResturantSection/RestaurantSection'
import BarSection from '../../components/BarSection/BarSection'

const RestoBar = () => {
  return (
    <div>
      <RestoBarHero/>
      <RestaurantSection/>
      <BarSection/>
    </div>
  )
}

export default RestoBar
