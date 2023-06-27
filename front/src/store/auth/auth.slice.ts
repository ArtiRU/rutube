import { createSlice } from '@reduxjs/toolkit';

import { login, logout, registration } from '@/store/auth/auth.actions';
import { IAuthInitialState } from '@/store/auth/auth.interface';

const initialState: IAuthInitialState = {
  user: null,
  accessToken: '',
  isLoading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(registration.pending, state => {
        state.isLoading = true;
      })
      .addCase(registration.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
        state.accessToken = payload.accessToken;
      })
      .addCase(registration.rejected, state => {
        state.isLoading = false;
        state.user = null;
        state.accessToken = '';
      })
      .addCase(login.pending, state => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
        state.accessToken = payload.accessToken;
      })
      .addCase(login.rejected, state => {
        state.isLoading = false;
        state.user = null;
        state.accessToken = '';
      })
      .addCase(logout.fulfilled, state => {
        state.isLoading = false;
        state.user = null;
        state.accessToken = '';
      });
  },
});
