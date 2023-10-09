import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import banners from "../../assets/banner.jpg";
import Slider from "react-slick";
import "./Banner.css";

const images = [banners, banners];

function Banner() {
  const settings = {
    arrows: false,

    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
  };

  return (
    <div className="banner-wrap">
      <div className="Banner">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="slide">
              <img src={image} alt={`Slide ${index}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Banner;
