import React from "react";
import Banners from "./banners/Banners";
import Sliders from "./sliders/Sliders";
import Tendances from "./tendances/Tendances";

const Home = ({ productsData }) => {
  return (
    <div>
      <Sliders />
      <Banners />
      <Tendances productsData={productsData} />
    </div>
  );
};

export default Home;
