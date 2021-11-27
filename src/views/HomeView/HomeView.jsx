import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

const styles = {
  title: {
    fontWeight: 400,
    fontSize: 36,
    textAlign: 'center',
  },
};

export default function HomeView() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const userName = useSelector(authSelectors.getUserName);

  return (
    <>
      {isLoggedIn ? (
        <div style={styles.container}>
          <p style={styles.title}>Hello, {userName}!</p>
          <p style={styles.title}>We are glad to see you!</p>
        </div>
      ) : (
        <div style={styles.container}>
          <p style={styles.title}>Welcome to Phonebook App!</p>
          <p style={styles.title}>
            Register and use the application
          </p>
        </div>
      )}
    </>
  );
}
