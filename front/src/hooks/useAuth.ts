import { useTypedSelector } from '@/hooks/useTypedSelector';

const useAuth = () => useTypedSelector(state => state.auth);

export default useAuth;
