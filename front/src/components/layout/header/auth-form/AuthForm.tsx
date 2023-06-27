import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaUserCircle } from 'react-icons/fa';

import { IAuthFields } from '@/components/layout/header/auth-form/auth.interface';
import Button from '@/components/ui/button/Button';
import Field from '@/components/ui/field/Field';

import { validEmail } from '@/utils/validEmail';

import useActions from '@/hooks/useActions';
import useAuth from '@/hooks/useAuth';
import useOutside from '@/hooks/useOutside';

import iconStyles from '../icons-right/IconsRight.module.scss';

import styles from './AuthForm.module.scss';

const AuthForm: FC = () => {
  const { isLoading } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuthFields>({
    mode: 'onChange',
  });
  const [type, setType] = useState<'login' | 'register'>('login');
  const { ref, isShow, setIsShow } = useOutside(false);

  const { registration, login } = useActions();

  const onSubmit: SubmitHandler<IAuthFields> = data => {
    if (type === 'register') registration(data);
    else if (type === 'login') login(data);
  };

  return (
    <div className={styles.wrapper} ref={ref}>
      <button className={iconStyles.button} onClick={() => setIsShow(!isShow)}>
        <FaUserCircle fill="#a4a4a4" />
      </button>
      {isShow && (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Field
            {...register('email', {
              required: 'Email должен быть обязательным!',
              pattern: {
                value: validEmail,
                message: 'Неверный Email',
              },
            })}
            placeholder="Email"
            error={errors.email}
          />
          <Field
            {...register('password', {
              required: 'Пароль должен быть обязательным!',
              minLength: {
                value: 6,
                message: 'Минимальная длина пароля - 6 символов!',
              },
            })}
            placeholder="Пароль"
            error={errors.password}
          />
          <div className="mt-5 mb-1 text-center">
            <Button onClick={() => setType('login')} disabled={isLoading}>
              Войти
            </Button>
          </div>

          <Button
            className={styles.register}
            onClick={() => setType('register')}
            disabled={isLoading}
          >
            Регистрация
          </Button>
        </form>
      )}
    </div>
  );
};

export default AuthForm;
