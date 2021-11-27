// import { useSelector, useDispatch } from 'react-redux';
// import { contactSelectors, changeFilter } from 'redux/contact';
// import styles from './Filter.module.scss';

// const Filter = () => {
//   const value = useSelector(contactSelectors.getFilter);
//   const dispatch = useDispatch();

//   return (
//     <label className={styles.label}>
//       Find contacts by name
//       <input
//         type="text"
//         className={styles.input}
//         value={value}
//         onChange={e => dispatch(changeFilter(e.target.value))}
//         placeholder="Find your contact"
//         autoComplete="off"
//       />
//     </label>
//   );
// };

// export default Filter;
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/contact/contact-selectors';
import { filterContacts } from '../../redux/contact/contact-actions'
import { Input } from '@mui/material'

function Filter() {

  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <label>
      Find contact by name
      <Input className="input"
        type="text"
        value={filter}
        onChange={event => dispatch(filterContacts(event.target.value))}
      >
      </Input>
    </label>

  )
};
export default Filter;