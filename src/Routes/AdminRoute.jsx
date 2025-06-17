
import React, { Children, useContext, useEffect } from 'react';
import { AuthContext } from '../ContextAPI/AuthProvider';

import { Navigate, useLocation } from 'react-router-dom';


const AdminRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading, handleSignOut } = useContext(AuthContext)
  const isAdmin = user.role === 'admin';
  if (loading) {
    return <progress className='progress w-56'></progress>
  }
  if (user && isAdmin) {
    return children
  }
  useEffect(() => {
    if (user && !isAdmin) {
      handleSignOut();
    }
  }, [user, isAdmin, handleSignOut]);
  return <Navigate to="/login" state={{ from: location }} replace />

};

export default AdminRoute;