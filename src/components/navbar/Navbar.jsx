import { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import "./navbar.css";

const Navbar = () => {
  const [empty] = useState(false);
  const [listState, setListState] = useState("hidePages");
  const [navbar, setNavbar] = useState("hideNav");
  const showList = () =>
    setListState(listState === "hidePages" ? "showPages" : "hidePages");
  const closeSideBar = () => {
    setListState("hidePages");
    setNavbar("hideNav");
  };
  const navbarHandler = () =>
    setNavbar(navbar === "hideNav" ? "showNav" : "hideNav");
  return (
    <div className="navbarBox">
      <div className="container">
        <div className="navbar">
          <div className="imgHolder">
            <Link onClick={closeSideBar} to="/">
              <img src="./assets/logo.png" alt="LOGO" />
            </Link>
          </div>
          <ul id={navbar} className="mainList">
            <li>
              <Link onClick={closeSideBar} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={closeSideBar} to="/shop">
                Shop
              </Link>
            </li>
            <li>
              <span onClick={showList}>Pages</span>
              <div id={listState} className="pagesDetails">
                <ul>
                  <li>
                    <Link onClick={closeSideBar} to="/about">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link onClick={closeSideBar} to="/shop-detail">
                      Shop Details
                    </Link>
                  </li>
                  <li>
                    <Link onClick={closeSideBar} to="/cart">
                      Shopping Cart
                    </Link>
                  </li>
                  <li>
                    <Link onClick={closeSideBar} to="/check-out">
                      Check Out
                    </Link>
                  </li>
                  <li>
                    <Link onClick={closeSideBar} to="/blog">
                      Blog Details
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link onClick={closeSideBar} to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link onClick={closeSideBar} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="icons">
            <SearchIcon />
            {empty === false ? <FavoriteBorderIcon /> : <FavoriteIcon />}
            <ShoppingBagIcon />
          </div>
          <div onClick={navbarHandler} className="burger">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
