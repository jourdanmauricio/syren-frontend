import { Link } from 'react-router-dom';
import useForgotPassPage from './useForgotPassPage';
import Message from '@/components/Message/Message';
import SpinnerBtn from '@/components/SpinnerBtn/SpinnerBtn';

const ForgotPassPage = () => {
  const {
    email,
    error,
    formError,
    loading,
    setFormError,
    handleChange,
    handleSubmit,
  } = useForgotPassPage();

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
          {formError && (
            <div className="form-error">
              <Message
                message={formError}
                setMessage={setFormError}
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
          <p className="form-paragraph">¿Cómo recupero mi contraseña?</p>
          <p className="form-paragraph">
            Ingresa la dirección de correo electrónico que se encuentra asociada
            a tu username. Te enviaremos un email para cambiar la contraseña.
          </p>
          <form
            className="form"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="input__data">
              <input
                type="input"
                name="email"
                id="email"
                placeholder=" "
                value={email || ''}
                onChange={(e) => handleChange(e)}
                required
              />
              <div className="underline"></div>
              <label htmlFor="email">Email</label>
              <span>
                <small>{error && error}</small>
              </span>
            </div>

            <div className="form-links">
              <p>
                <Link to="/register">Registrarme</Link>
              </p>
              <p>
                <Link to="/login">Iniciar sesión</Link>
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
    </>
  );
};
export default ForgotPassPage;
