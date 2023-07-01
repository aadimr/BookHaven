import Input from '../../components/input/Input';
import { authorName } from './authorData';
import style from './FilterByAuthorName.module.css';
import { useDispatch } from 'react-redux';
import { filterByAuthorName, showBook } from '../../store/BooksSlice';

function FilterByAuthorName() {
  const dispatch = useDispatch();

  function handleChangeCheckBox(e) {
    const checkedValue = e.target.value;

    if (e.target.checked) {
      const checkboxes = document.getElementsByName("author");
      checkboxes.forEach((checkbox) => {
        if (checkbox.value !== checkedValue) {
          checkbox.checked = false;
        }
      });

      dispatch(filterByAuthorName(checkedValue));
    } else {
      dispatch(showBook())
    }
  }

  return (
    <div className={style.wrapper}>
      <h3 className={style.h3}>Filter by Author Name</h3>
      <div className={style.filterWrapper}>
        {authorName.map((ele, index) => (
         <span key={index} className={style.span}>
            <Input
              type="checkbox"
              className={style.input}
              name="author"
              value={ele}
              onChange={handleChangeCheckBox}
            />
            {ele}
          </span>
        ))}
      </div>
    </div>
  );
}

export default FilterByAuthorName;











