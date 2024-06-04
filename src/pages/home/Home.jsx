import React from 'react'
import HeroBanner from './HeroBanner/HeroBanner'
import Trending from './trending/Trending'

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <Trending />
      <div style={{ height: "1000px" }}></div>
    </div>
  )
}

export default Home
