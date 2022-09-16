import React from "react";
import { Routes, Route } from "react-router-dom";
import Best from "../components/home/tendances/Best";
import New from "../components/home/tendances/New";
import Hot from "../components/home/tendances/Hot";

const TendancesRoutes = ({ HotData, BestData, empty, NewData }) => {
  return (
    <Routes>
      <Route
        path="/best-sellers"
        element={<Best empty={empty} BestData={BestData} />}
      />
      <Route path="/" element={<New empty={empty} NewData={NewData} />} />
      <Route
        path="/hot-saless"
        element={<Hot empty={empty} HotData={HotData} />}
      />
    </Routes>
  );
};

export default TendancesRoutes;
