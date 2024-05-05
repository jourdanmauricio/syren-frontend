import { useState } from 'react';
import { useNotification } from '@/components/Notifications/NotificationProvider';
import { validatefield } from '@/helpers/validate';
import { forgotPassword } from '@/services/usersService';

const useRecoveryPassword = () => {
  const [email, setEmail] = useState();
  const [error, setError] = useState();
  const [formError, setFormError] = useState();
  const [loading, setLoading] = useState(false);
  const dispatchNotif = useNotification();

  const handleChange = (event) => {
    let { name, value } = event.target;
    setEmail(value);
    setError(validatefield(name, value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormError(null);

    const formErrors = validatefield('email', email);
    setError(formErrors);

    if (formErrors) return;

    try {
      setLoading(true);
      await forgotPassword({ email });
      dispatchNotif({
        type: 'SUCCESS',
        message: 'Email de recuperación enviado',
      });
    } catch (error) {
      setFormError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    error,
    formError,
    loading,
    setFormError,
    handleChange,
    handleSubmit,
  };
};
export default useRecoveryPassword;
