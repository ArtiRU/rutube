import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { IUploadVideoForm } from '@/components/layout/header/upload-video/form/form.interface';

import { IMediaResponse } from '@/services/media.interface';

import { IVideoDto } from '@/types/video.interface';

import { videoApi } from '@/store/api/video.api';

const useUploadVideoForm = ({
  handleCloseModal,
  videoId,
}: IUploadVideoForm) => {
  const {
    register,
    formState: { errors },
    control,
    setValue,
    handleSubmit,
    reset,
    watch,
  } = useForm<IVideoDto>({
    mode: 'onChange',
  });

  const [updateVideo, { isSuccess }] = videoApi.useUpdateVideoMutation();

  const onSubmit: SubmitHandler<IVideoDto> = data => {
    updateVideo({ ...data, id: videoId })
      .unwrap()
      .then(() => {
        handleCloseModal();
        reset();
      });
  };

  const [videoFileName, setVideoFileName] = useState('');
  const videoPath = watch('videoPath');
  const thumbnailPath = watch('thumbnailPath');

  const handleUploadVideo = (value: IMediaResponse) => {
    setValue('videoPath', value.url);
    setValue('name', value.name);
    setVideoFileName(value.name);
  };

  const [isChosen, setIsChosen] = useState(false);
  const [percent, setPercent] = useState(0);
  const [isUploaded, setIsUploaded] = useState(false);

  const setProgressPercentage = (val: number) => {
    setPercent(val);
    if (val === 100) setIsUploaded(true);
  };
  return {
    form: {
      register,
      errors,
      control,
      handleSubmit,
      onSubmit,
    },
    media: {
      videoPath,
      thumbnailPath,
      videoFileName,
      handleUploadVideo,
    },
    status: {
      isSuccess,
      isChosen,
      setIsChosen,
      percent,
      isUploaded,
      setProgressPercentage,
    },
  };
};

export default useUploadVideoForm;
