import { priceData } from "./priceData";
import Input from "../../.././components/input/Input"
import style from "./FilterByPrice.module.css"

function FilterByPrice() {
  return (
    <div className={style.wrapper}>
    <h3 className={style.h3}>Filter by Price</h3>
    <div className={style.filterWrapper}>
    {priceData.map((ele, index) => (
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
  )
}

export default FilterByPrice;
