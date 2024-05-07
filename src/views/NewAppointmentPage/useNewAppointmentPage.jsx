import { useState } from 'react';
import { initialValues } from '@/helpers/constants';
import { validatefield, validateForm } from '@/helpers/validate';
import { useSelector } from 'react-redux';
import { useNotification } from '@/components/Notifications/NotificationProvider';
import { useNavigate } from 'react-router-dom';
import { scheduleAppointment } from '@/services/appointmentsService';
import { isSunday } from '@/helpers/dateAppointment';

const useNewAppointmentPage = () => {
  const [formError, setFormError] = useState(null);
  const [errors, setErrors] = useState(initialValues.newAppointmentForm);
  const [form, setForm] = useState(initialValues.newAppointmentForm);
  const userId = useSelector((state) => state.currentUser.userData.user.id);
  const appointments = useSelector(
    (state) => state.currentUser.userAppointments
  );
  const dispatchNotif = useNotification();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { ...form };
    const formErrors = validateForm(data, 'newAppointmentForm');

    if (formErrors.hour || formErrors.minute)
      formErrors.time = formErrors.hour || '' + ' ' + formErrors.minute || '';
    setErrors(formErrors);

    if (isSunday(data.date)) formErrors.date = 'Fecha inválida';

    // Validamos que no exista un turno agendado para el mismo día
    const found = appointments.findIndex(
      (appointment) =>
        appointment.date.split('T')[0] === data.date &&
        appointment.status === 'active'
    );
    if (found !== -1) {
      setFormError(`Ya tienes una cita para el día ${data.date}`);
      return;
    }

    const valuesFormError = Object.values(formErrors);
    if (valuesFormError.some((el) => el !== null)) return;

    data.time = `${data.hour}:${data.minute}`;
    const { date, time } = data;

    try {
      console.log('formErrors', valuesFormError);
      await scheduleAppointment({ date, time, userId });
      dispatchNotif({
        type: 'SUCCESS',
        message: 'Cita registrada',
      });
      navigate('/my-appointments');
    } catch (error) {
      setFormError(error);
    }
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    const error = validatefield(name, value);

    if (name === 'hour' || name === 'minute') {
      name = 'time';
    }

    setErrors({
      ...errors,
      [name]: error,
    });
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return {
    formError,
    errors,
    form,
    setFormError,
    handleSubmit,
    handleChange,
    handleCancel,
  };
};
export default useNewAppointmentPage;
