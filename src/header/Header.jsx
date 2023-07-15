import style from "./Header.module.css"
import CartLogo from "../components/cart/CartLogo";
import SearchPanel from "./searchPanel/SearchPanel";
import LogOut from "./logOut/LogOut";
import { Link } from "react-router-dom";

function Header() {

  return (
    <div className={style.mainContainer}>
      <Link to={"/"}><img src={process.env.PUBLIC_URL + '/bookHavenLogo.png'} alt="error" className={style.img} /></Link>
      <SearchPanel/>
      <div className={style.cartBtn}>
        <CartLogo />
        <LogOut/>
      </div>
    </div>
  )
}

export default Header;
