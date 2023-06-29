import { priceData } from "./priceData";
import Input from "../../.././components/input/Input"
import style from "./FilterByPrice.module.css"
import { useDispatch } from "react-redux";
import { showBook } from "../../../store/BooksSlice";
import { filterByPrice } from "../../../store/BooksSlice";

function FilterByPrice() {

  const dispatch = useDispatch();

  function handleChangeCheckBox(e) {
    const checkedValue = e.target.value;
    const [minValue, maxValue] = checkedValue.split("-");
    console.log(minValue,maxValue)
    console.log(checkedValue)

    if (e.target.checked) {
      const checkboxes = document.getElementsByName("priceRange");
      checkboxes.forEach((checkbox) => {
        if (checkbox.value !== checkedValue) {
          checkbox.checked = false;
        }
      });

      dispatch(filterByPrice({ minPrice: minValue, maxPrice: maxValue }));
    } else{
      dispatch(showBook());
    }
  }

  return (
    <div className={style.wrapper}>
    <h3 className={style.h3}>Filter by Price</h3>
    <div className={style.filterWrapper}>
    {priceData.map((ele, index) => (
      <span key={index} className={style.span}>
        <Input
         type={"checkbox"}
          className={style.input}
          name="priceRange"
          value={`${ele.minValue}-${ele.maxValue}`}
          onChange={handleChangeCheckBox}
        />
        {ele.label}
      </span>
    ))}
  </div>
  </div>
  )
}

export default FilterByPrice;
