import React from "react";
import Banners from "./banners/Banners";
import Sliders from "./sliders/Sliders";
import Tendances from "./tendances/Tendances";

const Home = ({ productsData, empty }) => {
  return (
    <div>
      <Sliders />
      <Banners />
      <Tendances empty={empty} productsData={productsData} />
    </div>
  );
};

export default Home;
