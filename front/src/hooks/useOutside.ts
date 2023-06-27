import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

type TypeOut = {
  isShow: boolean;
  ref: any;
  setIsShow: Dispatch<SetStateAction<boolean>>;
};

const useOutside = (initialValue: boolean): TypeOut => {
  const [isShow, setIsShow] = useState<boolean>(initialValue);
  const ref = useRef<any>(null);

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return { isShow, ref, setIsShow };
};

export default useOutside;
