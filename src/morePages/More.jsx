import { useEffect, useState } from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";
import style from "./More.module.css"
import { useDispatch, useSelector } from "react-redux";
import { showUser } from "../store/UserSlice";

function More() {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const dispatch = useDispatch()

    const loggedInUser = JSON.parse(localStorage.getItem("details"))

    useEffect(() => {
        dispatch(showUser())
    }, [])

    const { users } = useSelector(state => state.user)

    const loggedInuserDetails = loggedInUser && users.find(ele => ele.id === loggedInUser.id)

    return (
        <div>
            <p onClick={handleClick}>
                More
            </p>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                sx={{ marginTop: "1rem" }}
            >
                <Link to="/cart" className={style.link}><MenuItem onClick={handleClose}>Cart</MenuItem></Link>
                <Link to={loggedInuserDetails ? "/AddBooks" : "/logIn"} className={style.link}><MenuItem onClick={handleClose}>Add books</MenuItem></Link>
            </Menu>
        </div>

    )
}

export default More;
