import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { MdSend } from 'react-icons/md';

import formStyles from '@/components/layout/header/auth-form/AuthForm.module.scss';
import { ICommentForm } from '@/components/pages/channel/channel.interface';
import Field from '@/components/ui/field/Field';

import { ICommentDto } from '@/types/comment.interface';

import { commentApi } from '@/store/api/comment.api';

const AddComment: FC<ICommentForm> = ({ videoId }) => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<ICommentDto>({
    mode: 'onChange',
  });

  const [writeComment, { isLoading }] = commentApi.useCreateCommentMutation();

  const onSubmit: SubmitHandler<ICommentDto> = async data => {
    writeComment({ ...data, videoId })
      .unwrap()
      .then(() => reset());
  };
  return (
    <form className={formStyles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className="relative">
        <Field
          {...register('message', {
            required: 'Сообщение не может быть пустым',
          })}
          placeholder="Введите комментарий"
          error={errors.message}
        />
        <button
          className="text-xl absolute right-2 top-1.5 text-purple"
          disabled={isLoading}
        >
          <MdSend />
        </button>
      </div>
    </form>
  );
};

export default AddComment;
