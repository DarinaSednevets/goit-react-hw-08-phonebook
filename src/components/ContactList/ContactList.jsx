// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { contactOperations, contactSelectors } from 'redux/contact';
// import styles from './ContactList.module.scss';

// const ContactList = () => {
//   const contacts = useSelector(contactSelectors.getFilteredContacts);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(contactOperations.fetchContacts());
//   }, [dispatch]);

//   const onDeleteContacts = id => dispatch(contactOperations.deleteContact(id));

//   return (
//     <ul className={styles.list}>
//       {contacts.map(({ name, number, id }) => {
//         return (
//           <li className={styles.list__item} key={id}>
//             {name}: {number}
//             <button
//               type="button"
//               className={styles.btn}
//               onClick={() => onDeleteContacts(id)}
//             >
//               Delete
//             </button>
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

// export default ContactList;
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts, deleteContact } from '../../redux/contact/contact-operations'
import { getFilteredContacts } from '../../redux/contact/contact-selectors'
import { useEffect } from 'react';
import {
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function ContactList() {
  const filteredContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <div>
      <TableContainer >
        <Table sx={{ maxWidth: 600 }} size="small" align="center" aria-label="contacts" >
          <TableHead>
          </TableHead>

          <TableRow>
            <TableCell scope="col" align="left"></TableCell>
            <TableCell scope="col" align="left" size="md">Name</TableCell>
            <TableCell scope="col" align="left" size="md">Phone number</TableCell>
          </TableRow>
          <TableBody >
            {filteredContacts.map(({ id, name, number }) =>
            (<TableRow key={id} id={id}>
              <TableCell >
                <Button
                  size="small"
                  color="error"
                  type="button"
                  onClick={() => dispatch(deleteContact(id))}
                ><DeleteForeverIcon size="small" />
                </Button>


              </TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>{number}</TableCell>
            </TableRow>))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}


export default ContactList;
