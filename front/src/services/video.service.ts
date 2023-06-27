import { IVideo } from '@/types/video.interface';

import { instance } from '../api/axios';

export const VIDEO = 'video';

export const VideoService = {
  async getAll() {
    return instance.get<IVideo[]>(`${VIDEO}`);
  },

  async getVideoById(id: number) {
    return instance.get<IVideo>(`${VIDEO}/${id}`);
  },

  async getMostPopular() {
    return instance.get<IVideo[]>(`${VIDEO}/most-popular`);
  },
};
