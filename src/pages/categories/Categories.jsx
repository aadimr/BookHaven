import style from "./Categories.module.css"
import AllBooks from "../../showBooks/allBooks/AllBooks";
import AllFilter from "../../showBooks/filters/allFilters/AllFilter";
import FilterByAuthorNameBooks from "../../showBooks/filters/filterByAuthorName/filterByAuthorNameBooks/FilterByAuthorNameBooks";
import { useSelector } from "react-redux";

function Categories() {

  const { filterByAuthorNameBooks, loading } = useSelector((state) => state.app);
  // console.log(filterByAuthorNameBooks)

  return (
    <div className={style.wrapper}>
      <div className={style.allFilter}><AllFilter /></div>
      <div className={style.allBooks}><AllBooks /></div>
      {/* <div className={style.allBooks}><FilterByAuthorNameBooks /></div> */}
    </div>
  )
}

export default Categories;




