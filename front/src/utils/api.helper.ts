import { toastr } from 'react-redux-toastr';

export const getContentType = () => ({
  'Content-Type': 'application/json',
});

export const errorCatch = (error: any): string =>
  error.responce && error.responce.data
    ? typeof error.responce.data.message === 'object'
      ? error.responce.data.message[0]
      : error.response.data.message
    : error.message;

export const toastError = (error: any, title?: string) => {
  const message = errorCatch(error);

  toastr.error(title || 'Error request', message);

  throw message;
};
