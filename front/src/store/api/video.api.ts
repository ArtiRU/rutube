import { VIDEO } from '@/services/video.service';

import { IVideo, IVideoDto } from '@/types/video.interface';

import { api } from '@/store/api/api';

export const videoApi = api.injectEndpoints({
  endpoints: builder => ({
    getVideoBySearchTerm: builder.query<IVideo[], string>({
      query: searchTerm => ({ url: `${VIDEO}`, params: { searchTerm } }),
    }),
    getAllVideo: builder.query<IVideo[], void>({
      query: () => ({ url: `${VIDEO}` }),
    }),
    getMostPopular: builder.query<IVideo[], void>({
      query: () => ({ url: `${VIDEO}/most-popular` }),
    }),
    getVideoById: builder.query<IVideo, number>({
      query: id => ({ url: `${VIDEO}/${id}` }),
      providesTags: (result, error, id) => [{ type: 'Video', id }],
    }),
    getVideoPrivate: builder.query<IVideo, number>({
      query: id => ({ url: `${VIDEO}/get-private/${id}`, id }),
      providesTags: (result, error, id) => [{ type: 'Video', id }],
    }),
    createVideo: builder.mutation<string, void>({
      query: () => ({
        url: `${VIDEO}`,
        method: 'POST',
      }),
      invalidatesTags: () => [{ type: 'Profile' }],
    }),
    updateVideo: builder.mutation<IVideo, IVideoDto>({
      query: ({ id, ...body }) => ({
        url: `${VIDEO}/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: 'Profile' },
        { type: 'Video', id },
      ],
    }),
    updateViews: builder.mutation<IVideo, number>({
      query: id => ({
        url: `${VIDEO}/update-views/${id}`,
        method: 'PUT',
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Video', id }],
    }),
    updateLikes: builder.mutation<IVideo, number>({
      query: id => ({
        url: `${VIDEO}/update-likes/${id}`,
        method: 'PUT',
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Video', id }],
    }),
    deleteVideo: builder.mutation<void, number>({
      query: id => ({
        url: `${VIDEO}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [
        { type: 'Profile' },
        { type: 'Video' },
      ],
    }),
  }),
});
