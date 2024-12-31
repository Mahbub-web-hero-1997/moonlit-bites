import { useQuery } from '@tanstack/react-query';
import React, { Children, useContext } from 'react';
import { AuthContext } from '../ContextAPI/AuthProvider';
import UseAdmin from '../CustomHook/UseAdmin';
import { Navigate, useLocation } from 'react-router-dom';


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
    //  return <Navigate to="/login" state={{ from: location }} replace />;

    return (
      <div className="w-full flex flex-col items-center justify-center text-4xl">
            <img
                className='w-1/2 h-96'
          src={
            'https://img.freepik.com/free-vector/401-error-unauthorized-concept-illustration_114360-1934.jpg?t=st=1734850769~exp=1734854369~hmac=fcb9ac35e7f1927a058ff18493d52951d98f1fd7f1234b6706b974e0f098363c&w=740'
          }
          alt=""
        />
      </div>
    );
};

export default AdminRoute;