import { Outlet, Navigate } from "react-router-dom";
import { useShopiContext } from "../Context/ShopiContext";


const PrivateRoutes = () => {
    
    const { signOut } = useShopiContext();
    
    return (
        !signOut ? <Outlet /> : <Navigate to="/sign-in" />
    );
}


export default PrivateRoutes;