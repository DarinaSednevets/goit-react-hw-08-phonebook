import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { filterContacts } from "./contact-actions";
import { fetchContacts, addContact, deleteContact } from "./contact-operations";

const initialFilter = "";

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [payload, ...state],
  [deleteContact.fulfilled]: (state, { payload }) => state.filter(contact => contact.id !== payload),
})


const filter = createReducer(initialFilter, {
  [filterContacts]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
})
