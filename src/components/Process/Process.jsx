import styles from './Process.module.css';
import step1 from '@/assets/icons/paso1.png';
import step2 from '@/assets/icons/paso2.png';
import step3 from '@/assets/icons/paso3.png';
import { Link } from 'react-router-dom';

const Process = () => {
  return (
    <section className={styles.process}>
      <h2 className="title">¿COMO ES EL PROCESO DEL TRATAMIENTO?</h2>

      <div className={`section ${styles.container}`}>
        <div className={styles.process__card}>
          <div className={styles.card__header}>
            <img
              src={step1}
              alt="Agendar Cita"
            />
            <h3>Paso 1</h3>
          </div>
          <p className={styles.card__content}>
            Agrenda una cita gratuita para tu consulta médica inicial.
            <button className={`btn ${styles.agendar__btn}`}>
              <Link to="/syren-frontend//new-appointment">Agendar cita</Link>
            </button>
          </p>
        </div>
        <div className={styles.process__card}>
          <div className={styles.card__header}>
            <img
              src={step2}
              alt="Agendar Cita"
            />
            <h3>Paso 2</h3>
          </div>
          <p className={styles.card__content}>
            Un médico especialista atenderá la consulta conversando sobre los
            síntomas en profundidad y evaluando cada caso.
          </p>
        </div>
        <div className={styles.process__card}>
          <div className={styles.card__header}>
            <img
              src={step3}
              alt="Agendar Cita"
            />
            <h3>Paso 3</h3>
          </div>
          <p className={styles.card__content}>
            En base a la información que el médico te proporcionará, vas a poder
            elegir si querés avanzar con uno de nuestros tratamientos.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Process;
