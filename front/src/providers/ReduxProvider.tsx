import { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import ReduxToastrLib from 'react-redux-toastr';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from '@/store/store';

const ReduxProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        {children}
        <ReduxToastrLib
          newestOnTop={false}
          preventDuplicates
          progressBar
          closeOnToastrClick
          timeOut={4000}
          transitionIn="fadeIn"
          transitionOut="fadeOut"
        />
      </PersistGate>
    </Provider>
  );
};

export default ReduxProvider;
