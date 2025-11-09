import React from 'react'
import Hero from '../../components/Hero/Hero'
import AboutSection from '../../components/About/AboutSection'
import ServiceSection from '../../components/Services/ServiceSection'
import BookingCTA from '../../components/BookingCTA/BookingCTA'
import FeaturedRooms from '../../components/FeaturedRooms/FeaturedRooms'
import RestaurantSection from '../../components/ResturantSection/RestaurantSection'
import TestimonialsSection from '../../components/TestimonialsSection/TestimonialsSection'
import AchievementsSection from '../../components/AchievementsSection/AchievementsSection'
import GallerySection from '../../components/GallerySection/GallerySection'
import BlogSection from '../../components/BlogSection/BlogSection'

const Home = () => {
  return (
    <div>
      <Hero/>
      <AboutSection/>
      <ServiceSection/>
      <BookingCTA/>
      <FeaturedRooms/>
      <RestaurantSection/>
      <TestimonialsSection/>
      <AchievementsSection/>
      <BlogSection/>
      <GallerySection/>
    </div>
  )
}

export default Home
