import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    let isLoggedIn = JSON.parse(localStorage.getItem("details"))
    return(
        isLoggedIn ? <Outlet/> : <Navigate to="/login"/>
    )
}

export const PrivateRoutesForLogInAndSingUp = () => {
    let isLoggedIn = JSON.parse(localStorage.getItem("details"))
    return(
        isLoggedIn ? <Navigate to="/"/> : <Outlet/>
    )
}



export default PrivateRoutes;