import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [empty] = useState(false);
  const [listState, setListState] = useState("hide");
  const showList = () => setListState(listState === "hide" ? "show" : "hide");
  return (
    <Grid style={{ height: "10vh", display: "flex", alignItems: "center" }}>
      <div className="container">
        <Grid className="navbar">
          <Grid>
            <img src="./assets/logo.png" alt="LOGO" />
          </Grid>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <span onClick={showList}>Pages</span>
              <div className="pagesDetails">
                <ul id={listState}>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/shop-detail">Shop Details</Link>
                  </li>
                  <li>
                    <Link to="/cart">Shopping Cart</Link>
                  </li>
                  <li>
                    <Link to="/check-out">Check Out</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog Details</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <Grid
            className="icons"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <SearchIcon />
            {empty === false ? <FavoriteBorderIcon /> : <FavoriteIcon />}
            <ShoppingBagIcon />
            <span style={{ fontWeight: 600 }}>$0.00</span>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
};

export default Navbar;
