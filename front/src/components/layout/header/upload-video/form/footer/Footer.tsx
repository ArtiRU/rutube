import cn from 'classnames';
import { FC } from 'react';
import { MdCheckCircle, MdUpload } from 'react-icons/md';

import { IFooter } from '@/components/layout/header/upload-video/form/footer/footer.interface';
import Button from '@/components/ui/button/Button';

import styles from './Footer.module.scss';

const Footer: FC<IFooter> = ({ isUploaded, percent }) => {
  console.log(isUploaded);
  return (
    <div className={styles.footer}>
      <div
        className={cn(styles.status, {
          [styles.iconsUploaded]: isUploaded,
        })}
      >
        {isUploaded ? (
          <MdCheckCircle className={styles.ckeckIcon} />
        ) : (
          <MdUpload className={styles.uploadIcon} />
        )}

        <span>
          {isUploaded ? 'Видео загружено' : `Загрузка ${percent}%...`}
        </span>
      </div>
      <div>
        <Button>Сохранить</Button>
      </div>
    </div>
  );
};

export default Footer;
