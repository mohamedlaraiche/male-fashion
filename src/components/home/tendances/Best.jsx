import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
const Best = ({ productsData, empty }) => {
  return (
    <div className="t-products">
      <div className="container">
        {productsData.map((product) => (
          <div className="ProductCard" key={product.id}>
            <img src={product.img} alt="" />
            <h4> {product.name} </h4>
            <p> {product.price} </p>
            <div className="btns">
              <AddShoppingCartIcon />
              {empty === false ? <FavoriteBorderIcon /> : <FavoriteIcon />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Best;
