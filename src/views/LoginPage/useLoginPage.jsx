import { useState } from 'react';
import { validateForm, validatefield } from '@/helpers/validate';
import { useNotification } from '@/components/Notifications/NotificationProvider';
import { initialValues } from '@/helpers/constants';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserData } from '@/redux/user.slice';
import { login } from '@/services/usersService';

const useLoginPage = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialValues.loginForm);
  const [errors, setErrors] = useState(initialValues.loginForm);
  const [showPass, setShowPass] = useState(false);
  const [formError, setFormError] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatchNotif = useNotification();

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
    setFormError(null);

    const formErrors = validateForm(form, 'loginForm');
    setErrors(formErrors);

    const valuesFormError = Object.values(formErrors);
    if (valuesFormError.some((el) => el !== null)) return;

    try {
      setLoading(true);
      const user = await login(form);

      dispatch(setUserData(user));
      dispatchNotif({
        type: 'SUCCESS',
        message: 'Bienvenida!!',
      });
      navigate('/');
    } catch (error) {
      setFormError(error);
    } finally {
      setLoading(false);
    }
  };
  return {
    loading,
    form,
    formError,
    errors,
    showPass,
    handleShowPass,
    handleChange,
    handleSubmit,
    setFormError,
  };
};
export default useLoginPage;
