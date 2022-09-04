import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import "./headbar.css";
const HeadBar = () => {
  return (
    <Grid
      className="headbar"
      style={{
        background: "black",
        height: "6vh",
      }}>
      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        className="container">
        <h4 style={{ color: "#fff", fontWeight: 400 }}>
          Free shipping, 30 day return or refund guarantee.
        </h4>
        <Grid className="curr">
          <Link to="login">SIGN IN</Link>
          <Link to="faqs">FAQS</Link>
          <select name="" id="">
            <option value="">USD</option>
            <option value="">EUR</option>
            <option value="">MAD</option>
          </select>
        </Grid>
      </div>
    </Grid>
  );
};

export default HeadBar;
