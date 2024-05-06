import SocialNetworks from '../SocialNetworks/SocialNetworks';
import styles from './Hero.module.css';
import HeroBackImages from './HeroBackImages';
import HeroTitle from './HeroTitle';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.wave}>
        <div className={styles.shape}>
          <img
            src="https://res.cloudinary.com/dn7npxeof/image/upload/v1709671944/Henry/PM3-laser-appointments/hero-wave_c49slw.png"
            alt="Background Wave"
          />
        </div>

        <div className={styles.content}>
          <HeroTitle />

          <p>
            Empoderando la feminidad, cuidando integralmente tu bienestar con
            elegancia y experiencia única.
          </p>

          <button>
            <Link to="/syren-frontend//new-appointment">Agendar cita</Link>
          </button>
        </div>

        <HeroBackImages />

        <div className={styles.social__networks}>
          <SocialNetworks />
        </div>
      </div>
    </div>
  );
};
export default Hero;
