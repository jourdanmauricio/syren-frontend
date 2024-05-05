import styles from './Footer.module.css';
import localization from '@/assets/icons/location.svg';
import phone from '@/assets/icons/phone.svg';
import mail from '@/assets/icons/mail.svg';

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer__section}>
          <div className={styles.logo}>
            <h3>Syren</h3>
          </div>

          <p>
            Contamos con un equipo médico altamente calificado y con amplia
            experiencia en cada una de las áreas que ofrecemos.
          </p>
        </div>
        <div className={styles.footer__section}>
          <h3>Contacto</h3>
          <div className={styles.footer__contact}>
            <div>
              <div className={styles.contact}>
                <img
                  width="25"
                  height="25"
                  src={localization}
                  alt=""
                />
                <p>Diagonal 74 nro 1352</p>
              </div>
            </div>
            <div className={styles.contact}>
              <img
                width="25"
                height="25"
                src={phone}
                alt=""
              />
              <p>0221 455 5555</p>
            </div>
            <div className={styles.contact}>
              <img
                width="25"
                height="25"
                src={mail}
                alt=""
              />
              <p>turnos@syren.com</p>
            </div>
          </div>
        </div>
        <div className={styles.footer__section}>
          <h3>Horarios</h3>

          <p className={styles.hours}>Lunes a viernes: 8 a 18 hs</p>
          <hr />
          <p>Sábados: 8 a 13 hs</p>
          <hr />
        </div>
      </footer>
      <div className={styles.author}>
        <small>© 2024 Syren. Derechos reservados</small>
      </div>
    </>
  );
};
export default Footer;
