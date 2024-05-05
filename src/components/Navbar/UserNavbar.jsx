import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import userMenu from '@/assets/icons/user.svg';
import UserImage from '@/components/UserImage/UserImage';
import GuestMenu from './GuestMenu';
import UserMenu from './UserMenu';
import styles from './UserNavbar.module.css';

const UserNavbar = () => {
  const isLogged = useSelector((state) => state.currentUser.userData.isLogged);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuRef]);

  const handleUserMenu = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleNavigate = (route) => {
    setDropdownVisible(false);
    navigate(route);
  };
  return (
    <div
      className={styles.container__dropdown}
      ref={menuRef}
    >
      <button
        onClick={handleUserMenu}
        className={styles.user__menu}
      >
        {!isLogged ? (
          <>
            <img
              width="25"
              height="25"
              src={userMenu}
              alt="Menu Mobile"
            />
            <span>Ingresar</span>
          </>
        ) : (
          <UserImage />
        )}
      </button>
      {dropdownVisible && (
        <>
          {!isLogged ? (
            <GuestMenu handleNavigate={handleNavigate} />
          ) : (
            <UserMenu handleNavigate={handleNavigate} />
          )}
        </>
      )}
    </div>
  );
};
export default UserNavbar;
