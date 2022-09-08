import React from 'react'
import Banners from "./banners/Banners";
import Sliders from "./sliders/Sliders";
import Tendances from './tendances/Tendances';

const Home = () => {
  return (
    <div>
      <Sliders />
      <Banners />
      <Tendances />
    </div>
  )
}

export default Home;