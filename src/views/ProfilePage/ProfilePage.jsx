import styles from './ProfilePage.module.css';
import edit from '@/assets/icons/edit.svg';
import useProfilePage from './useProfilePage';
import Spinner from '@/components/Spinner/Spinner';
import ChangePassword from '@/components/ChangePassword/ChangePassword';
import Message from '@/components/Message/Message';

const ProfilePage = () => {
  const {
    form,
    errors,
    selectedFile,
    preview,
    formError,
    loading,
    setFormError,
    onSelectFile,
    handleChange,
    handleSubmit,
  } = useProfilePage();

  return (
    <div className="page">
      {loading && <Spinner />}
      <section className={styles.section}>
        <div className={styles.form__error}>
          {formError && (
            <Message
              message={formError}
              setMessage={setFormError}
            />
          )}
        </div>
        <ChangePassword />
      </section>
      <div className={styles.container}>
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
              required
              value={form.name || ''}
              onChange={(e) => handleChange(e)}
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
          <div className="input__data">
            <input
              type="text"
              name="nDni"
              id="nDni"
              placeholder=" "
              value={form.nDni || ''}
              onChange={(e) => handleChange(e)}
              required
            />
            <div className="underline"></div>
            <label htmlFor="nDni">DNI</label>
            <span>
              <small>{errors.nDni && errors.nDni}</small>
            </span>
          </div>
          <div className="input__data">
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder=" "
              value={form.phone || ''}
              onChange={(e) => handleChange(e)}
              required
            />
            <div className="underline"></div>
            <label htmlFor="phone">Teléfono</label>
            <span>
              <small>{errors.phone && errors.phone}</small>
            </span>
          </div>
          <div className="input__data">
            <input
              type="date"
              name="birthdate"
              id="birthdate"
              placeholder=" "
              value={
                (form.birthdate && form.birthdate.toString().split('T')[0]) ||
                ''
              }
              max={new Date().toISOString().split('T')[0]}
              onChange={(e) => handleChange(e)}
              required
            />
            <div className="underline"></div>
            <label htmlFor="birthdate">Fecha de nacimiento</label>
            <span>
              <small>{errors.birthdate && errors.birthdate}</small>
            </span>
          </div>

          <div className={styles.image__container}>
            <div className={styles.image__preview}>
              {!form.image && !selectedFile ? (
                <div className={styles.image}>{form.name?.substring(0, 1)}</div>
              ) : (
                <div className={styles.image}>
                  <img
                    src={preview || form.image}
                    alt="Profile picture"
                  />
                </div>
              )}

              <div className={styles.capa}>
                <img
                  src={edit}
                  width={50}
                  height={50}
                  alt="Editar Imagen"
                />
              </div>
              <input
                onChange={onSelectFile}
                className={styles.input__btn}
                type="file"
                accept="image/png, image/jpeg, image/webp, image/jpg"
              />
            </div>
          </div>

          <button className="btn">Modificar</button>
        </form>
      </div>
    </div>
  );
};
export default ProfilePage;
