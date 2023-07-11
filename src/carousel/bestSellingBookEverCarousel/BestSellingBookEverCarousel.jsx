import style from "./BestSellingBookEverCarousel.module.css";
import { useEffect } from "react";
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
              <Card sx={{ maxWidth: "12rem", maxHeight: "28rem" }} key={index}>
                <img src={ele.img} alt="error" className={style.img} />
                <div className={style.details}>
                  <p className={style.book_Name}>{ele.book_Name}</p>
                  <p>{ele.author_Name}</p>
                  <div className={style.reviewAndPrice}>
                    <div className={style.reviewStar}>
                      <p>
                        {ele.review}  </p>
                      <span><StarIcon sx={{fontSize:"medium",marginTop:".3rem",color:"#FFD700"}}/></span>
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
