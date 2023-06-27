import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { toastr } from 'react-redux-toastr';

import Layout from '@/components/layout/Layout';
import TogglePublic from '@/components/layout/header/upload-video/form/toggle-public/TogglePublic';
import VideoInformation from '@/components/layout/header/upload-video/form/video-information/VideoInformation';
import Button from '@/components/ui/button/Button';
import Field from '@/components/ui/field/Field';
import Loader from '@/components/ui/loader/Loader';
import TextArea from '@/components/ui/text-area/TextArea';
import UploadField from '@/components/ui/upload-field/UploadField';

import { IMediaResponse } from '@/services/media.interface';

import { IVideoDto } from '@/types/video.interface';

import { videoApi } from '@/store/api/video.api';

const VideoEdit: FC = () => {
  const { query, push } = useRouter();
  const videoId = Number(query?.id);

  const { data, isLoading } = videoApi.useGetVideoByIdQuery(videoId, {
    skip: !videoId,
  });

  const [updateVideo, { isLoading: isUpdateLoading }] =
    videoApi.useUpdateVideoMutation();

  const {
    register,
    watch,
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<IVideoDto>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<IVideoDto> = data => {
    updateVideo({ ...data, id: videoId })
      .unwrap()
      .then(() => {
        toastr.success('Статус', 'Видео обновлено успешно');
        push('/studio');
      });
  };

  useEffect(() => {
    if (!watch('id') && data) {
      setValue('name', data.name);
      setValue('description', data.description);
      setValue('videoPath', data.videoPath);
      setValue('thumbnailPath', data.thumbnailPath);
      setValue('isPublic', data.isPublic);
    }
  }, [data]);

  return (
    <Layout>
      <div>
        {isLoading ? (
          <Loader count={5} />
        ) : (
          <form className="flex flex-wrap" onSubmit={handleSubmit(onSubmit)}>
            <div className="w-7/12 pr-6 pt-8">
              <Field
                {...register('name', {
                  required: 'Наименование обязательно!',
                })}
                placeholder="Наименование видео"
                error={errors.name}
              />
              <TextArea
                {...register('description', {
                  required: 'Описангие обязательно!',
                })}
                placeholder="Описание"
                error={errors.description}
              />
              <div className="mt-8">
                <span className="text-white mb-2 block">Превью: </span>
                <Controller
                  control={control}
                  name="thumbnailPath"
                  render={({ field: { onChange } }) => (
                    <UploadField
                      folder="thumbnails"
                      onChange={(value: IMediaResponse) => {
                        onChange(value.url);
                      }}
                    />
                  )}
                />
              </div>
              <div className="mt-8">
                <span className="text-white mb-2 block">Видео: </span>
                <Controller
                  control={control}
                  render={({ field: { onChange } }) => (
                    <UploadField
                      onChange={(value: IMediaResponse) => {
                        onChange(value.url);
                      }}
                    />
                  )}
                  name="videoPath"
                />
              </div>
              <div className="mt-8">
                <Controller
                  control={control}
                  name="isPublic"
                  render={({ field: { onChange, value } }) => (
                    <TogglePublic
                      clickHandler={() => {
                        onChange(!value);
                      }}
                      isEnabled={!!value}
                    />
                  )}
                />
              </div>
              <div className="w-5/12 p-3 pl-10">
                <VideoInformation
                  fileName={''}
                  videoId={videoId}
                  thumbnailPath={watch('thumbnailPath')}
                  isUploaded
                />
              </div>
            </div>
            <div className="mt-10">
              <Button>{isUpdateLoading ? 'Ожидайте' : 'Сохранить'}</Button>
            </div>
          </form>
        )}
      </div>
    </Layout>
  );
};

export default VideoEdit;
