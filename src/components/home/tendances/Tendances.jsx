import React from "react";
import { Link } from "react-router-dom";
import "./tendances.css";

import TendancesRoutes from "../../../routes/TendancesRoutes";
const Tendances = ({ productsData, empty }) => {
  return (
    <div className="tHolder">
      <div className="links">
        <Link to="best-sellers">Best Sellers</Link>
        <Link to="new-arrivals">New Arrivals</Link>
        <Link to="hot-saless"> Hot Sales </Link>
      </div>
      <div>
        <TendancesRoutes empty={empty} productsData={productsData} />
      </div>
    </div>
  );
};

export default Tendances;
