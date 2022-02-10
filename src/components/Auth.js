/* eslint-disable react/prop-types */
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { loadCurrentUser } from '../redux/auth';

// proper Authenticated when the user login
const Auth = ({ children }) => {
  const location = useLocation();
  const isAuthenticated = useSelector(loadCurrentUser);

  if (!isAuthenticated) {
    return <Navigate to="/users/login" state={{ from: location }} />;
  }

  return children;
};

export const AuthRoute = ({ children }) => {
  const location = useLocation();
  const isAuthenticated = useSelector(loadCurrentUser);

  if (isAuthenticated) {
    const from = location.state?.from || { pathname: '/' };
    return <Navigate to={from} />;
  }

  return children;
};

export default Auth;
