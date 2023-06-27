import { IUser } from '@/types/user.interface';

import { instance } from '../api/axios';

export const USER = 'user';

export const UserService = {
  async getAll() {
    return instance.get<IUser[]>(`${USER}/get-all`);
  },

  async getUser(id: number) {
    return instance.get<IUser>(`${USER}/by-id/${id}`);
  },
};
