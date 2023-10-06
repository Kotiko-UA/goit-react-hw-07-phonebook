import { createSlice } from '@reduxjs/toolkit';

export const selectTasks = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

const initialContacts = { items: [], isLoading: false, error: null };
const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlicer = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  extraReducers: {},
});

export const contactsReducer = contactsSlicer.reducer;
