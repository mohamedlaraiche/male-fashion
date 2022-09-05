import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./sliders.css";
import { FreeMode, Navigation, Thumbs } from "swiper";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
const Sliders = () => {
  const [thumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#222",
          "--swiper-pagination-color": "#222",
          "--swiper-pagination-bgcolor": "#222",
          "--swiper-navigation-background": "#222",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        loop={true}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2">
        <SwiperSlide className="sliderHero">
          <div className="socialMediaRight">
            <a href="https://www.facebook.com/">
              <FacebookIcon />
            </a>
            <a href="https://www.twitter.com/">
              <TwitterIcon />
            </a>
            <a href="https://www.pinterest.com/">
              <PinterestIcon />
            </a>
            <a href="https://www.instagram.com/">
              <InstagramIcon />
            </a>
          </div>
          <div className="slidePart">
            <Link className="summerLink" to="/summer">
              Summer Collection
            </Link>
            <h2> Fall - Winter Collections 2030 </h2>
            <p>
              A specialist label creating luxury essentials. Ethically crafted
              with an unwavering commitment to exceptional quality.
            </p>
            <Link className="shopBtn" to="/shop">
              SHOP NOW <ArrowRightAltIcon />
            </Link>
            <div className="socialMedia">
              <a href="https://www.facebook.com/">
                <FacebookIcon />
              </a>
              <a href="https://www.twitter.com/">
                <TwitterIcon />
              </a>
              <a href="https://www.pinterest.com/">
                <PinterestIcon />
              </a>
              <a href="https://www.instagram.com/">
                <InstagramIcon />
              </a>
            </div>
          </div>
          <img
            className="heroImgs"
            src="./assets/hero/hero-1.jpg"
            alt="hero-1"
          />
        </SwiperSlide>

        <SwiperSlide className="sliderHero">
          <div className="socialMediaRight">
            <a href="https://www.facebook.com/">
              <FacebookIcon />
            </a>
            <a href="https://www.twitter.com/">
              <TwitterIcon />
            </a>
            <a href="https://www.pinterest.com/">
              <PinterestIcon />
            </a>
            <a href="https://www.instagram.com/">
              <InstagramIcon />
            </a>
          </div>
          <div className="slidePart">
            <Link className="summerLink" to="/summer">
              Summer Collection
            </Link>
            <h2> Fall - Winter Collections 2030 </h2>
            <p>
              A specialist label creating luxury essentials. Ethically crafted
              with an unwavering commitment to exceptional quality.
            </p>
            <Link className="shopBtn" to="/shop">
              SHOP NOW <ArrowRightAltIcon />
            </Link>
            <div className="socialMedia">
              <a href="https://www.facebook.com/">
                <FacebookIcon />
              </a>
              <a href="https://www.twitter.com/">
                <TwitterIcon />
              </a>
              <a href="https://www.pinterest.com/">
                <PinterestIcon />
              </a>
              <a href="https://www.instagram.com/">
                <InstagramIcon />
              </a>
            </div>
          </div>
          <img
            className="heroImgs"
            src="./assets/hero/hero-2.jpg"
            alt="hero-2"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Sliders;
