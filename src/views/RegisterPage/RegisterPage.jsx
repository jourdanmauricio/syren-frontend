import { Link } from 'react-router-dom';
import useRegisterPage from './useRegisterPage';
import eye from '@/assets/icons/eye.svg';
import eyeClose from '@/assets/icons/eye-close.svg';
import Message from '@/components/Message/Message';
import SpinnerBtn from '@/components/SpinnerBtn/SpinnerBtn';

const RegisterPage = () => {
  const {
    form,
    errors,
    formMsg,
    showPass,
    showConfPass,
    loading,
    setFormMsg,
    handleShowPass,
    handleShowConfPass,
    handleChange,
    handleSubmit,
  } = useRegisterPage();
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
            alt="Imagen registro"
          />
        </div>
        <div className="container-form">
          <h2 className="form-title">Formulario de Registro</h2>
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
                <Link to="/syren-frontend/login">Iniciar sesión</Link>
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
export default RegisterPage;
