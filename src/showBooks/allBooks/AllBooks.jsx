import style from "./AllBooks.module.css"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { showBook } from "../../store/BooksSlice";
import OptionMenu from "./OptionMenu";
import StarIcon from '@mui/icons-material/Star';
import AddToCartButton from "../addToCartButton/AddToCartButton";
import { updateUser } from "../../store/UserSlice";
import { showUser } from "../../store/UserSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


function AllBooks() {

    const toastOfItemAdded = () => (toast.success('Item Added to cart successfully', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
    }))

    const bookDeletednotify = () => toast.success('Book deleted successfully', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const loggedInuserDetails = JSON.parse(localStorage.getItem('details'));

    const { users } = useSelector(state => state.user)

    useEffect(() => {
        dispatch(showUser())
    }, [dispatch])


    const { books, loading } = useSelector((state) => state.app)
    useEffect(() => {
        dispatch(showBook());
    }, [dispatch]);

    if (loading) {
        return <h2>Loading...</h2>
    }

    const showLoggedInUserDetails = loggedInuserDetails ? users.find(ele => ele.id === loggedInuserDetails.id) : null

    function handleClick(id) {
        if (showLoggedInUserDetails) {
            const userCart = [...showLoggedInUserDetails.addCart];
            const existingCartItemIndex = userCart.findIndex((item) => item.id === id);

            if (existingCartItemIndex !== -1) {
                const updatedCartItem = {
                    ...userCart[existingCartItemIndex],
                    quantity: userCart[existingCartItemIndex].quantity + 1,
                };
                userCart[existingCartItemIndex] = updatedCartItem;
            } else {
                const selectedBook = books.find((ele) => ele.id === id);
                if (selectedBook) {
                    const selectedBookWithQuantity = { ...selectedBook, quantity: 1 };
                    userCart.push(selectedBookWithQuantity);
                }
            }

            const updatedUser = {
                ...showLoggedInUserDetails,
                addCart: userCart,
            };
            dispatch(updateUser({ id: showLoggedInUserDetails.id, ...updatedUser }));
            toastOfItemAdded();
        }else{
            navigate("/logIn")
        }
       
    }



    return (
        <div className={style.wrapper}>
            <ToastContainer />
            <div className={style.bookDetails}>
                {books && books.map((ele) => (
                    <div key={ele.id} className={style.bookCard}>
                        <div><img src={ele.img} alt="error" className={style.img} /></div>
                        <div className={style.details}>
                            <div className={style.bookNameAndOptionIcon}>
                                <p>{ele.book_Name}</p>
                                <span className={style.optionMenu}><OptionMenu id={ele.id}
                                    styles={showLoggedInUserDetails && showLoggedInUserDetails.id === ele.userId ? { display: "inline" } : { display: "none" }} notify={bookDeletednotify}/></span>
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
