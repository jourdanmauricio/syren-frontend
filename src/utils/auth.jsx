import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const AuthRoute = (props) => {
  const isLogged = useSelector((state) => state.currentUser.userData.isLogged);
  if (!isLogged) {
    return <Navigate to="/login" />;
  }
  return props.children;
};

const AuthRouteLogin = (props) => {
  const isLogged = useSelector((state) => state.currentUser.userData.isLogged);
  if (isLogged) {
    return (
      <Navigate
        to="/"
        replace
      />
    );
  }
  return props.children;
};

const AdminRoute = (props) => {
  const role = useSelector((state) => state.currentUser.userData.user.role);

  if (role !== 'admin') {
    return (
      <Navigate
        to="/"
        replace
      />
    );
  }
  return props.children;
};

export { AdminRoute, AuthRouteLogin, AuthRoute };
