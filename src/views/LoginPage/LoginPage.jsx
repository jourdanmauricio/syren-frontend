import { Link } from 'react-router-dom';
import useLoginPage from './useLoginPage';
import SpinnerBtn from '@/components/SpinnerBtn/SpinnerBtn';
import eye from '@/assets/icons/eye.svg';
import eyeClose from '@/assets/icons/eye-close.svg';
import Message from '@/components/Message/Message';

const Login = () => {
  const {
    form,
    formError,
    errors,
    showPass,
    loading,
    handleShowPass,
    handleChange,
    handleSubmit,
    setFormError,
  } = useLoginPage();
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
          <p className="form-paragraph">
            Contamos con un equipo médico altamente calificado y con amplia
            experiencia en cada una de las áreas que ofrecemos.
          </p>

          <form
            className="form"
            onSubmit={handleSubmit}
            noValidate
            autoComplete="off"
          >
            <div className="input__data">
              <input
                type="input"
                name="username"
                id="username"
                placeholder=" "
                value={form.username || ''}
                onChange={(e) => handleChange(e)}
                required
              />
              <div className="underline"></div>
              <label htmlFor="username">Username</label>
              <span>
                <small>{errors.username && errors.username}</small>
              </span>
            </div>

            <div className="input__data">
              <input
                type={showPass ? 'text' : 'password'}
                name="password"
                placeholder=" "
                id="password"
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
            <div className="form-links">
              <p>
                <Link to="/syren-frontend/register">Registrarme</Link>
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
    </>
  );
};
export default Login;
