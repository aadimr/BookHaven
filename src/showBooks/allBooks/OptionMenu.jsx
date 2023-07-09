import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { deleteBook } from '../../store/BooksSlice';
import { Link } from "react-router-dom"
import style from "./OptionMenu.module.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function OptionMenu({ id, styles }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const dispatch = useDispatch()

    // const bookDeletednotify = () => toast.success('Book deleted successfully', {
    //     position: "bottom-left",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //     });

    function handleOnClick(id) {
        dispatch(deleteBook(id))
        handleClose()
    }

    return (
        <div>
            <ToastContainer />
            <p onClick={handleClick}>
                <BiDotsVerticalRounded style={styles} />
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
                <Link to={`/edit/${id}`} className={style.link}><MenuItem onClick={handleClose}>Edit</MenuItem></Link>
                <MenuItem onClick={() => handleOnClick(id)}>Delete</MenuItem>
            </Menu>
        </div>
    )
}

export default OptionMenu;
