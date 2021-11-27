// import axios from 'axios';
// import {
//   addContactRequest,
//   addContactSuccess,
//   addContactError,
//   deleteContactRequest,
//   deleteContactSuccess,
//   deleteContactError,
//   fetchContactRequest,
//   fetchContactSuccess,
//   fetchContactError,
// } from './contact-actions';

// export const fetchContacts = () => async dispatch => {
//   dispatch(fetchContactRequest());

//   try {
//     const { data } = await axios.get('/contacts');
//     dispatch(fetchContactSuccess(data));
//   } catch (error) {
//     dispatch(fetchContactError(error.message));
//   }
// };

// export const addContact = (name, number) => async dispatch => {
//   const contact = {
//     name,
//     number,
//   };

//   dispatch(addContactRequest());

//   try {
//     const { data } = await axios.post('/contacts', contact);
//     dispatch(addContactSuccess(data));
//   } catch (error) {
//     dispatch(addContactError(error));
//   }
// };

// export const deleteContact = contactId => async dispatch => {
//   dispatch(deleteContactRequest());

//   try {
//     await axios.delete(`/contacts/${contactId}`);
//     dispatch(deleteContactSuccess(contactId));
//   } catch (error) {
//     dispatch(deleteContactError(error));
//   }
// };

// // eslint-disable-next-line import/no-anonymous-default-export
// // export default { fetchContacts, addContact, deleteContact };
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

axios.defaults.baseURL = 'https://619684adaf46280017e7e138.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', { name, number });
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      return data.id;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);