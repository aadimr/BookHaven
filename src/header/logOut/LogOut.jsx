import Buttons from "../../components/button/Button"
import { Link } from 'react-router-dom';
import style from "./LogOut.module.css"
import MenuArrow from "../menuArrow/MenuArrow";
import { showUser } from "../../store/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


function LogOut() {
    const dispatch = useDispatch()

    const loggedInuserName = JSON.parse(localStorage.getItem('details'));

    const { users } = useSelector(state => state.user)

    useEffect(() => {
        dispatch(showUser())
    }, [])

    const showLoggedInUser = loggedInuserName ? users.find(ele => ele.id === loggedInuserName.id) : null

    return (
        <div>
            {showLoggedInUser ? <div className={style.nameAndArrow}><p className={style.LoggedInuserName}>{showLoggedInUser.user_Name}</p><span><MenuArrow /></span></div> :
                <Link to="/logIn">
                    <Buttons sx={{
                        marginRight: "8rem",
                        height: "3.5rem",
                        borderRadius: "5rem",
                        width: "8rem",
                        textTransform: "capitalize",
                        fontSize: "1.3rem",
                        backgroundColor: "#3E8ED0",
                        color: "black",
                        '&:hover': {
                            backgroundColor: "#C8E2F7",
                        },
                    }} name={"Sign in"} />
                </Link>
            }
        </div>
    )
}

export default LogOut;
