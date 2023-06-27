import { Switch } from '@headlessui/react';
import cn from 'classnames';
import { FC } from 'react';

import { ITogglePublic } from '@/components/layout/header/upload-video/form/toggle-public/toggle-public.interface';

import styles from './TogglePublic.module.scss';

const TogglePublic: FC<ITogglePublic> = ({ isEnabled, clickHandler }) => {
  // const [enabled, setEnabled] = useState(isEnabled);
  return (
    <div className={styles.wrapper}>
      <Switch
        checked={isEnabled}
        onChange={clickHandler}
        className={styles.switch}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={cn(styles.thumbnail, {
            [styles.active]: isEnabled,
          })}
        />
      </Switch>
      <span className={styles.title}>
        Опубликовать видео: {isEnabled ? 'Да' : 'Нет'}
      </span>
    </div>
  );
};

export default TogglePublic;
