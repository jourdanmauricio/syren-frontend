import { useEffect, useState } from 'react';
import { useModal } from '@/components/Modal/useModal';
import { useNotification } from '@/components/Notifications/NotificationProvider';
import { validateForm, validatefield } from '@/helpers/validate';
import { initialValues } from '@/helpers/constants';
import { recoveryPassword } from '@/services/usersService';

const useRecoveryPasswordPage = () => {
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [form, setForm] = useState(initialValues.recoveryForm);
  const [errors, setErrors] = useState(initialValues.recoveryForm);
  const [showPass, setShowPass] = useState(false);
  const [showConfPass, setShowConfPass] = useState(false);
  const [formMsg, setFormMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState();
  const dispatchNotif = useNotification();

  useEffect(() => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    setToken(params.get('token'));
  }, []);

  const handleShowConfPass = () => {
    setShowConfPass(!showConfPass);
  };

  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  const handleChange = (event) => {
    let { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });

    const error = validatefield(name, value);

    setErrors({
      ...errors,
      [name]: error,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      setFormMsg('Token inválido');
      return;
    }

    setFormMsg(null);

    const formErrors = validateForm(form, 'recoveryForm');
    setErrors(formErrors);

    const valuesFormError = Object.values(formErrors);
    if (valuesFormError.some((el) => el !== null)) return;

    const data = {
      password: form.password,
      token: token,
    };

    try {
      setLoading(true);
      await recoveryPassword(data);
      openModal();
      dispatchNotif({
        type: 'SUCCESS',
        message: 'Contraseña modificada',
      });
    } catch (error) {
      setFormMsg(data);
    } finally {
      setLoading(false);
    }
  };
  return {
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
  };
};
export default useRecoveryPasswordPage;
