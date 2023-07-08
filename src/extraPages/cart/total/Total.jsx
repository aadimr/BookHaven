import style from "./Total.module.css"
import Buttons from "../../../components/button/Button"
import { showUser } from "../../../store/UserSlice"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

function Total() {

  const dispatch = useDispatch()

  const user = JSON.parse(localStorage.getItem("details"))

  const { users } = useSelector(state => state.user)

  useEffect(() => {
      dispatch(showUser())
  }, [])

  const showLoggedInUser = user ? users.find(ele => ele.id === user.id) : null

  const cartItemAmt = showLoggedInUser.addCart
  const totalAmount = cartItemAmt.length ? cartItemAmt.map(ele => ele.price*ele.quantity).reduce((x, y) => +x + +y):null;

  return (
    <div className={style.wrapper}>
      <h2 className={style.header}>Order Now</h2>
      <div className={style.subTotalAndItem}>
        <p>ITEMS</p>
        <p>{cartItemAmt.length}</p>
      </div>
      <div className={style.subTotalAndItem}>
        <p>SUB TOTAL</p>
        <p>₹{totalAmount}</p>
      </div>
      <Buttons sx={{
        display: "flex",
        margin: "2rem 2rem 0rem 2rem",
        width: "25vw",
        height:"7vh",
        borderRadius: "2rem",
        fontSize: "1.3rem",
        backgroundColor: "#3E8ED0",
        color: "black",
        textTransform: "capitalize",
        '&:hover': {
            backgroundColor: "#C8E2F7",
        },
      }}
      name={"Pay now"}
      />
    </div>
  )
}

export default Total;