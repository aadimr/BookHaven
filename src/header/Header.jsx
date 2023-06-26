import Buttons from "../components/button/Button";
import Input from "../components/input/Input";
import style from "./Header.module.css"
import Cart from "../components/cart/Cart";
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div className={style.mainContainer}>
      <img src={process.env.PUBLIC_URL + '/bookHavenLogo.png'} alt="error" className={style.img} />
      <div className={style.inputDiv}>
        <Input className={style.input} placeholder={"Search book by author or publisher"} />
        <SearchIcon className={style.searchLogo} />
      </div>
      <div className={style.cartBtn}>
        <Cart />
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
      </div>
    </div>
  )
}

export default Header;
