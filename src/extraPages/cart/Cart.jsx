import style from "./Cart.module.css"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ClearIcon from '@mui/icons-material/Clear';
import Total from "./total/Total";
import { updateUserCartItemQuantity } from "../../store/UserSlice";
import { useDispatch } from "react-redux"

function Cart() {

  const dispatch = useDispatch()

  const isLogIn = JSON.parse(localStorage.getItem("details"))

  function handleClickInc(id) {
    const inc = isLogIn.addCart.find(ele => ele.id === id)
    inc.quantity += 1
    dispatch(updateUserCartItemQuantity(isLogIn))
    localStorage.setItem("details", JSON.stringify(isLogIn))
  }

  function handleClickDec(id){
    const dec = isLogIn.addCart.find(ele => ele.id === id)
    if(dec.quantity > 1){
      dec.quantity -= 1
    }
    dispatch(updateUserCartItemQuantity(isLogIn))
    localStorage.setItem("details", JSON.stringify(isLogIn))
  }

  return (
    <div className={style.wrapper}>
      {isLogIn && isLogIn.addCart.length ?
        <div className={style.cartItemWrapper}>
          <div className={style.cartItems}>
            {
              isLogIn.addCart.map((ele) => (
                <div className={style.itemWrapper}>
                  <div className={style.clearIcon}><ClearIcon /></div>
                  <div className={style.itemDetails}>
                    <div>
                      <img src={ele.img} className={style.img} />
                      <p><span className={style.bookAndAuthorname}>Book name: </span>{ele.book_Name}</p>
                      <p><span className={style.bookAndAuthorname}>Author name: </span>{ele.author_Name}</p>
                    </div>
                    <div className={style.incAndDec}>
                      <AddIcon onClick={() => handleClickInc(ele.id)} sx={{ backgroundColor: "#3E8ED0", width: "2rem", height: "2.5rem", borderRadius: ".5rem", color: "white" }} />
                      <h2>{ele.quantity}</h2>
                      <RemoveIcon onClick={() => handleClickDec(ele.id)} sx={{ backgroundColor: "#3E8ED0", width: "2rem", height: "2.5rem", borderRadius: ".5rem", color: "white" }} />
                    </div>
                    <p className={style.p}>₹{ele.price}</p>
                  </div>
                </div>
              ))
            }
          </div>
          <div className={style.total}>
            <Total />
          </div>
        </div>
        :
        <div className={style.emptyCart}>
          <p>Add something to cart</p>
        </div>
      }
    </div>
  )
}

export default Cart;
