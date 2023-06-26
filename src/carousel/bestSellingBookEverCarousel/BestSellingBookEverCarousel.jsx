import style from "./BestSellingBookEverCarousel.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showBook } from "../../store/BooksSlice";
import { AiFillStar } from 'react-icons/ai';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from '@mui/material/Card';
import LeftArrow from '../carouselArrows/LeftArrow';
import RightArrow from '../carouselArrows/RightArrow';

function BestSellingBookEverCarousel() {
  const dispatch = useDispatch();

  const { books, loading } = useSelector((state) => state.app);
  
  useEffect(() => {
    dispatch(showBook());
  }, []);

  if (loading) {
    return <h2>Loading...</h2>
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
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
              <Card sx={{ maxWidth: "12rem" }} key={index}>
                <img src={ele.img} alt="error" className={style.img} />
                <div className={style.details}>
                  <h2>{ele.book_Name}</h2>
                  <p>{ele.author_Name}</p>
                  <div className={style.reviewAndPrice}>
                    <p>
                      {ele.review}
                      <AiFillStar />
                    </p>
                    <h3>₹{ele.price}</h3>
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
