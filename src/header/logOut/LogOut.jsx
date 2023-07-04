import Buttons from "../../components/button/Button"
import { Link } from 'react-router-dom';
import style from "./LogOut.module.css"
import MenuArrow from "../menuArrow/MenuArrow";


function LogOut() {

    const loggedInuserName = JSON.parse(localStorage.getItem('details'));

    return (
        <div>
            {loggedInuserName ? <div className={style.nameAndArrow}><p className={style.LoggedInuserName}>{loggedInuserName.user_Name}</p><span><MenuArrow /></span></div> :
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
