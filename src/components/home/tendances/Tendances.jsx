import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./tendances.css";
import Best from "./Best";
import New from "./New";
import Hot from "./Hot";
const Tendances = ({ productsData }) => {
  return (
    <div className="tHolder">
      <div className="links">
        <Link to="best-sellers">Best Sellers</Link>
        <Link to="new-arrivals">New Arrivals</Link>
        <Link to="hot-saless"> Hot Sales </Link>
      </div>
      <div className="t-products"></div>
      <Routes>
        <Route
          path="/best-sellers"
          element={<Best productsData={productsData} />}
        />
        <Route
          path="/new-arrivals"
          element={<New productsData={productsData} />}
        />
        <Route
          path="/hot-saless"
          element={<Hot productsData={productsData} />}
        />
      </Routes>
    </div>
  );
};

export default Tendances;
