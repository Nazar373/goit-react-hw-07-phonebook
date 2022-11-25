import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

axios.defaults.baseURL = 'https://637e17aecfdbfd9a63a6f865.mockapi.io/api/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('contacts');
      console.log('response', response);
      return response.data;
    } catch (e) {
      console.log('error', e);
      return rejectWithValue(e.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContact',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('contacts', data);
      console.log('datainADD:', data);
      console.log('respinADD:', response);
      return response.data;
    } catch (e) {
      console.log('errorinadd', e);
      return rejectWithValue(e.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const response = await axios.delete('contacts', { contactId });
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
