import { useState } from 'react';
import { initialValues } from '@/helpers/constants';
import { validatefield, validateForm } from '@/helpers/validate';
import { useNotification } from '@/components/Notifications/NotificationProvider';
import { create } from '@/services/contactsService';

const useContactPage = () => {
  const [formError, setFormError] = useState();
  const [form, setForm] = useState(initialValues.contactForm);
  const [errors, setErrors] = useState(initialValues.contactForm);
  const [status, setStatus] = useState('VIEW');
  const dispatchNotif = useNotification();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);

    const formErrors = validateForm(form, 'contactForm');
    setErrors(formErrors);

    const valuesFormError = Object.values(formErrors);
    if (valuesFormError.some((el) => el !== null)) return;

    try {
      setStatus('LOADING');
      await create(form);
      setFormError(null);
      dispatchNotif({
        type: 'SUCCESS',
        message: 'Mensaje enviado',
      });
      setStatus('EMAIL-SENT');
    } catch (error) {
      setFormError(error);
      setStatus('VIEW');
    }
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

  return {
    formError,
    form,
    errors,
    status,
    setFormError,
    handleSubmit,
    handleChange,
  };
};
export default useContactPage;
