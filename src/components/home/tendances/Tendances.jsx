import React from "react";
import { Link } from "react-router-dom";
import "./tendances.css";

import TendancesRoutes from "../../../routes/TendancesRoutes";
const Tendances = ({ HotData, NewData, BestData, empty }) => {
  return (
    <div className="tHolder">
      <div className="links">
        <Link to="best-sellers">Best Sellers</Link>
        <Link to="">New Arrivals</Link>
        <Link to="hot-saless"> Hot Sales </Link>
      </div>
      <div>
        <TendancesRoutes
          empty={empty}
          BestData={BestData}
          NewData={NewData}
          HotData={HotData}
        />
      </div>
    </div>
  );
};

export default Tendances;
