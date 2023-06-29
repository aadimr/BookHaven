import style from "./AllBooks.module.css"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { showBook } from "../../store/BooksSlice";
import { Card } from "@mui/material";
import OptionMenu from "./OptionMenu";
import StarIcon from '@mui/icons-material/Star';
import Buttons from "../../components/button/Button";


function AllBooks() {

    const dispatch = useDispatch();

    const { books, loading } = useSelector((state) => state.app)
    useEffect(() => {
        dispatch(showBook());
    }, []);

    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <div className={style.wrapper}>
            <div className={style.bookDetails}>
                {books && books.map((ele, index) => (
                    <Card key={index} sx={{
                        display: "flex",
                        gap: "2rem",
                        backgroundColor: "rgba(255,255,255,.16)",
                        boxShadow: "0 4px 30px #0000001a",
                    }}>
                        <div><img src={ele.img} alt="error" className={style.img} /></div>
                        <div className={style.details}>
                            <div className={style.bookNameAndOptionIcon}>
                                <p>{ele.book_Name}</p>
                                <span className={style.optionMenu}><OptionMenu id={ele.id} /></span>
                            </div>
                            <p><span className={style.By}>By: </span>{ele.author_Name}</p>
                            <div className={style.reviewStar}>
                                <p><span>Review: </span>{ele.review}</p>
                                <span><StarIcon sx={{ fontSize: "medium", marginTop: ".3rem", color: "#FFD700" }} /></span>
                            </div>
                            <h3 className={style.price}>₹{ele.price}</h3>
                            <Buttons sx={{
                                marginRight: "8rem",
                                height: "2rem",
                                width: "8rem",
                                textTransform: "capitalize",
                                fontSize: "1rem",
                                backgroundColor: "transparent",
                                color: "#3E8ED0",
                                border: "1px solid",
                                '&:hover': {
                                    backgroundColor: "#C8E2F7",
                                },
                            }} name={"Add to cart"} />
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default AllBooks;
