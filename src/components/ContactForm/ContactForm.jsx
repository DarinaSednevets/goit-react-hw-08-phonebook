
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/contact/contact-selectors';
import { addContact } from '../../redux/contact/contact-operations';
import { Button, Input } from '@mui/material'
import styles from './ContactForm.module.css'

function ContactForm() {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    if (contacts.some(elm => elm.name === name)) {
      return alert(`${name} is already in contacts`);
    } else {
      dispatch(addContact({ name, number }));
    }
    clearForm();
  }

  const clearForm = () => {
    setName('');
    setNumber('');
  }

  return (

    <section>
      <form className={styles.form} onSubmit={handleSubmit}>

        <Input
          placeholder="Name"
          className="input"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Input
          placeholder="Number"
          className="input"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={e => setNumber(e.target.value)}
        />

        <Button
          fullWidth='false'
          type='submit'
          variant="outlined"
          disabled={!name || !number}
        >Add</Button>
      </form>
    </section>

  )
}

export default ContactForm;


