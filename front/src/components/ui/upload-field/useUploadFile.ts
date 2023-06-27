import { ChangeEvent } from 'react';
import { useMutation } from 'react-query';

import { UploadFieldHook } from '@/components/ui/upload-field/upload-field.interface';

import { errorCatch } from '@/utils/api.helper';

import { MediaService } from '@/services/media.interface';

const useUploadFile = ({
  onChange,
  folder,
  setValue,
  setIsChosen,
}: UploadFieldHook) => {
  const { mutateAsync } = useMutation(
    'upload file',
    (data: FormData) => MediaService.upload(data, folder, setValue),
    {
      onSuccess: ({ data }) => {
        onChange(data);
      },
      onError: (error: any) => {
        alert(errorCatch(error));
      },
    },
  );

  const uploadFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files?.length) return;

    setIsChosen && setIsChosen(true);

    const formData = new FormData();
    formData.append('media', files[0]);

    await mutateAsync(formData);
  };
  return { uploadFile };
};

export default useUploadFile;
