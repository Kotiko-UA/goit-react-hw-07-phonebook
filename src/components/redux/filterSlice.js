import { createSelector, createSlice } from '@reduxjs/toolkit';
import { selectContacts } from './contactSlice';

const selectFilter = state => state.filters;

export const filterNumbers = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(user =>
      user.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const filterSlicer = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    filterStatus(state, action) {
      return action.payload;
    },
  },
});
export const { filterStatus } = filterSlicer.actions;
export const filterReducer = filterSlicer.reducer;
