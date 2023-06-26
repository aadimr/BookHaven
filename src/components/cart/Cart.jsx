import style from "./Cart.module.css"
import { BsCartPlus } from "react-icons/bs";

function Cart() {
  return (
    <div className={style.cart}>
      <BsCartPlus/>
    </div>
  )
}

export default Cart;
