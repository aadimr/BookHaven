import { Link } from "react-router-dom";
import style from "./CartLogo.module.css"
import { BsCartPlus } from "react-icons/bs";

function CartLogo() {
  return (
    <div className={style.cart}>
      <Link to="/cart"><BsCartPlus/></Link>
    </div>
  )
}

export default CartLogo;
