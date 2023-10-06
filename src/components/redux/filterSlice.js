import { createSlice } from '@reduxjs/toolkit';

const initialFilters = '';
export const filterSlicer = createSlice({
  name: 'filters',
  initialState: initialFilters,
  reducers: {
    filterStatus(state, action) {
      return action.payload;
    },
  },
});
export const selectStatusFilter = state => state.filters;
export const { filterStatus } = filterSlicer.actions;
export const filterReducer = filterSlicer.reducer;
