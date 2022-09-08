import React from 'react';
import { Link } from "react-router-dom";
const Tendances = () => {
  return (
    <div>
      <div className="links">
        <Link to="/best-sellers">Best Sellers</Link>
        <Link to="/new-arrivals" >New Arrivals</Link>
        <Link to="/hot-saless" > Hot Sales </Link>
      </div>
      <div className="t-products">
        
      </div>
    </div>
  );
};

export default Tendances;