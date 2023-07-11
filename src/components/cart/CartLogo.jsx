import { Link } from "react-router-dom";
import Badge from '@mui/material/Badge';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useEffect } from "react";
import { showUser } from "../../store/UserSlice";
import { useDispatch, useSelector } from "react-redux";

function CartLogo() {

  const dispatch = useDispatch()

  const isLoggedIn = JSON.parse(localStorage.getItem("details"))

  useEffect(() => {
       dispatch(showUser())
  },[])

  const { users } = useSelector(state => state.user)

  const loggedInUserDetails = isLoggedIn && users.find(ele => ele.id === isLoggedIn.id)


  return (
    <div>
      <Link to="/cart">
          <Badge badgeContent={loggedInUserDetails ? loggedInUserDetails.addCart.length:null} color="error">
            <AddShoppingCartIcon sx={{fontSize:"2.2rem",color:" #3E8ED0"}}/>
          </Badge>
        </Link>
    </div>
  )
}

export default CartLogo;
