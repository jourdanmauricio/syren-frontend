import styles from './socialNetworks.module.css';
import facebook from '@/assets/icons/facebook.svg';
import instagram from '@/assets/icons/instagram.svg';
import whatsapp from '@/assets/icons/whatsapp.svg';

const SocialNetworks = () => {
  return (
    <div className={styles.social__container}>
      <a
        href="#"
        target="_blank"
      >
        <img
          width="30"
          height="30"
          src={facebook}
          alt="Link to Facebook"
        />
      </a>
      <a
        href="#"
        target="_blank"
      >
        <img
          width="30"
          height="30"
          src={instagram}
          alt="Link to Instagram"
        />
      </a>
      <a
        href="#"
        target="_blank"
      >
        <img
          width="30"
          height="30"
          src={whatsapp}
          alt="Link to Whatsapp"
        />
      </a>
    </div>
  );
};
export default SocialNetworks;
