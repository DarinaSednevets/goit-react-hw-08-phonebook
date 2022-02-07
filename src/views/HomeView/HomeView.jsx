import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import styles from './HomeView.module.css'

export default function HomeView() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const userName = useSelector(authSelectors.getUserName);

  return (
    <>
      {isLoggedIn ? (
        <div>
          <p className={styles.title}>Hello, {userName}!</p>
          <p className={styles.title}>We are glad to see you!</p>
        </div>
      ) : (
        <div className={styles.container}>
          <p className={styles.title}>Welcome to Phonebook App!</p>
          <p className={styles.title}>
            Register and use the application
          </p>
        </div>
      )}
    </>
  );
}
