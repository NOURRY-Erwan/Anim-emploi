
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppContext } from '../hooks/useAppContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  adminOnly?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, adminOnly = false }) => {
  const { currentUser } = useAppContext();
  const location = useLocation();

  if (!currentUser) {
    // Redirect them to the login page, saving the current location.
    return <Navigate to="/connexion" state={{ from: location }} replace />;
  }

  if (adminOnly && currentUser.role !== 'admin') {
     // If it's an admin-only route and the user is not an admin, redirect them.
     // Maybe to their account page or home.
    return <Navigate to="/mon-compte" replace />;
  }
  
  // If the route is not admin-only, but the user is an admin trying to access a user page (like /mon-compte)
  // we can redirect them to their dashboard. This is optional but good UX.
  if (!adminOnly && currentUser.role === 'admin' && location.pathname === '/mon-compte') {
    return <Navigate to="/admin/dashboard" replace />;
  }


  return <>{children}</>;
};

export default ProtectedRoute;
