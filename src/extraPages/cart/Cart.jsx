import style from "./Cart.module.css"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ClearIcon from '@mui/icons-material/Clear';
import Total from "./total/Total";
import { updateUserCartItemQuantity } from "../../store/UserSlice";
import { useDispatch, useSelector } from "react-redux"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { showUser } from "../../store/UserSlice";
import { useEffect } from "react";

function Cart() {

  const notifyOfInc = () => toast.success("Quantity increased successfully", {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  });

  const notifyOfDec = () => toast.success("Quantity decreased successfully", {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  });

  const notifyOfDelete = () => toast.success("Item Deleted successfully", {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  });

  const dispatch = useDispatch()

  const isLogIn = JSON.parse(localStorage.getItem("details"))

  const { users } = useSelector(state => state.user)

  useEffect(() => {
    dispatch(showUser())
  }, [])

  const showLoggedInUser = isLogIn ? users.find(ele => ele.id === isLogIn.id) : null

  function handleClickInc(id) {
    const incIndex = showLoggedInUser.addCart.findIndex(ele => ele.id === id);
    if (incIndex !== -1) {
      const updatedCart = [...showLoggedInUser.addCart];
      const updatedItem = {
        ...updatedCart[incIndex],
        quantity: updatedCart[incIndex].quantity + 1
      };
      updatedCart[incIndex] = updatedItem;
      const updatedUser = {
        ...showLoggedInUser,
        addCart: updatedCart
      };
      dispatch(updateUserCartItemQuantity(updatedUser));
      notifyOfInc();
    }
  }

  function handleClickDec(id) {
    const decIndex = showLoggedInUser.addCart.findIndex(ele => ele.id === id);
    if (decIndex !== -1 && showLoggedInUser.addCart[decIndex].quantity > 1) {
      const updatedCart = [...showLoggedInUser.addCart];
      updatedCart[decIndex] = {
        ...updatedCart[decIndex],
        quantity: updatedCart[decIndex].quantity - 1
      };
      const updatedUser = {
        ...showLoggedInUser,
        addCart: updatedCart
      };
      dispatch(updateUserCartItemQuantity(updatedUser));
      notifyOfDec();
    }
  }

  function handleClickDelete(id) {
    if (showLoggedInUser) {
      const updatedCart = showLoggedInUser.addCart.filter(ele => ele.id !== id)
      const updatedUser = {
        ...showLoggedInUser,
        addCart: updatedCart
      };
      dispatch(updateUserCartItemQuantity(updatedUser));
      notifyOfDelete()
    }
  }


  return (
    <div className={style.wrapper}>
      <ToastContainer />
      {showLoggedInUser && showLoggedInUser.addCart.length ?
        <div className={style.cartItemWrapper}>
          <div className={style.cartItems}>
            {
              showLoggedInUser.addCart.map((ele) => (
                <div className={style.itemWrapper} key={ele.id}>
                  <div className={style.clearIcon}><ClearIcon sx={{ cursor: "pointer" }} onClick={() => handleClickDelete(ele.id)} /></div>
                  <div className={style.itemDetails}>
                    <div>
                      <img src={ele.img} className={style.img} />
                      <p><span className={style.bookAndAuthorname}>Book name: </span>{ele.book_Name}</p>
                      <p><span className={style.bookAndAuthorname}>Author name: </span>{ele.author_Name}</p>
                    </div>
                    <div className={style.incAndDec}>
                      <AddIcon onClick={() => handleClickInc(ele.id)} sx={{ backgroundColor: "#3E8ED0", width: "2rem", height: "2.5rem", borderRadius: ".5rem", color: "white", cursor: "pointer" }} />
                      <h2>{ele.quantity}</h2>
                      <RemoveIcon onClick={() => handleClickDec(ele.id)} sx={{ backgroundColor: "#3E8ED0", width: "2rem", height: "2.5rem", borderRadius: ".5rem", color: "white", cursor: "pointer" }} />
                    </div>
                    <p className={style.p}>₹{ele.price * ele.quantity}</p>
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
