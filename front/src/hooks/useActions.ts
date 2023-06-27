import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { rootActions } from '@/store/root-action';

const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(rootActions, dispatch);
};

export default useActions;
