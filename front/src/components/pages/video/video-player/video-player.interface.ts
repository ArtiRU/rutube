export interface IVideoElement extends HTMLVideoElement {
  msRequestFullscreen?: () => void;
  mozRequestFullscreen?: () => void;
  webkitRequestFullscreen?: () => void;
}

export interface IVideoPlayer {
  videoPath: string;
  poster?: string;
}
