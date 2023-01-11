import React from 'react'
import FeaturedProducts from '../../Components/FeaturedProducts/FeaturedProducts'
import Hero from '../../Components/Hero/Hero'

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts type='featured'/>
      <FeaturedProducts type='trending'/>

    </div>
  )
}

export default Home