import { FC } from 'react';
import { Controller } from 'react-hook-form';

import SuccessMessage from '@/components/layout/header/upload-video/form/SuccessMessage';
import Footer from '@/components/layout/header/upload-video/form/footer/Footer';
import { IUploadVideoForm } from '@/components/layout/header/upload-video/form/form.interface';
import TogglePublic from '@/components/layout/header/upload-video/form/toggle-public/TogglePublic';
import useUploadVideoForm from '@/components/layout/header/upload-video/form/useUploadVideoForm';
import VideoInformation from '@/components/layout/header/upload-video/form/video-information/VideoInformation';
import Field from '@/components/ui/field/Field';
import TextArea from '@/components/ui/text-area/TextArea';
import UploadField from '@/components/ui/upload-field/UploadField';

import { IMediaResponse } from '@/services/media.interface';

import styles from '../UploadVideo.module.scss';

const UploadVideoForm: FC<IUploadVideoForm> = ({
  handleCloseModal,
  videoId,
}) => {
  const { form, status, media } = useUploadVideoForm({
    videoId,
    handleCloseModal,
  });
  return (
    <form
      className="flex flex-wrap h-full"
      onSubmit={form.handleSubmit(form.onSubmit)}
    >
      {status.isSuccess && <SuccessMessage />}
      {status.isChosen ? (
        <>
          <div className="w-7/12 pr-6 pt-3 relative">
            <Field
              {...form.register('name', {
                required: 'Название обязательно!',
              })}
              placeholder="Наименование"
              error={form.errors.name}
            />
            <TextArea
              {...form.register('description', {
                required: 'Описангие обязательно!',
              })}
              placeholder="Описание"
              error={form.errors.description}
            />
            <div className="mt-8">
              <Controller
                control={form.control}
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
              <Controller
                control={form.control}
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
              <Footer percent={status.percent} isUploaded={status.isUploaded} />
            </div>
          </div>
          <div className="w-5/12 p-3 pl-10">
            <VideoInformation
              fileName={media.videoFileName}
              videoId={videoId}
              thumbnailPath={media.thumbnailPath}
              isUploaded={status.isUploaded}
            />
          </div>
        </>
      ) : (
        <div className={styles.uploadScreen}>
          <Controller
            control={form.control}
            render={() => (
              <UploadField
                title="Сначала загрузи видео"
                onChange={media.handleUploadVideo}
                setValue={status.setProgressPercentage}
                setIsChosen={status.setIsChosen}
              />
            )}
            name="videoPath"
          />
        </div>
      )}
    </form>
  );
};

export default UploadVideoForm;
