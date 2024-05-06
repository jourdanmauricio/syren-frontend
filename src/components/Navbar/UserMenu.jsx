import { initialState } from '@/helpers/constants';
import { setUserAppointments, setUserData } from '@/redux/user.slice';
import styles from './UserNavbar.module.css';
import { useDispatch } from 'react-redux';

const UserMenu = ({ handleNavigate }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setUserData(initialState.userData));
    dispatch(setUserAppointments(initialState.userAppointments));
    handleNavigate('/syren-frontend/');
  };
  return (
    <div className={styles.dropdown__menu}>
      <button
        onClick={() => handleNavigate('/syren-frontend/profile')}
        className={styles.auth__btn}
      >
        Mi perfil
      </button>
      <button
        onClick={() => handleNavigate('/syren-frontend/my-appointments')}
        className={styles.auth__btn}
      >
        Mis turnos
      </button>
      <button
        onClick={handleLogout}
        className={styles.auth__btn}
      >
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
