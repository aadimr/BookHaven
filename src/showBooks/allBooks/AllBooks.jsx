import style from "./AllBooks.module.css"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { showBook } from "../../store/BooksSlice";
import OptionMenu from "./OptionMenu";
import StarIcon from '@mui/icons-material/Star';
import AddToCartButton from "../addToCartButton/AddToCartButton";
import { updateUser } from "../../store/UserSlice";


function AllBooks() {

    const dispatch = useDispatch();

    const { books, loading } = useSelector((state) => state.app)
    useEffect(() => {
        dispatch(showBook());
    }, []);

    if (loading) {
        return <h2>Loading...</h2>
    }

    const loggedInuserDetails = JSON.parse(localStorage.getItem('details'));

    function handleClick(id) {
        if (loggedInuserDetails) {
            const userCart = [...loggedInuserDetails.addCart];
            const selectedBook = books.find(ele => ele.id === id);

            if (selectedBook) {
                userCart.push(selectedBook);
                loggedInuserDetails.addCart = userCart;
                dispatch(updateUser({ id, ...loggedInuserDetails }))
            }
        }
    }


    return (
        <div className={style.wrapper}>
            <div className={style.bookDetails}>
                {books && books.map((ele) => (
                    <div key={ele.id} className={style.bookCard}>
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
                            <AddToCartButton onClick={() => handleClick(ele.id)} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllBooks;
