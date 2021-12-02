
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/contact/contact-selectors';
import { filterContacts } from '../../redux/contact/contact-actions'
import { Input } from '@mui/material'
import styles from './Filter.module.css'

function Filter() {

  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <label className={styles.label}>
      Find contact by name
      <Input
        className="input"
        type="text"
        value={filter}
        onChange={event => dispatch(filterContacts(event.target.value))}
      >
      </Input>
    </label>

  )
};
export default Filter;