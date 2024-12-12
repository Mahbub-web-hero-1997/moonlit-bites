import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../ContextAPI/AuthProvider";


const PrivateRoute = ({ children }) => {
    const {user}=useContext(AuthContext)
    
    if (user) {
        return children
    }

    else{
        return <Navigate to="/login"/>
    }
};

export default PrivateRoute;