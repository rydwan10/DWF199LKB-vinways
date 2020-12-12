import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// importing images
import banner1 from "../../../assets/banners/banner--1.png";
import banner2 from "../../../assets/banners/banner--2.png";
import banner3 from "../../../assets/banners/banner--3.png";
import banner4 from "../../../assets/banners/banner--4.png";

function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,

    // dots: true,
    // infinite: true,
    // slidesToShow: 3,
    // slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
  };
  return (
    <div
      style={{
        padding: "20px",
        // background: "rgb(179 179 179 / 7%)",
        // background: rgb(80,72,222),
        background:
          "radial-gradient(circle, rgba(80,72,222,0) 0%, rgba(140,140,140,0.1741071428571429) 49%, rgba(54,57,84,1) 100%)",
        borderRadius: "12px",
        // width: "100%",
      }}
    >
      <Slider {...settings}>
        <div>
          <img height="240px" src={banner1} alt="banner1" />
        </div>
        <div>
          <img height="240px" src={banner2} alt="banner2" />
        </div>
        <div>
          <img height="240px" src={banner3} alt="banner3" />
        </div>
        <div>
          <img height="240px" src={banner4} alt="banner4" />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
