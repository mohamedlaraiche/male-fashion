import React from "react";
import Banners from "./banners/Banners";
import Sliders from "./sliders/Sliders";
import Tendances from "./tendances/Tendances";

const Home = ({ HotData,NewData, BestData, empty }) => {
  return (
    <div>
      <Sliders />
      <Banners />
      <Tendances empty={empty} BestData={BestData} NewData={NewData} HotData={HotData} />
    </div>
  );
};

export default Home;
