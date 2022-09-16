import React from "react";

const Best = ({ productsData }) => {
  return (
    <div>
      {productsData.map((product) => (
        <div className="ProductCard" key={product.id}>
          <img src={product.product_img} alt="" />
          <h4> {product.product_name} </h4>
          <p> {product.product_price} </p>
        </div>
      ))}
    </div>
  );
};

export default Best;
