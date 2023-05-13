import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL =
  'https://wedding-invitation-8vjm.onrender.com/api/guest';

export const guestInfoThunk = createAsyncThunk(
  '/guestInfoThunk',
  async (_, thunkAPI) => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const userId = urlParams.get('userId');

      const response = await axios.get(`/?userId=${userId}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const willComeThunk = createAsyncThunk(
  '/willComeThunk',
  async (guest, thunkAPI) => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const userId = urlParams.get('userId');

      const response = await axios.patch(`/?userId=${userId}`, guest);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
