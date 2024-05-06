import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '@/assets/icons/logo.svg';
import menu from '@/assets/icons/menu.svg';
import UserNavbar from './UserNavbar';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuRef]);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={styles.nav}>
      <div
        style={{ display: showMenu ? 'block' : 'none' }}
        className={styles.menu__back}
      ></div>

      <NavLink
        to="/syren-frontend/"
        className={styles.logo}
      >
        <img
          width="40"
          height="40"
          src={logo}
          alt="Logo"
        />
        <h1>Syren</h1>
      </NavLink>

      <ul
        className={styles.menu}
        style={{ right: showMenu ? '0' : '-100%' }}
      >
        <li className={styles.menu__item}>
          <NavLink to="/syren-frontend/">Home</NavLink>
        </li>
        <li className={styles.menu__item}>
          <NavLink to="/syren-frontend/about">About</NavLink>
        </li>
        <li className={styles.menu__item}>
          <NavLink to="/syren-frontend/treatments">Tratamientos</NavLink>
        </li>
        <li className={styles.menu__item}>
          <NavLink to="/syren-frontend/my-appointments">Mis turnos</NavLink>
        </li>
        <li className={styles.menu__item}>
          <NavLink to="/syren-frontend/contact">Contacto</NavLink>
        </li>
      </ul>
      <UserNavbar />
      <button
        onClick={handleShowMenu}
        className={styles.menu__mobile}
        ref={menuRef}
      >
        <img
          width="40"
          height="40"
          src={menu}
          alt="Menu Mobile"
        />
      </button>
    </nav>
  );
};

export default Navbar;
