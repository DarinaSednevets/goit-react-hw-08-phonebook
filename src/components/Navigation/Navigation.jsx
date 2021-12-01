import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss'

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav className={styles.navigation}>
      <NavLink to="/" exact className={styles.link} activeClassName={styles.activeLink}>
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          exact
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Phonebook
        </NavLink>
      )}
    </nav>
  );
}
