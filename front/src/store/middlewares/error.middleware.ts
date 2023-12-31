import { isRejectedWithValue } from '@reduxjs/toolkit';
import { Middleware, MiddlewareAPI } from 'redux';

import { toastError } from '@/utils/api.helper';

export const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => next => action => {
    if (isRejectedWithValue(action)) {
      toastError(action.error, 'RTK Error');
    }

    return next(action);
  };
