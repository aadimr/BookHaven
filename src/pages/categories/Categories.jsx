import style from "./Categories.module.css"
import AllBooks from "../../showBooks/allBooks/AllBooks";
import FilterByAuthorName from "../../showBooks/filterByAuthorName/FilterByAuthorName";

function Categories() {

  return (
    <div className={style.wrapper}>
      <div className={style.allFilter}><FilterByAuthorName/></div>
      <div className={style.allBooks}><AllBooks /></div>
    </div>
  )
}

export default Categories;




