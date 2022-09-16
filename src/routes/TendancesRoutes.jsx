import React from "react";
import { Routes, Route } from "react-router-dom";
import Best from "../components/home/tendances/Best";
import New from "../components/home/tendances/New";
import Hot from "../components/home/tendances/Hot";

const TendancesRoutes = ({ HotData, BestData, empty, NewData, isLoading }) => {
  return (
    <Routes>
      <Route
        path="/best-sellers"
        element={<Best empty={empty} BestData={BestData} isLoading={isLoading} />}
      />
      <Route path="/" element={<New empty={empty} NewData={NewData} isLoading={isLoading} />} />
      <Route
        path="/hot-saless"
        element={<Hot empty={empty} HotData={HotData} isLoading={isLoading} />}
      />
    </Routes>
  );
};

export default TendancesRoutes;
