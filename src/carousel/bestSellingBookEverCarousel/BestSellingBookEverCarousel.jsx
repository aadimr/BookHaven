import style from "./BestSellingBookEverCarousel.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showBook } from "../../store/BooksSlice";
import StarIcon from '@mui/icons-material/Star';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from '@mui/material/Card';
import LeftArrow from '../carouselArrows/LeftArrow';
import RightArrow from '../carouselArrows/RightArrow';

function BestSellingBookEverCarousel() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let slidesToShow = 5;

  if (windowWidth <= 1170) {
    slidesToShow = 4;
  }
  if (windowWidth <= 850) {
    slidesToShow = 3;
  }
  if (windowWidth <= 620){
    slidesToShow = 2;
  }
  if (windowWidth <= 400){
    slidesToShow = 1;
  }

  const dispatch = useDispatch();

  const { books, loading } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(showBook());
  }, [dispatch]);

  if (loading) {
    return <h2>Loading...</h2>
  }



  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />
  };

  const filteredBook = books.filter((ele) => ele.review === 4 || ele.review > 4)

  return (
    <div className={style.wrapper}>
      <div className={style.h1}>
        <h1>Best Selling Books Ever</h1>
      </div>
      <div className={style.bookDetails}>
        <Slider {...settings}>
          {filteredBook && filteredBook
            .map((ele, index) => (
              <Card sx={{
                maxWidth: "12rem",
                maxHeight: "28rem",
                '@media screen and (max-width: 1250px)': {
                  maxWidth: "11rem",
                  maxHeight: "28rem",
                },
                '@media screen and (max-width: 1170px)': {
                  maxWidth: "13rem",
                  maxHeight: "28rem",
                },
                '@media screen and (max-width: 1075px)': {
                  maxWidth: "11rem",
                  maxHeight: "28rem",
                },
                '@media screen and (max-width: 935px)': {
                  maxWidth: "10rem",
                  maxHeight: "28rem",
                },
                '@media screen and (max-width: 850px)': {
                  maxWidth: "12rem",
                  maxHeight: "28rem",
                },
                '@media screen and (max-width: 750px)': {
                  maxWidth: "11rem",
                  maxHeight: "28rem",
                },
                '@media screen and (max-width: 690px)': {
                  maxWidth: "10rem",
                  maxHeight: "28rem",
                },
                '@media screen and (max-width: 620px)': {
                  maxWidth: "13rem",
                  maxHeight: "28rem",
                },
                '@media screen and (max-width: 535px)': {
                  maxWidth: "11rem",
                  maxHeight: "28rem",
                },
                '@media screen and (max-width: 450px)': {
                  maxWidth: "10rem",
                  maxHeight: "28rem",
                },
                '@media screen and (max-width: 400px)': {
                  maxWidth: "18rem",
                  maxHeight: "28rem",
                },
              }} key={index}>
                <img src={ele.img} alt="error" className={style.img} />
                <div className={style.details}>
                  <p className={style.book_Name}>{ele.book_Name}</p>
                  <p>{ele.author_Name}</p>
                  <div className={style.reviewAndPrice}>
                    <div className={style.reviewStar}>
                      <p>
                        {ele.review}  </p>
                      <span><StarIcon sx={{ fontSize: "medium", marginTop: ".3rem", color: "#FFD700" }} /></span>
                    </div>
                    <h3 className={style.h3}>₹{ele.price}</h3>
                  </div>
                </div>
              </Card>
            ))}
        </Slider>
      </div>
    </div>
  );
}

export default BestSellingBookEverCarousel;
