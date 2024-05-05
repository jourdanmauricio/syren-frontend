import useTime from './useTime';
import styles from './Time.module.css';
import { hourOptions } from '@/helpers/constants';

const Time = ({ form, errors, handleChange }) => {
  const { showtime, handleShowTime, timeRef, handleTime } = useTime({
    handleChange,
    form,
  });
  return (
    <div
      ref={timeRef}
      className="input__data"
    >
      <input
        type="text"
        name="date"
        id="date"
        className={styles.time}
        onClick={handleShowTime}
        value={`${form.hour}:${form.minute} hs` || ''}
        readOnly
      />
      <div className="underline"></div>
      <label htmlFor="date">Hora</label>
      <span>
        <small>{errors.time && errors.time}</small>
      </span>
      {showtime && (
        <div className={styles.timepicker}>
          <select
            className={styles.timepicker__select}
            name="hour"
            onChange={handleChange}
            value={form.hour}
          >
            {hourOptions.map((hour, index) => (
              <option
                key={index}
                value={hour.toString().padStart(2, '0')}
              >
                {hour.toString().padStart(2, '0')}
              </option>
            ))}
            <option value="--">--</option>
          </select>{' '}
          :{' '}
          <select
            className={styles.timepicker__select}
            name="minute"
            onChange={handleTime}
            value={form.minute}
          >
            <option value="00">00</option>
            <option value="30">30</option>
            <option value="--">--</option>
          </select>
        </div>
      )}
    </div>
  );
};
export default Time;
