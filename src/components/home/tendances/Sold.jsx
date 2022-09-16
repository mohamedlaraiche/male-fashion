import React from "react";
import { Link } from "react-router-dom";

const Sold = () => {
  return (
    <div className="soldCart">
      <div className="prd">
        <img src="./assets/product-sale.png" alt="product-sale" />
      </div>
      <div className="prdDetails">
        <h5>DEAL OF THE WEEK</h5>
        <h3>Multi-pocket Chest Bag Black</h3>
        <div className="counter"></div>
        <Link to="/cart">SHOP NOW</Link>
      </div>
    </div>
  );
};

export default Sold;
