import { useSelector, useDispatch } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import defaultAvatar from './avatar-default.png';
import styles from './UserMenu.module.scss'
import { Button } from '@mui/material'

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div className={styles.container}>
      <img src={defaultAvatar} alt="user avatar" width="32" className={styles.avatar} />
      <span className={styles.name}>Welcome, {name}</span>
      <Button
        variant="outlined"
        color="secondary"
        size="small"
        type="button"
        onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </Button>
    </div>
  );
}
