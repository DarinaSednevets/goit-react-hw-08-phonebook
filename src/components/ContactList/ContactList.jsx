
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
