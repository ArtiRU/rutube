import axios from 'axios';

import { getContentType } from '@/utils/api.helper';

export const BASE_URL = `${process.env.APP_URL}/api`;

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: getContentType(),
});
