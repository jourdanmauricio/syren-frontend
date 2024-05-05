import styles from './HeroTitle.module.css';

const HeroTitle = () => {
  return (
    <div className={styles.content__title}>
      <h2>Syren,</h2>

      <div className={styles.content__rotate}>
        <ul>
          <li>Tratamientos laser</li>
          <li>Ginecología</li>
          <li>Sexología</li>
        </ul>
      </div>
    </div>
  );
};
export default HeroTitle;
