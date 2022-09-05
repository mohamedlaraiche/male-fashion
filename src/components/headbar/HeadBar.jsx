import { Link } from "react-router-dom";
import "./headbar.css";
const HeadBar = () => {
  return (
    <div className="headbar">
      <div className="container ">
        <div className="headBarHead">
          <h5>Free shipping, 30 day return or refund guarantee.</h5>
          <div className="curr">
            <Link to="login">SIGN IN</Link>
            <Link to="faqs">FAQS</Link>
            <select name="" id="">
              <option value="">USD</option>
              <option value="">EUR</option>
              <option value="">MAD</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadBar;
