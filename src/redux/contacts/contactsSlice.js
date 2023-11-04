import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { INITIAL_STATE } from './initialState';
import {
  requestAddContact,
  requestContacts,
  requestDeleteContacts,
} from 'services/api';

export const fetchAll = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const contacts = await requestContacts();
      return contacts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const contacts = await requestAddContact(newContact);
      return contacts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const deletedContact = await requestDeleteContacts(contactId);
      return deletedContact;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const onPending = state => {
  state.isLoading = true;
  state.error = null;
};
const onRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
const onFetchAllFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.items = payload;
};
const onAddContactFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.items = [...state.items, payload];
};
const onDeleteContactFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.items = state.items.filter(c => c.id !== payload.id);
};

const contactsSlice = createSlice({
  name: 'contactsList',
  initialState: INITIAL_STATE.contacts,
  extraReducers: builder =>
    builder
      .addCase(fetchAll.fulfilled, onFetchAllFulfilled)
      .addCase(addContact.fulfilled, onAddContactFulfilled)
      .addCase(deleteContact.fulfilled, onDeleteContactFulfilled)

      .addMatcher(
        isAnyOf(deleteContact.pending, fetchAll.pending, addContact.pending),
        onPending
      )
      .addMatcher(
        isAnyOf(deleteContact.rejected, fetchAll.rejected, addContact.rejected),
        onRejected
      ),
});

export const contactsReducer = contactsSlice.reducer;
