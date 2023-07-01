import { useState } from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";
import style from "./More.module.css"

function More() {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

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
                <MenuItem onClick={handleClose}>Cart</MenuItem>
                <Link to="/AddBooks" className={style.link}><MenuItem onClick={handleClose}>Add books</MenuItem></Link>
            </Menu>
        </div>

    )
}

export default More;
