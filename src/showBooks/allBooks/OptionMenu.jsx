import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { deleteBook } from '../../store/BooksSlice';
import { Link } from "react-router-dom"
import style from "./OptionMenu.module.css"

function OptionMenu({ id }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const dispatch = useDispatch()

    function handleOnClick(id) {
        dispatch(deleteBook(id))
        console.log(id)
        handleClose()
    }

    return (
        <div>
            <p onClick={handleClick}>
                <BiDotsVerticalRounded />
            </p>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                sx={{ marginTop: "1rem", display: "none" }}
            >
                <Link to={`/edit/${id}`} className={style.link}><MenuItem onClick={handleClose}>Edit</MenuItem></Link>
                <MenuItem onClick={() => handleOnClick(id)}>Delete</MenuItem>
            </Menu>
        </div>
    )
}

export default OptionMenu;
