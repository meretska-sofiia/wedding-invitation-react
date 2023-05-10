import { createSlice } from '@reduxjs/toolkit';
import { guestInfoThunk, willComeThunk } from './guestOperations';

const initialState = {
  guests: null,
  isLoading: false,
  error: null,
};

const guestSlice = createSlice({
  name: 'guest',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(guestInfoThunk.pending, state => {
        state.isLoading = true;
        state.guests = null;
        state.error = null;
      })
      .addCase(guestInfoThunk.fulfilled, (state, { payload }) => {
        state.guests = payload;
        state.isLoading = false;
      })
      .addCase(guestInfoThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(willComeThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(willComeThunk.fulfilled, (state, { payload }) => {
        state.guests = payload;
        state.isLoading = false;
      })
      .addCase(willComeThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const guestReducer = guestSlice.reducer;
