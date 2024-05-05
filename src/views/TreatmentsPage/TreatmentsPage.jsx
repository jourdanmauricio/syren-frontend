import treatment from '@/assets/images/treatment.webp';
import styles from './TreatmentsPage.module.css';
const TreatmentsPage = () => {
  return (
    <div className="page">
      <section className="section">
        <header>
          <h2 className="title">Láser Ginecológico</h2>
          <p className="sub-title">Una Nueva Era en la Salud Femenina</p>
        </header>
        <div className={styles.content}>
          <img
            src={treatment}
            alt=""
          />
          <div>
            <p>
              A mediados de la década del 2010, el Láser Ginecológico irrumpió
              en el campo de la ginecología como una herramienta innovadora para
              el tratamiento de diversas enfermedades.
            </p>
            <p className="paragraph">
              Este dispositivo ofrece una alternativa eficaz y segura a las
              mujeres que buscan mejorar su calidad de vida.
            </p>
            <p className="paragraph">
              La sesión del Láser Ginecológico no causa dolor ni tiene efectos
              colaterales, la recuperación se consigue en bastante menos tiempo
              que con las cirugías que se hacen con métodos tradicionales.
            </p>
            <p className="paragraph">
              El láser ginecológico generalmente se realiza en el consultorio de
              un médico y no requiere anestesia. El procedimiento suele durar
              unos minutos.
            </p>
            <p className="paragraph">
              El láser ginecológico puede ser utilizado para tratar una amplia
              gama de condiciones, incluyendo:
            </p>
            <ul className="classic-list">
              <li>
                <strong>Síndrome genitourinario de la menopausia</strong>:
                sequedad vaginal, atrofia vulvovaginal, dispareunia,
                incontinencia urinaria leve.
              </li>
              <li>
                <strong>Problemas del suelo pélvico</strong>: incontinencia
                urinaria de esfuerzo, prolapso de órganos pélvicos.
              </li>
              <li>
                <strong>Patologías de la piel vulvar</strong>: liquen escleroso,
                vulvodinia, hiperpigmentación.
              </li>
              <li>
                <strong>Problemas vaginales</strong>: laxitud vaginal,
                incontinencia urinaria leve, vaginismo.
              </li>
            </ul>
            <p className="paragraph">
              En el Instituto Syren, contamos con un láser CO2 de última
              generación y un equipo de especialistas altamente capacitados en
              Ginecología Regenerativa. Ofrecemos una atención personalizada y
              un enfoque integral para el tratamiento de las diferentes
              condiciones que afectan a la salud femenina.
            </p>
            <p className="paragraph">
              Las ventajas del Láser Ginecológico son numerosas:
            </p>
            <ul className="classic-list">
              <li>
                <strong>Procedimiento ambulatorio</strong>: no requiere
                hospitalización y se realiza en el consultorio médico.
              </li>
              <li>
                <strong>Mínimamente invasivo</strong>: no requiere incisiones ni
                suturas.
              </li>
              <li>
                <strong>Rápido y efectivo</strong>: la mayoría de los
                procedimientos se realizan en menos de 30 minutos.
              </li>
            </ul>
            <p className="paragraph">
              Si estás buscando una solución efectiva y segura para mejorar tu
              salud femenina, el Láser Ginecológico puede ser la opción ideal
              para ti. Te invitamos a contactarnos para agendar una consulta
              personalizada y obtener más información sobre este tratamiento
              innovador.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default TreatmentsPage;
