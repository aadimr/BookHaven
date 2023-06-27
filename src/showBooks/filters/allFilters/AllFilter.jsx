import style from "./AllFilter.module.css"
import FilterByAuthorName from '../filterByAuthorName/FilterByAuthorName'
import FilterByPrice from '../filterByPrice/FilterByPrice';

function AllFilter() {
  return (
    <div className={style.wrapper}>
      <FilterByAuthorName/>
      <FilterByPrice/>
    </div>
  )
}

export default AllFilter;
