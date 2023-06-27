import Image from 'next/image';
import { FC } from 'react';

import { IVideoInformation } from '@/components/layout/header/upload-video/form/video-information/video-information';

import styles from './VideoInformation.module.scss';

const VideoInformation: FC<IVideoInformation> = ({
  videoId,
  fileName,
  thumbnailPath,
  isUploaded,
}) => {
  return (
    <div className={styles.info}>
      {!thumbnailPath ? (
        <div className={styles.thumbnail}>
          {!isUploaded
            ? 'Идет загрузка видео...'
            : 'Ты должен загрузить превью'}
        </div>
      ) : (
        <Image
          src={thumbnailPath}
          alt={thumbnailPath}
          fill={true}
          sizes="30vh"
        />
      )}
      <div className={styles.details}>
        <div>
          <span>Ссылка на видео: </span>
          <span className="text-green-400">
            <div>Ссылка на видео: {`http://localhost/v/${videoId}`}</div>
          </span>
        </div>
        <div>
          <span>Имя файла: </span>
          <span className="text-purple">{fileName}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoInformation;
