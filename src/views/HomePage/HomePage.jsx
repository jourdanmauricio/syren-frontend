import Hero from '@/components/Hero/Hero';
import MyAppointmentsText from '@/helpers/myAppointmentsText';
import Process from '../../components/Process/Process';

const Home = () => {
  return (
    <div>
      <Hero />

      <section className="section">
        <h3 className="title">
          ¡Reserva tu cita hoy mismo y experimenta los mejores resultados!
        </h3>
        <ol
          role="list"
          className="custom-list"
        >
          {MyAppointmentsText.map(({ id, feature, text }) => (
            <li key={id}>
              <span>
                <strong>{feature}</strong>: {text}
              </span>
            </li>
          ))}
        </ol>
      </section>

      <Process />
    </div>
  );
};

export default Home;
