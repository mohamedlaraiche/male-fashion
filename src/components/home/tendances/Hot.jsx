import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 620,
  width: "90%",
  height: "auto",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

const Best = ({ HotData, empty, isLoading }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="t-products">
      <div className="container">
        {isLoading === true ? (
          <p> Loading ... </p>
        ) : (
          HotData.map((product) => (
            <>
              <div className="ProductCard" key={product.id}>
                <img src={product.img} alt="" onClick={handleOpen} />
                <h4> {product.name} </h4>
                <p> {product.price} </p>
                <div className="btns">
                  <AddShoppingCartIcon />
                  {empty === false ? <FavoriteBorderIcon /> : <FavoriteIcon />}
                </div>
              </div>
              <Modal
                Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      width: "100%",
                      margin: "10px",
                    }}>
                    <button
                      style={{
                        cursor: "pointer",
                        padding: "10px",
                        border: "none",
                        background: "#e53637",
                        color: "#fff",
                        fontWeight: 800,
                      }}
                      onClick={handleClose}>
                      X
                    </button>
                  </div>
                  <img
                    sx={{ mt: 2 }}
                    src={product.img}
                    alt="Product"
                    style={{
                      maxWidth: "400px",
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </Box>
              </Modal>
            </>
          ))
        )}
      </div>
    </div>
  );
};

export default Best;
