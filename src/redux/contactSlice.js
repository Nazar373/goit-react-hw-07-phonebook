import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContacts, deleteContacts, fetchContacts } from './operations';

const extraActions = [fetchContacts, addContacts, deleteContacts];

const getActions = type => isAnyOf(...extraActions.map(action => action[type]));

const fetchContactsSucceesReducer = (state, action) => {
  console.log('fetch-fulfilled', state);
  state.items = action.payload;
};

const addContactSuccessReducer = (state, action) => {
  state.items.push(action.payload);
};

const deleteContactSuccessReducer = (state, action) => {
  state.items.filter(contact => contact.id !== action.payload);
};

const pendingReducer = state => (state.isLoading = true);

const rejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  console.log('stateOnReject', state)
};

const fulfilledReducer = state => {
  state.isLoading = false;
  state.error = null;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsSucceesReducer)
      .addCase(addContacts.fulfilled, addContactSuccessReducer)
      .addCase(deleteContacts.fulfilled, deleteContactSuccessReducer)
      .addMatcher(getActions('pending'), pendingReducer)
      .addMatcher(getActions('rejected'), rejectedReducer)
      .addMatcher(getActions('fulfilled'), fulfilledReducer),
});

export const contactsReducer = contactsSlice.reducer;
