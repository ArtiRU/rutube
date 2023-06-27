import { IAuthData } from '@/services/auth.service';

export interface IAuthInitialState extends IAuthData {
  isLoading: boolean;
}
