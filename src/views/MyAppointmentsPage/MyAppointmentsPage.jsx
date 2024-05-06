import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUserAppointments } from '@/redux/user.slice';
import { getUser } from '@/services/usersService';
import Appointment from '@/components/Appointment/Appointment';
import Message from '@/components/Message/Message';
import styles from './MyAppointmentsPage.module.css';

const MyAppointments = () => {
  const [message, setMessage] = useState();
  const userId = useSelector((state) => state.currentUser.userData.user.id);
  const appointments = useSelector(
    (state) => state.currentUser.userAppointments
  );
  const dispatch = useDispatch();

  function sortByDate(a, b) {
    const fechaA = new Date(a.date);
    const fechaB = new Date(b.date);

    return fechaA.getTime() - fechaB.getTime();
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await getUser(userId);

        dispatch(setUserAppointments(user.appointments.sort(sortByDate)));
        if (user.appointments.length === 0)
          setMessage('Aún no tienes citas agendadas');
      } catch (error) {
        setMessage(error);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className={styles.header}>
        <div className={styles.capa}></div>
        <div className={styles.text}>
          <h2>Mis turnos</h2>
          <p>Agenda tu primera consulta gratis</p>
          <div>
            <p>Lunes a viernes: 8 - 18 hs</p>
            <p>Sábados: 8 - 13 hs</p>
          </div>
        </div>
      </div>

      <section className="section">
        <h3 className="sub-title">
          ¡Reserva tu cita hoy mismo y experimenta los mejores resultados!
        </h3>
        <button className={`btn ${styles.new__appointment}`}>
          <Link to="/syren-frontend/new-appointment">Agendar nueva cita</Link>
        </button>
        {message && (
          <Message
            message={message}
            setMessage={setMessage}
          />
        )}

        <div className={styles.container}>
          {appointments &&
            appointments.map((appointment) => (
              <Appointment
                key={appointment.id}
                id={appointment.id}
                date={appointment.date}
                time={appointment.time}
                status={appointment.status}
                setMessage={setMessage}
              />
            ))}
        </div>
      </section>
    </>
  );
};
export default MyAppointments;
