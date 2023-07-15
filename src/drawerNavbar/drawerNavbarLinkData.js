import HomeIcon from '@mui/icons-material/Home';
import CategoryIcon from '@mui/icons-material/Category';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import LoginIcon from '@mui/icons-material/Login';
import RoundaboutLeftIcon from '@mui/icons-material/RoundaboutLeft';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import LogoutIcon from '@mui/icons-material/Logout';
import DrawerNavbarLogOut from './drawerNavbarLogOut/DrawerNavbarLogOut';

export const pagesName = [
    {to: "/logIn", name: "SingUp", icon: <LoginIcon sx={{fontSize:"2rem", color:"#3E8ED0"}}/>},
    { to: "/", name: "Home", icon: <HomeIcon sx={{fontSize:"2rem", color:"#3E8ED0"}}/>},
    { to: "/categories", name: "Categories", icon: <CategoryIcon sx={{fontSize:"2rem", color:"#3E8ED0"}}/>},
    { to: "/about", name: "About", icon: <RoundaboutLeftIcon sx={{fontSize:"2rem", color:"#3E8ED0"}}/>},
    { to: "/cart", name: "Cart", icon: <AddShoppingCartIcon sx={{fontSize:"2rem", color:"#3E8ED0"}}/>},
    { to: "/AddBooks", name: "AddBook", icon: <ImportContactsIcon sx={{fontSize:"2rem", color:"#3E8ED0"}}/>},
    { to: "/contect", name: "Contect", icon: <PermContactCalendarIcon sx={{fontSize:"2rem", color:"#3E8ED0"}}/>},
    { name: <DrawerNavbarLogOut/>, icon: <LogoutIcon sx={{fontSize:"2rem", color:"#3E8ED0"}}/>},
] 