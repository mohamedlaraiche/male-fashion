import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../components/about/About";
import Blog from "../components/blog/Blog";
import Cart from "../components/cart/Cart";
import Check from "../components/Check-out/Check";
import Contact from "../components/contact/Contact";
import Home from "../components/home/Home";
import ShopDetail from "../components/shop-detail/Shop-detail";
import Shop from "../components/shop/Shop";
const Principal = ({ HotData, NewData, BestData, empty, isLoading }) => {
  return (
    <Routes>
      <Route
        exact
        path="*"
        element={
          <Home
            isLoading={isLoading}
            empty={empty}
            BestData={BestData}
            NewData={NewData}
            HotData={HotData}
          />
        }
      />
      <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop-detail" element={<ShopDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/check-out" element={<Check />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Principal;
