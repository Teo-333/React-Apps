import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext'; 
import Order from '../pages/Order/Main/Main';

const PrivateRoute: React.FC = () => {
  const { currentUser } = useAuth();

  return currentUser ? <Order /> : <Navigate to="/login" />;
};

export default PrivateRoute;
