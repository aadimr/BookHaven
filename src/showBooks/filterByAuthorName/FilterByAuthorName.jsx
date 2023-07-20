import Input from '../../components/input/Input';
import style from './FilterByAuthorName.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { authorName } from './authorData';
import { getCheckedAuthor, getUnCheckedAuthor } from '../../store/filterBookSlice';
import { useCallback } from 'react';


function FilterByAuthorName() {
  const dispatch = useDispatch();

  const { filteredByAuthorName } = useSelector((state) => state.filteredBook);

  useCallback(() => {
    authorName.forEach((author) => {
      if (filteredByAuthorName.includes(author)) {
        dispatch(getCheckedAuthor(author));
      } else {
        dispatch(getUnCheckedAuthor(author));
      }
    });
  }, [dispatch,filteredByAuthorName]);


  function handleChangeCheckBox(e) {
    const { checked, value } = e.target
    if (checked) {
      dispatch(getCheckedAuthor(value))
    }
    if (!checked) {
      dispatch(getUnCheckedAuthor(value))
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
              checked={filteredByAuthorName.includes(ele)}
            />
            {ele}
          </span>
        ))}
      </div>
    </div>
  );
}

export default FilterByAuthorName;











