import Buttons from "../components/button/Button";
import style from "./Header.module.css"
import Cart from "../components/cart/Cart";
import SearchPanel from "./searchPanel/SearchPanel";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={style.mainContainer}>
      <img src={process.env.PUBLIC_URL + '/bookHavenLogo.png'} alt="error" className={style.img} />
      <SearchPanel/>
      <div className={style.cartBtn}>
        <Cart />
        <Link to="/logIn">
        <Buttons sx={{
          marginRight: "8rem",
          height: "3.5rem",
          borderRadius: "5rem",
          width: "8rem",
          textTransform: "capitalize",
          fontSize: "1.3rem",
          backgroundColor: "#3E8ED0",
          color:"black",
          '&:hover': {
            backgroundColor: "#C8E2F7",
          },
        }} name={"Sign in"} />
        </Link>
      </div>
    </div>
  )
}

export default Header;
