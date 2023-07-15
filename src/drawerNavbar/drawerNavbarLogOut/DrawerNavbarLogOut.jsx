import { useNavigate } from 'react-router-dom';

function DrawerNavbarLogOut() {

    const navigate = useNavigate()

    function handleLogOut() {
        localStorage.clear()
        navigate("/logIn")
    }

    return (
        <div>
        <p onClick={handleLogOut}>LogOut</p>
        </div>
    )
}

export default DrawerNavbarLogOut;
