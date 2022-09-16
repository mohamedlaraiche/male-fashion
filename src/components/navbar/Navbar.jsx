import { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./navbar.css";
const Sstyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  height: "auto",
  transform: "translate(-50%, -50%)",
  maxWidth: 600,
  width: "90%",
  bgcolor: "#222",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  outline: "none",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};
const FStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  height: "auto",
  transform: "translate(-50%, -50%)",
  maxWidth: 600,
  width: "90%",
  bgcolor: "#222",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  outline: "none",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const Navbar = ({ empty }) => {
  const [listState, setListState] = useState("hidePages");
  const [navbar, setNavbar] = useState("hideNav");
  const [searchModal, setSearchModal] = useState(false);
  const [favoriteModal, setFavoriteModal] = useState(false);
  const OpenSearch = () => {
    setSearchModal(true);
    setListState("hidePages");
    setNavbar("hideNav");
  };
  const CloseSearch = () => setSearchModal(false);
  const OpenFavorite = () => {
    setFavoriteModal(true);
    setListState("hidePages");
    setNavbar("hideNav");
  };
  const CloseFavorite = () => setFavoriteModal(false);
  const showList = () => {
    setListState(listState === "hidePages" ? "showPages" : "hidePages");
  };
  const closeSideBar = () => {
    setListState("hidePages");
    setNavbar("hideNav");
  };
  const navbarHandler = () => {
    setNavbar(navbar === "hideNav" ? "showNav" : "hideNav");
    setListState("hidePages");
  };
  return (
    <>
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
              <SearchIcon onClick={OpenSearch} />
              {empty === false ? (
                <FavoriteBorderIcon onClick={OpenFavorite} />
              ) : (
                <FavoriteIcon onClick={OpenFavorite} />
              )}

              <Link onClick={closeSideBar} to="/cart">
                <ShoppingBagIcon />
              </Link>
            </div>
            <div onClick={navbarHandler} className="burger">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>

      {/* SearchModal */}
      <Modal
        open={searchModal}
        onClose={CloseSearch}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={Sstyle}>
          <button onClick={CloseSearch} className="searchBtn">
            X
          </button>
          <input className="searchInput" type="text" placeHolder="Search ..." />
        </Box>
      </Modal>
      {/* Favorite modal */}
      <Modal
        open={favoriteModal}
        onClose={CloseFavorite}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={FStyle}>
          <div className="favBox">
            <h4 style={{ color: "#e53637" }}> List of Favorite </h4>
            <div style={{ color: "#fff", textAlign: "center" }}>Empty</div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default Navbar;
