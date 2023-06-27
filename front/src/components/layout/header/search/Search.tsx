import { FC } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import useSearch from '@/components/layout/header/search/useSearch';
import VideoItem from '@/components/ui/video-item/VideoItem';

import styles from './Search.module.scss';

const Search: FC = () => {
  const { handleSearch, searchTerm, isSuccess, data } = useSearch();
  return (
    <div className={styles.search}>
      <label>
        <input
          type="text"
          placeholder="Поиск видео..."
          onChange={handleSearch}
          value={searchTerm}
        />
        <AiOutlineSearch />
      </label>
      {isSuccess && (
        <div className={styles.result}>
          {data?.length ? (
            data.map(video => <VideoItem isSmall item={video} key={video.id} />)
          ) : (
            <div className="text-white">Видео не найдено</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
