import styles from './UserImage.module.css';
import { useSelector } from 'react-redux';

const UserImage = () => {
  const user = useSelector((state) => state.currentUser.userData.user);

  return (
    <div>
      {!user.image ? (
        <div className={styles.image}>{user.name.substring(0, 1)}</div>
      ) : (
        <div className={styles.image}>
          <img
            width={50}
            height={50}
            src={user.image}
            alt="Profile picture"
          />
        </div>
      )}
    </div>
  );
};
export default UserImage;
