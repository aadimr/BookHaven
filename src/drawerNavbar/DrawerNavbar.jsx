import { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import style from "./DrawerNavbar.module.css"
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import { pagesName } from './drawerNavbarLinkData';
import { showUser } from "../store/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import SearchPanel from '../header/searchPanel/SearchPanel';

function DrawerNavbar() {

    const [state, setState] = useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const dispatch = useDispatch()

    const loggedInuserName = JSON.parse(localStorage.getItem('details'));

    const { users } = useSelector(state => state.user)

    useEffect(() => {
        dispatch(showUser())
    }, [dispatch])

    const showLoggedInUser = loggedInuserName ? users.find(ele => ele.id === loggedInuserName.id) : null

    const list = (anchor) => (
        <Box
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {pagesName.map((ele, index) => (
                    <ListItem key={index} disablePadding>
                        <Link to={ele.to} className={style.pages}>
                            <ListItemButton>
                                <ListItemIcon className={style.icon} sx={
                                    (showLoggedInUser && index === 0) || (!showLoggedInUser && index === pagesName.length - 1)
                                    ? { display: "none" } : null
                                }>
                                    <span>{ele.icon}</span>
                                </ListItemIcon>
                                {
                                    showLoggedInUser && index === 0 ? <Link to={"/"} className={style.link}><span><AccountCircle sx={{fontSize:"2rem",marginTop:"5px"}}/></span>{showLoggedInUser.user_Name}</Link> :
                                        <ListItemText sx={!showLoggedInUser && index === pagesName.length - 1 ? { display: "none" } : null}>
                                            {ele.name}
                                        </ListItemText>
                                }
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    )

    return (
        <div className={style.wrapper}>
            {['left'].map((anchor) => (
                <div key={anchor}>
                    <MenuIcon onClick={toggleDrawer(anchor, true)} sx={{ marginLeft: "15px", fontSize: "2rem" }} />
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        sx={{width:"1000px"}}
                    >
                        {list(anchor)}
                    </Drawer>
                </div>
            ))}
              <SearchPanel/>
        </div>
    );
}

export default DrawerNavbar;



