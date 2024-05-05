import styles from './Modal.module.css';
import close from '@/assets/icons/close.svg';

const Modal = ({ children, isOpen, closeModal, width = 'full' }) => {
  const handlecontainerClick = (e) => e.stopPropagation();
  return (
    <article
      className={`${styles.modal} ${isOpen && styles.isOpen}`}
      onClick={closeModal}
    >
      <div
        style={width === 'full' && { width: '90%' }}
        className={styles.modal__container}
        onClick={handlecontainerClick}
      >
        <button
          className={styles.modal__close}
          onClick={closeModal}
        >
          <img
            width={25}
            height={25}
            src={close}
            alt="Cerrar Modal"
          />
        </button>
        {children}
      </div>
    </article>
  );
};
export default Modal;
