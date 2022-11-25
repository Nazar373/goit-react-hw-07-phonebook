import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilterState(state, action) {
     return state = action.payload
    }
  }
})

export const { setFilterState } = filterSlice.actions;
