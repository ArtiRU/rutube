import { instance } from '../api/axios';

export interface IMediaResponse {
  name: string;
  url: string;
}

export const MEDIA = 'media';

export const MediaService = {
  async upload(
    media: FormData,
    folder?: string,
    setValue?: (val: number) => void,
  ) {
    return instance.post<IMediaResponse>(`${MEDIA}`, media, {
      params: { folder },
      headers: { 'Content-Type': 'multipart/form-data' },
      onUploadProgress: (progressEvent: any) => {
        if (setValue) {
          const progress = (progressEvent.loaded / progressEvent.total) * 100;
          setValue(Math.ceil(progress));
        }
      },
    });
  },
};
