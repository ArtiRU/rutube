import { instance } from '../api/axios';

export interface IAuthData {
  user: {
    id: number;
    email: string;
  } | null;
  accessToken: string;
}

const AUTH = 'auth';

export const AuthService = {
  async login(email: string, password: string) {
    const response = await instance.post<IAuthData>(`/${AUTH}/login`, {
      email,
      password,
    });

    return response.data;
  },

  async registration(email: string, password: string) {
    const response = await instance.post<IAuthData>(`/${AUTH}/registration`, {
      email,
      password,
    });

    return response.data;
  },
};
