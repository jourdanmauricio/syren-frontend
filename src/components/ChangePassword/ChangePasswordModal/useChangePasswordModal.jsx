import { useNotification } from '@/components/Notifications/NotificationProvider';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { validateForm, validatefield } from '@/helpers/validate';
import { initialValues } from '@/helpers/constants';
import { changePassword } from '@/services/usersService';

const useChangePasswordModal = ({ handleCancel }) => {
  const [formError, setFormError] = useState(null);
  const [showPass, setShowPass] = useState(false);
  const [showConfPass, setShowConfPass] = useState(false);
  const [form, setForm] = useState(initialValues.recoveryForm);
  const [errors, setErrors] = useState(initialValues.recoveryForm);
  const dispatchNotif = useNotification();
  const userId = useSelector((state) => state.currentUser.userData.user.id);

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

    const formErrors = validateForm(form, 'recoveryForm');
    setErrors(formErrors);

    const valuesFormError = Object.values(formErrors);
    if (valuesFormError.some((el) => el !== null)) return;

    const data = { ...form };
    delete data.confPass;

    try {
      await changePassword(userId, data);

      dispatchNotif({
        type: 'SUCCESS',
        message: 'Contraseña modificada',
      });
      handleCancel();
    } catch (error) {
      setFormError(error);
    }
  };

  return {
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
  };
};
export default useChangePasswordModal;
