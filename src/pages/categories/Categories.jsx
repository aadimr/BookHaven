import style from "./Categories.module.css"
import AllBooks from "../../showBooks/allBooks/AllBooks";
import AllFilter from "../../showBooks/filters/allFilters/AllFilter";

function Categories() {
  return (
    <div className={style.wrapper}>
      <div className={style.allFilter}><AllFilter/></div>
      <div className={style.allBooks}><AllBooks/></div>
    </div>
  )
}

export default Categories;
