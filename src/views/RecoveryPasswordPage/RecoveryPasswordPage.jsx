import { Link } from 'react-router-dom';
import useRecoveryPassword from './useRecoveryPasswordPage';
import eye from '@/assets/icons/eye.svg';
import eyeClose from '@/assets/icons/eye-close.svg';
import Message from '@/components/Message/Message';
import SpinnerBtn from '@/components/SpinnerBtn/SpinnerBtn';
import Modal from '@/components/Modal/Modal';

const RecoveryPasswordPage = () => {
  const {
    form,
    formMsg,
    errors,
    showPass,
    loading,
    showConfPass,
    isOpenModal,
    closeModal,
    handleShowConfPass,
    handleShowPass,
    handleChange,
    handleSubmit,
    setFormMsg,
  } = useRecoveryPassword();
  return (
    <>
      <div className="background-auth">
        <img
          width="480"
          height="auto"
          src="https://res.cloudinary.com/dn7npxeof/image/upload/v1710619681/Henry/PM3-laser-appointments/auth_back_fjvg9g.webp"
          alt="Back"
        />
      </div>
      <section className="section-auth">
        <div className="container-formError">
          {formMsg && (
            <div className="form-error">
              <Message
                message={formMsg}
                setMessage={setFormMsg}
              />
            </div>
          )}
        </div>
        <div className="container-image">
          <img
            className="form-image"
            src="https://res.cloudinary.com/dn7npxeof/image/upload/v1710619885/Henry/PM3-laser-appointments/auth_akfphd.webp"
            alt="Imagen Login"
          />
        </div>
        <div className="container-form">
          <h2 className="form-title">Syren</h2>
          <p className="form-paragraph">
            Ingresa tu nueva contraseña. Recuerda que debe tener al menos 8
            carcateres.
          </p>

          <form
            className="form"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="input__data">
              <input
                type={showPass ? 'text' : 'password'}
                name="password"
                id="password"
                placeholder=" "
                value={form.password || ''}
                onChange={(e) => handleChange(e)}
                required
              />
              <button
                className="input-icon"
                type="button"
                onClick={handleShowPass}
              >
                <img
                  width={20}
                  height={20}
                  src={showPass ? eyeClose : eye}
                  alt="Mostrar / Ocutar password"
                />
              </button>
              <div className="underline"></div>
              <label htmlFor="password">Password</label>
              <span>
                <small>{errors.password && errors.password}</small>
              </span>
            </div>
            <div className="input__data">
              <input
                type={showConfPass ? 'text' : 'password'}
                name="confPass"
                id="confPass"
                placeholder=" "
                value={form.confPass || ''}
                onChange={(e) => handleChange(e)}
                required
              />
              <button
                className="input-icon"
                type="button"
                onClick={handleShowConfPass}
              >
                <img
                  width={20}
                  height={20}
                  src={showConfPass ? eyeClose : eye}
                  alt="Mostrar / Ocutar password"
                />
              </button>
              <div className="underline"></div>
              <label htmlFor="confPass">Conf Password</label>
              <span>
                <small>{errors.confPass && errors.confPass}</small>
              </span>
            </div>

            <div className="form-links">
              <p>
                <Link href="/syren-frontend/register">Registrarme</Link>
              </p>
              <p>
                <Link to="/syren-frontend/forgot-password">
                  Recuperar contraseña{' '}
                </Link>
              </p>
            </div>

            <button
              className="btn"
              disabled={loading}
            >
              Enviar {loading && <SpinnerBtn />}
            </button>
          </form>
        </div>
      </section>

      <Modal
        isOpen={isOpenModal}
        closeModal={closeModal}
      >
        <h3>Contraseña modificada</h3>
        <hr />

        <p style={{ padding: '1rem 0' }}>
          Ya puedes iniciar sesión con tu nueva contraseña. Nunca compartas tu
          contraseña con nadie, ni siquiera si te lo piden por correo
          electrónico, teléfono o mensaje de texto.
        </p>
        <button
          className="btn"
          style={{ display: 'block', marginLeft: 'auto' }}
        >
          <Link to="/syren-frontend/login">Iniciar sesión</Link>
        </button>
      </Modal>
    </>
  );
};
export default RecoveryPasswordPage;
