import React from 'react'
import AboutHero from '../../components/AboutHero/AboutHero'
import MissionSection from '../../components/AboutBody/MissionSection'
import ValuesSection from '../../components/AboutBody/ValuesSection'
import TeamSection from '../../components/AboutBody/TeamSection'
import TestimonialsSection from '../../components/TestimonialsSection/TestimonialsSection'
import GallerySection from '../../components/GallerySection/GallerySection'

const About = () => {
  return (
    <div>
      <AboutHero/>
      <MissionSection/>
      <ValuesSection/>
      <TeamSection/>
      <TestimonialsSection/>
      <GallerySection/>
    </div>
  )
}

export default About
