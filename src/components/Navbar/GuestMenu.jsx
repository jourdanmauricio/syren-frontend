import styles from './UserNavbar.module.css';
const GuestMenu = ({ handleNavigate }) => {
  return (
    <div className={styles.dropdown__menu}>
      <button
        onClick={() => handleNavigate('/login')}
        className={styles.auth__btn}
      >
        Login
      </button>
      <button
        onClick={() => handleNavigate('/register')}
        className={styles.auth__btn}
      >
        Registro
      </button>
    </div>
  );
};
export default GuestMenu;
