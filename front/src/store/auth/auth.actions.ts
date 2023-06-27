import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastr } from 'react-redux-toastr';

import { IAuthFields } from '@/components/layout/header/auth-form/auth.interface';

import { toastError } from '@/utils/api.helper';

import { AuthService, IAuthData } from '@/services/auth.service';

export const registration = createAsyncThunk<IAuthData, IAuthFields>(
  'auth/register',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await AuthService.registration(email, password);
      toastr.success('Регистрация', 'Успешно выполнена');

      return response;
    } catch (e) {
      toastError(e);
      return thunkAPI.rejectWithValue(e);
    }
  },
);
export const login = createAsyncThunk<IAuthData, IAuthFields>(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await AuthService.login(email, password);
      toastr.success('Вход', 'Успешно выполнена');

      return response;
    } catch (e) {
      toastError(e);
      return thunkAPI.rejectWithValue(e);
    }
  },
);

export const logout = createAsyncThunk('auth/logout', async () => ({}));
