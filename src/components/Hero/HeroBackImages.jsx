import styles from './HeroBackImages.module.css';

const HeroBackImages = () => {
  return (
    <div className={styles.image__container}>
      <img
        className={styles.image}
        src="https://res.cloudinary.com/dn7npxeof/image/upload/v1709690526/Henry/PM3-laser-appointments/hero-medico-1_rpxxnf.webp"
      />
      <img
        className={styles.image}
        src="https://res.cloudinary.com/dn7npxeof/image/upload/v1709685126/Henry/PM3-laser-appointments/hero-medico-3_oy0nhg.webp"
      />
      <img
        className={styles.image}
        src="https://res.cloudinary.com/dn7npxeof/image/upload/v1709685126/Henry/PM3-laser-appointments/hero-medico-2_xaqjgh.webp"
      />
    </div>
  );
};
export default HeroBackImages;
