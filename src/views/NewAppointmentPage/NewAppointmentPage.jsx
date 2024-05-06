import Message from '@/components/Message/Message';
import styles from './NewAppointmentPage.module.css';
import useNewAppointmentPage from './useNewAppointmentPage';
import Time from './Time/Time';

const NewAppointmentPage = () => {
  const {
    formError,
    errors,
    form,
    setFormError,
    handleSubmit,
    handleChange,
    handleCancel,
  } = useNewAppointmentPage();

  return (
    <div className="page">
      <div className={styles.background}>
        <img
          width="480"
          height="auto"
          src="https://res.cloudinary.com/dn7npxeof/image/upload/v1710620266/Henry/PM3-laser-appointments/calendar_p5skmr.webp"
          alt="Back"
        />
      </div>
      <section className={styles.section}>
        <div className="container-formError">
          {formError && (
            <div className="form-error">
              <Message
                message={formError}
                setMessage={setFormError}
                error="true"
              />
            </div>
          )}
        </div>
        <div className={styles.form__container}>
          <h2 className="form-title">Agendar nuevo turno </h2>

          <ul className="custom-list">
            <li>
              ¡Primera cita gratuita! Ven a conocernos y descubre cómo podemos
              ayudarte. Diagnóstico sin costo.
            </li>
            <li>Lunes a viernes de 9 a 18hs</li>
          </ul>

          <form
            style={{ paddingTop: '2rem' }}
            className={styles.form}
            onSubmit={handleSubmit}
            noValidate
          >
            <div className={styles.form__group}>
              <div className="input__data">
                <input
                  type="date"
                  name="date"
                  id="date"
                  placeholder=" "
                  value={form.date || ''}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={handleChange}
                  required
                />
                <div className="underline"></div>
                <label htmlFor="date">Fecha</label>
                <span>
                  <small>{errors.date && errors.date}</small>
                </span>
              </div>
              <Time
                form={form}
                handleChange={handleChange}
                errors={errors}
              />
            </div>
            <div className={styles.actions}>
              <button
                onClick={handleCancel}
                type="button"
                className="btn"
              >
                Volver
              </button>
              <button
                type="submit"
                className="btn"
              >
                Agendar cita
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};
export default NewAppointmentPage;
