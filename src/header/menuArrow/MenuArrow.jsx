import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useNavigate } from 'react-router-dom';

function MenuArrow() {

    const navigate = useNavigate()

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    function handleLogOut(){
        localStorage.clear()
        handleClose()
        navigate("/")
    }

    return (
        <div>
            <p onClick={handleClick}>
                <KeyboardArrowDownIcon sx={{ color: "#3E8ED0", marginTop: ".5rem", cursor: "pointer" }} />
            </p>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleLogOut}>LogOut</MenuItem>
            </Menu>
        </div>
    )
}

export default MenuArrow;
