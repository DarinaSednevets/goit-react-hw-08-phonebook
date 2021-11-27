// import { createSelector } from '@reduxjs/toolkit';

// const getContacts = state => state.contacts.items;
// const getFilter = state => state.contacts.filter;

// const getFilteredContacts = createSelector(
//   [getContacts, getFilter],
//   (contacts, filter) => {
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(({ name }) =>
//       name.toLowerCase().includes(normalizedFilter),
//     );
//   },
// );

// let selector = {
//   getContacts,
//   getFilter,
//   getFilteredContacts,
// };

// export default selector;
export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const getFilteredContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  return contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  })
}