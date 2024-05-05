import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useModal } from '@/components/Modal/useModal';
import { useNotification } from '@/components/Notifications/NotificationProvider';
import Modal from '@/components/Modal/Modal';
import SpinnerBtn from '@/components/SpinnerBtn/SpinnerBtn';
import formatDate from '@/utils/formatDate';
import { updateAppointment } from '@/redux/user.slice';
import { cancelAppointment } from '@/services/appointmentsService';
import styles from './Appointment.module.css';

const Appointment = ({ id, date, time, status, setMessage }) => {
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [loading, setLoading] = useState(false);
  const dispatchNotif = useNotification();
  const dispatch = useDispatch();

  const today = new Date().toISOString();

  const handleCancelAppointment = async () => {
    // No cancelar si es el día actual

    if (date.split('T')[0] === today.split('T')[0]) {
      setMessage('No puedes cancelar un turno para hoy. Contáctanos');
      closeModal();
      return;
    }
    try {
      setLoading(true);

      await cancelAppointment(id);

      dispatch(updateAppointment(id));
      dispatchNotif({
        type: 'SUCCESS',
        message: 'Cita cancelada',
      });
    } catch (error) {
      const message = error.response
        ? `${error.response.data.statusCode} - ${error.response.data.message}`
        : error.message;
      setMessage(message);
    } finally {
      setLoading(false);
    }
    closeModal();
  };

  const isCancelable = () => {
    const appointmentDate = new Date(date);
    const appointmentDatems = appointmentDate.getTime();
    const todayms = new Date().getTime();

    return appointmentDatems > todayms && status === 'active';
  };

  return (
    <>
      <article className={styles.appointment}>
        <div className={styles.info}>
          <p className={styles.info__date}>{formatDate(date)}</p>
          <p className={styles.info__time}>{time} hs</p>
        </div>
        <button
          onClick={(e) => openModal(e.target.id)}
          id={id}
          className={styles.cancel__btn}
          disabled={!isCancelable()}
        >
          {status === 'active' ? 'Cancelar turno' : 'Turno cancelado'}
        </button>
      </article>

      <Modal
        isOpen={isOpenModal}
        closeModal={closeModal}
      >
        <h3>Cancelar cita</h3>
        <hr />

        <p style={{ padding: '1rem 0' }}>¿Está seguro de cancelar el turno?</p>
        <p style={{ padding: '1rem 0' }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius soluta
          animi excepturi. Delectus fugit aliquam aut! Quae, quaerat assumenda
          hic eius eum neque alias dicta, nam molestias placeat sed reiciendis.
        </p>
        <button
          className="btn"
          onClick={handleCancelAppointment}
          style={{ display: 'block', marginLeft: 'auto' }}
        >
          Cancelar cita
          {loading && <SpinnerBtn />}
        </button>
      </Modal>
    </>
  );
};
export default Appointment;
