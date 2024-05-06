import { useState } from 'react';
import { validateForm, validatefield } from '@/helpers/validate';
import { useNavigate } from 'react-router-dom';
import { initialValues } from '@/helpers/constants';
import { useNotification } from '@/components/Notifications/NotificationProvider';
import { register } from '@/services/usersService';

const useRegisterPage = () => {
  const [form, setForm] = useState(initialValues.registerForm);
  const [errors, setErrors] = useState(initialValues.registerForm);
  const [showPass, setShowPass] = useState(false);
  const [showConfPass, setShowConfPass] = useState(false);
  const [formMsg, setFormMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatchNotif = useNotification();
  const navigate = useNavigate();

  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  const handleShowConfPass = () => {
    setShowConfPass(!showConfPass);
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

    const formErrors = validateForm(form, 'registerForm');
    setErrors(formErrors);

    const valuesFormError = Object.values(formErrors);
    if (valuesFormError.some((el) => el !== null)) return;

    const data = { ...form };
    delete data.confPass;
    try {
      setLoading(true);
      await register(data);
      setForm(initialValues.registerForm);
      dispatchNotif({
        type: 'SUCCESS',
        message: 'Registro realizado con exito!',
      });
      navigate('/syren-frontend/login');
    } catch (error) {
      setFormMsg(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    form,
    errors,
    showPass,
    showConfPass,
    formMsg,
    loading,
    setFormMsg,
    handleShowPass,
    handleShowConfPass,
    handleChange,
    handleSubmit,
  };
};
export default useRegisterPage;
