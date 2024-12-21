import { useQuery } from '@tanstack/react-query';
import React, { Children, useContext } from 'react';
import { AuthContext } from '../ContextAPI/AuthProvider';
import UseAdmin from '../CustomHook/UseAdmin';
import { useLocation } from 'react-router-dom';


const AdminRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = UseAdmin()
    if (loading || isAdminLoading) {
        return <progress className='progress w-56'></progress>
    }
    if (user&& isAdmin) {
        return children
    }
     return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;