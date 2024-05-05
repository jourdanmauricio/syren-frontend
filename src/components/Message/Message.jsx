import close from '@/assets/icons/close.svg';
import styles from './Message.module.css';

const Message = ({ message, setMessage }) => {
  return (
    <div className={styles.message}>
      <p>{message}</p>
      <button
        className={styles.close}
        onClick={() => setMessage(null)}
      >
        <img
          width={25}
          height={25}
          src={close}
          alt="Cerrar mensaje"
        />
      </button>
    </div>
  );
};
export default Message;
