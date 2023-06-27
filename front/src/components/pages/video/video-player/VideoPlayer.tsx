import cn from 'classnames';
import { FC, KeyboardEvent, useRef } from 'react';
import { BsFullscreen } from 'react-icons/bs';
import { IoPause, IoPlay } from 'react-icons/io5';
import toggleFullscreen from 'toggle-fullscreen';

import usePlayer from '@/components/pages/video/video-player/usePlayer';
import { IVideoPlayer } from '@/components/pages/video/video-player/video-player.interface';

import { formatVideoTime } from '@/utils/format-videoTime';

import styles from './VideoPlayer.module.scss';

const VideoPlayer: FC<IVideoPlayer> = ({ videoPath }) => {
  const ref = useRef(null);

  const { videoRef, toggleVideo, status, fullScreen } = usePlayer();

  const handleFullscreen = async (e: KeyboardEvent) => {
    if (!ref.current) return;
    if (e.key == 'f') {
      await toggleFullscreen(ref.current);
    }
  };

  return (
    <div
      className={styles.wrapper}
      ref={ref}
      tabIndex={0}
      onKeyDown={handleFullscreen}
    >
      <video
        className={styles.player}
        ref={videoRef}
        src={`${videoPath}#t=1`}
        preload="metadata"
        onClick={toggleVideo}
      />
      <div
        className={cn(styles.controls, {
          [styles.hide]: status.isPlaying,
        })}
      >
        <button onClick={toggleVideo}>
          {status.isPlaying ? <IoPause /> : <IoPlay />}
        </button>
        <div className={styles.progressBarWrapper}>
          <div
            className={styles.progressBar}
            style={{
              width: `${status.progress}%`,
            }}
          />
        </div>
        <div className={styles.timeControls}>
          <p>{formatVideoTime(status.currentTime)}</p>
          <p> / </p>
          <p>{formatVideoTime(status.videoTime)}</p>
        </div>
        <button onClick={fullScreen}>
          <BsFullscreen />
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
