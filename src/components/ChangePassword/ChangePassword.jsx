import { useSelector } from 'react-redux';
import Modal from '@/components/Modal/Modal';
import { useModal } from '@/components/Modal/useModal';
import ChangePasswordModal from './ChangePasswordModal/ChangePasswordModal';
import styles from './ChangePassword.module.css';

const ChangePassword = () => {
  const user = useSelector((state) => state.currentUser.userData.user);
  const [isOpenModal, openModal, closeModal] = useModal(false);

  const handlePass = () => {
    openModal();
  };

  const handleCancel = () => {
    closeModal();
  };

  return (
    <>
      <section className={styles.section}>
        <h3>Username: {user.username}</h3>
        <button
          onClick={() => handlePass()}
          className="btn"
        >
          Modificar contraseña
        </button>
      </section>
      {isOpenModal && (
        <Modal
          isOpen={isOpenModal}
          closeModal={closeModal}
          width="full"
        >
          <ChangePasswordModal handleCancel={handleCancel} />
        </Modal>
      )}
    </>
  );
};
export default ChangePassword;
