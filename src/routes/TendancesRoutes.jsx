import React from "react";
import { Routes, Route } from "react-router-dom";
import Best from "../components/home/tendances/Best";
import New from "../components/home/tendances/New";
import Hot from "../components/home/tendances/Hot";

const TendancesRoutes = ({ productsData, empty }) => {
  return (
    <Routes>
      <Route
        path="/best-sellers"
        element={<Best empty={empty} productsData={productsData} />}
      />
      <Route
        path="/new-arrivals"
        element={<New empty={empty} productsData={productsData} />}
      />
      <Route
        path="/hot-saless"
        element={<Hot empty={empty} productsData={productsData} />}
      />
    </Routes>
  );
};

export default TendancesRoutes;
