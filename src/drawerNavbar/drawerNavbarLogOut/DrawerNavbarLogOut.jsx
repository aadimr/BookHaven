
function DrawerNavbarLogOut() {

    function handleLogOut() {
        localStorage.clear()
    }

    return (
        <div>
        <p onClick={handleLogOut}>LogOut</p>
        </div>
    )
}

export default DrawerNavbarLogOut;
