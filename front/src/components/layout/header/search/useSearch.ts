import { ChangeEvent, useState } from 'react';

import { videoApi } from '@/store/api/video.api';

import useDebounce from '@/hooks/useDebounce';

const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const debounceSearch = useDebounce(searchTerm, 500);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  const { data, isSuccess } = videoApi.useGetVideoBySearchTermQuery(
    debounceSearch,
    {
      skip: !debounceSearch,
      selectFromResult: ({ data, ...rest }) => ({
        data: data?.slice(0, 4),
        ...rest,
      }),
    },
  );

  return {
    data,
    isSuccess,
    handleSearch,
    searchTerm,
  };
};

export default useSearch;
