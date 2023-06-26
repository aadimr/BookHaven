import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import style from "./ShowCaseCarousel.module.css";
import LeftArrow from '../carouselArrows/LeftArrow';
import RightArrow from '../carouselArrows/RightArrow';

function MyCarousel() {
    const images = [
        process.env.PUBLIC_URL + '/img1.jpg',
        process.env.PUBLIC_URL + '/img2.jpg',
        process.env.PUBLIC_URL + '/img3.jpg',
      ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <LeftArrow/>,
    nextArrow: <RightArrow/>
  };

  return (
    <div className={style.wrapper}>
      <Slider {...settings} className={style.mainContainer}>
        {images.map((ele, index) => (
          <div className={style.image} key={index}>
            <img src={ele} alt={`Image ${index}`} className={style.img} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MyCarousel;




