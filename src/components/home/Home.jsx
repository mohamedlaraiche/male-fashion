import React from "react";
import Banners from "./banners/Banners";
import Sliders from "./sliders/Sliders";
import Tendances from "./tendances/Tendances";

const Home = ({ HotData, NewData, BestData, empty, isLoading }) => {
  return (
    <div>
      <Sliders />
      <Banners />
      <Tendances empty={empty} BestData={BestData} NewData={NewData} HotData={HotData} isLoading={isLoading} />
    </div>
  );
};

export default Home;
