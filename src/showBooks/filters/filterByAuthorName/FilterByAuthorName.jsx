import Input from "../../.././components/input/Input"
import { authorName } from './authorData';
import style from './FilterByAuthorName.module.css';

function FilterByAuthorName() {
 
  return (
    <div className={style.wrapper}>
      <h3 className={style.h3}>Filter by Author Name</h3>
      <div className={style.filterWrapper}>
      {authorName.map((ele, index) => (
        <span key={index} className={style.span}>
          <Input
           type={"checkbox"}
            className={style.input}
            name="author"
          />
          {ele}
        </span>
      ))}
      </div>
    </div>
  );
}

export default FilterByAuthorName;

