import styles from './ContactPage.module.css';
import Message from '@/components/Message/Message';
import useContactPage from './useContactPage';
import Spinner from '@/components/Spinner/Spinner';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  const {
    form,
    formError,
    errors,
    status,
    setFormError,
    handleSubmit,
    handleChange,
  } = useContactPage();

  return (
    <div className="page">
      {status === 'LOADING' && <Spinner />}

      <section className={styles.section}>
        <header>
          <h2 className={styles.title}>Formulario de contacto</h2>

          <p className={styles.paragraph}>
            ¡Queremos saber tu opinión! En nuestro centro de salud, nos
            comprometemos a brindar una atención de calidad y mejorar
            continuamente nuestros servicios. Tu opinión es fundamental para
            lograrlo. Te invitamos a que nos dejes tus comentarios y sugerencias
            a través de este formulario.
          </p>
        </header>
        <div className={styles.form__error}>
          {formError && (
            <Message
              message={formError}
              setMessage={setFormError}
            />
          )}
        </div>

        {status === 'EMAIL-SENT' && (
          <>
            <p className={styles.paragraph}>
              En nombre de todo el equipo de Syren, queremos agradecerte por
              tomarte el tiempo para dejar un comentario en nuestra página web.
              Tu opinión es muy importante para nosotros y nos ayuda a mejorar
              continuamente la experiencia de nuestros usuarios.
            </p>

            <p className={styles.paragraph}>
              Tus palabras nos motivan a seguir trabajando duro para ofrecerte
              el mejor servicio posible.
            </p>
            <p className={styles.paragraph}>
              <strong>En breve nos pondremos en contacto.</strong>
            </p>
            <button className="btn">
              <Link to="/syren-frontend/">Ir al inicio</Link>
            </button>
          </>
        )}

        {status === 'VIEW' && (
          <form
            onSubmit={handleSubmit}
            className="form"
            noValidate
            autoComplete="off"
          >
            <div className="input__data">
              <input
                type="input"
                name="name"
                id="name"
                placeholder=" "
                value={form.name || ''}
                onChange={(e) => handleChange(e)}
                required
              />
              <div className="underline"></div>
              <label htmlFor="name">Nombre</label>
              <span>
                <small>{errors.name && errors.name}</small>
              </span>
            </div>
            <div className="input__data">
              <input
                type="email"
                name="email"
                value={form.email || ''}
                id="email"
                placeholder=" "
                onChange={(e) => handleChange(e)}
                required
              />
              <div className="underline"></div>
              <label htmlFor="email">Email</label>
              <span>
                <small>{errors.email && errors.email}</small>
              </span>
            </div>
            <div className="input__data input__data--text">
              <textarea
                name="message"
                id="message"
                placeholder=" "
                rows={5}
                value={form.message || ''}
                onChange={(e) => handleChange(e)}
                required
              ></textarea>
              <div className="underline"></div>
              <label htmlFor="message">Mensaje</label>
              <span>
                <small>{errors.message && errors.message}</small>
              </span>
            </div>

            <button className="btn">Enviar Mmensaje</button>
          </form>
        )}
      </section>
    </div>
  );
};
export default ContactPage;
