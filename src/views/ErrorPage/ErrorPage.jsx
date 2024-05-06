import { Link } from 'react-router-dom';
import styles from './ErrorPage.module.css';
const ErrorPage = () => {
  return (
    <>
      <div className={styles.background}>
        <img
          src="https://res.cloudinary.com/dn7npxeof/image/upload/v1710620143/Henry/PM3-laser-appointments/back-404_xtxvwi.webp"
          alt=""
        />
      </div>
      <section className={styles.container}>
        <h2 className={styles.title}>404</h2>
        <p className={styles.paragraph}>¡UPS!</p>
        <p className={styles.paragraph}>PÁGINA NO ENCONTRADA</p>
        <button className={`btn ${styles.btn__home}`}>
          <Link to="/syren-frontend/">Ir al inicio</Link>
        </button>
      </section>
    </>
  );
};
export default ErrorPage;
