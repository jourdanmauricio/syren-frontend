import styles from './AboutPage.module.css';
import profileImg from '@/assets/images/laura-rodriguez.webp';
import profileImg2 from '@/assets/images/laura-rodriguez2.webp';

const AboutPage = () => {
  return (
    <div className="page">
      <section className="section">
        <header>
          <h2 className={styles.title}>Doctora Laura Rodiguez</h2>

          <p className={styles.paragraph}>
            Las necesidades de las mujeres cambian a lo largo de la vida, y cada
            etapa presenta sus propios desafíos y oportunidades. Es por eso que
            mi enfoque como profesional de la salud se basa en la atención
            personalizada e integral.
          </p>
        </header>

        <section className={styles.section__about}>
          <article>
            <ul className="classic-list">
              <li>
                Licenciada en Medicina por la Universidad Nacional de La Plata
              </li>
              <li>Especialista en Ginecología, Obstetricia y Sexología</li>
              <li>Autora de decenas de artículos científicos</li>
              <li>Email: info@laurarodriguez.com.ar</li>
            </ul>
          </article>

          <article>
            <img
              className={styles.image}
              src={profileImg}
              alt="Imagen de la sección 1"
            />
          </article>
        </section>

        <section
          className={`${styles.section__about} ${styles.section__reverse}`}
        >
          <article>
            <p>
              Me mantengo en constante{' '}
              <strong>formación y desarrollo profesional</strong> para estar al
              día con los últimos avances en ginecología integrativa y medicina
              antienvejecimiento. Mi objetivo es encontrar la solución perfecta
              para cada una de mis pacientes, y para ello, no solo utilizo la
              tecnología más avanzada del mercado, sino que también trabajo en
              colaboración con otros profesionales de la salud.
            </p>
          </article>
          <article className="">
            <img
              className={styles.image}
              src={profileImg2}
              alt="Imagen de la sección 1"
            />
          </article>
        </section>

        <p className={styles.paragraph}>
          Mis tratamientos no solo se enfocan en los síntomas específicos, sino
          que también abordan las causas subyacentes y los factores que pueden
          afectar la <strong>salud general de la mujer</strong>. Mi objetivo es
          ayudarte a alcanzar tu máximo potencial de salud y bienestar en cada
          etapa de tu vida. A través de un enfoque integral y personalizado, te
          acompañaré en tu camino hacia una vida más saludable y plena.
        </p>
      </section>
    </div>
  );
};
export default AboutPage;
