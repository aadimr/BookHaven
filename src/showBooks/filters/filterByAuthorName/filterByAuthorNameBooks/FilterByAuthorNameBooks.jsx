// import style from "./filterByAuthorNameBooks.module.css"
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// // import { filterByAuthorName } from "../../../../store/BooksSlice";
// import { filterByAuthorName } from "../../../../store/BooksSlice";

// // import { showBook } from "../../../../store/BooksSlice";
// import { Card } from "@mui/material";
// import OptionMenu from "../../../allBooks/OptionMenu";
// import StarIcon from '@mui/icons-material/Star';
// import Buttons from "../../../../components/button/Button";


// function FilterByAuthorNameBooks() {

//     const dispatch = useDispatch();

//     const { filterByAuthorNameBooks, loading } = useSelector((state) => state.app);
      
//     useEffect(() => {
//         dispatch(filterByAuthorName());
//     }, []);

//     if (loading) {
//         return <h2>Loading...</h2>
//     }

//     return (
//         <div className={style.wrapper}>
//             <div className={style.bookDetails}>
//                 {filterByAuthorNameBooks && filterByAuthorNameBooks.map((ele, index) => (
//                     <Card key={index} sx={{
//                         display: "flex",
//                         gap: "2rem"
//                     }}>
//                         <div><img src={ele.img} alt="error" className={style.img} /></div>
//                         <div className={style.details}>
//                             <div className={style.bookNameAndOptionIcon}>
//                                 <p>{ele.book_Name}</p>
//                                 <span className={style.optionMenu}><OptionMenu id={ele.id} /></span>
//                             </div>
//                             <p><span className={style.By}>By: </span>{ele.author_Name}</p>
//                             <div className={style.reviewStar}>
//                                 <p><span>Review: </span>{ele.review}</p>
//                                 <span><StarIcon sx={{ fontSize: "medium", marginTop: ".3rem", color: "#FFD700" }} /></span>
//                             </div>
//                             <h3 className={style.price}>₹{ele.price}</h3>
//                             <Buttons sx={{
//                                 marginRight: "8rem",
//                                 height: "2rem",
//                                 width: "8rem",
//                                 textTransform: "capitalize",
//                                 fontSize: "1rem",
//                                 backgroundColor: "transparent",
//                                 color: "#3E8ED0",
//                                 border: "1px solid",
//                                 '&:hover': {
//                                     backgroundColor: "#C8E2F7",
//                                 },
//                             }} name={"Add to cart"} />
//                         </div>
//                     </Card>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default FilterByAuthorNameBooks;