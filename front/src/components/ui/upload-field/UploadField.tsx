import { FC } from 'react';

import { IUploadField } from '@/components/ui/upload-field/upload-field.interface';
import useUploadFile from '@/components/ui/upload-field/useUploadFile';

import styles from './UploadField.module.scss';

const UploadField: FC<IUploadField> = ({
  onChange,
  folder,
  setValue,
  setIsChosen,
  title,
}) => {
  const { uploadFile } = useUploadFile({
    onChange,
    folder,
    setValue,
    setIsChosen,
  });
  return (
    <div className={styles.file}>
      {title && <h1>{title}</h1>}
      <label>
        <span className="sr-only">Выберите файл</span>
        <input type="file" onChange={uploadFile} />
      </label>
    </div>
  );
};

export default UploadField;
