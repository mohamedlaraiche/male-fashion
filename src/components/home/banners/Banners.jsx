import React from 'react';
import { Link } from 'react-router-dom';
import "./banners.css";
const Banners = () => {
  return (
    <div className="bannerHolder">
      <div className="banners">
        <div className="banner-one">
          <img src="./assets/banner/banner-1.jpg" className="boi" alt="banner one" />

          <div className="banner-details">
            <h4>Clothing Collection 2030</h4>
            <Link to="shop" > Shop now </Link>
          </div>
        </div>
        <div className="banner-one">
          <img src="./assets/banner/banner-2.jpg" className="boi" alt="banner Two" />

          <div className="banner-details">
            <h4>Shoes Spring 2030</h4>
            <Link to="shop" > Shop now </Link>
          </div>
        </div>
        <div className="banner-three">
          <img src="./assets/banner/banner-3.jpg" className="boi" alt="banner Three" />

          <div className="banner-details">
            <h4>Accessories</h4>
            <Link to="shop" > Shop now </Link>
          </div>
        </div>

      </div>
   </div>
  );
};

export default Banners;