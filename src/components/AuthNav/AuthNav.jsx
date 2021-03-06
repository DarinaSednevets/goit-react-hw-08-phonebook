import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css'

export default function AuthNav() {

  return (
    <div>
      <NavLink
        to="/register"
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Sign Up
      </NavLink>
      <NavLink
        to="/login"
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Log In
      </NavLink>
    </div>
  );
}
