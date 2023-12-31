import { useCallback, useEffect, useRef, useState } from 'react';

const usePlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoTime, setVideoTime] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const originalDuration = videoRef.current?.duration;

    if (originalDuration) {
      setVideoTime(originalDuration);
    }
  }, [videoRef.current?.duration]);

  const toggleVideo = useCallback(() => {
    if (!isPlaying) {
      videoRef.current?.play();
      setIsPlaying(true);
    } else {
      videoRef.current?.pause();
      setIsPlaying(false);
    }
  }, [isPlaying]);

  const forward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 15;
    }
  };
  const revert = () => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 15;
    }
  };

  const fullScreen = () => {
    const video = videoRef.current;

    if (!video) return;
    if (video.requestFullscreen) {
      video.requestFullscreen();
    }
  };

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;
    const updateVideo = () => {
      setCurrentTime(video.currentTime);
      setProgress((video.currentTime / videoTime) * 100);
    };

    video.addEventListener('timeupdate', updateVideo);

    return () => {
      video.removeEventListener('timeupdate', updateVideo);
    };
  }, [videoTime]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      switch (e.key) {
        case 'ArrowRight': {
          forward();
          break;
        }
        case 'ArrowLeft': {
          revert();
          break;
        }
        case ' ': {
          e.preventDefault();
          toggleVideo();
          break;
        }
        default:
          return;
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggleVideo]);
  return {
    videoRef,
    toggleVideo,
    fullScreen,
    status: {
      isPlaying,
      progress,
      currentTime,
      videoTime,
    },
  };
};

export default usePlayer;
