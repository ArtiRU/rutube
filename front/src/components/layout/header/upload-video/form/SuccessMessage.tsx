import { FC } from 'react';

import styles from './Form.module.scss';

const SuccessMessage: FC = () => {
  return <div className={styles.message}>Видео успешно загружено!</div>;
};

export default SuccessMessage;
