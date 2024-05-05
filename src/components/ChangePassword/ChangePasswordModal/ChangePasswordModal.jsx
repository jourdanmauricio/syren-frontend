/* eslint-disable react/prop-types */
import useChangePasswordModal from './useChangePasswordModal';
import Message from '@/components/Message/Message';
import eye from '@/assets/icons/eye.svg';
import eyeClose from '@/assets/icons/eye-close.svg';

const ChangePasswordModal = ({ handleCancel }) => {
  const {
    formError,
    showPass,
    showConfPass,
    form,
    errors,
    handleShowPass,
    handleShowConfPass,
    handleChange,
    handleSubmit,
    setFormError,
  } = useChangePasswordModal({ handleCancel });

  return (
    <>
      <h3>Cambiar Contraseña</h3>
      <hr className="mt-1" />
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
      <form
        className="form"
        onSubmit={handleSubmit}
        noValidate
      >
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

        <button
          className="btn"
          type="submit"
        >
          Cambiar contraseña
        </button>
      </form>
    </>
  );
};

export default ChangePasswordModal;
