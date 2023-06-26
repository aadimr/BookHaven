import style from "./AllBooks.module.css"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { showBook } from "../../store/BooksSlice";
import { Card } from "@mui/material";
import { AiFillStar } from "react-icons/ai";
import OptionMenu from "./OptionMenu";


function AllBooks() {

    const dispatch = useDispatch();

    const { books, loading } = useSelector((state) => state.app)
    useEffect(() => {
        dispatch(showBook());
    },[]);

    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <div className={style.wrapper}>
            <div className={style.bookDetails}>
                {books && books.map((ele, index) => (
                    <Card  key={index}>
                        <img src={ele.img} alt="error" className={style.img} />
                        <div className={style.details}>
                            <div className={style.bookNameAndOptionIcon}>
                                <h2>{ele.book_Name}</h2>
                                <span><OptionMenu id={ele.id}/></span>
                            </div>
                            <p>{ele.author_Name}</p>
                            <div className={style.reviewAndPrice}>
                                <p>{ele.review}<AiFillStar /></p>
                                <h3>₹{ele.price}</h3>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default AllBooks;
