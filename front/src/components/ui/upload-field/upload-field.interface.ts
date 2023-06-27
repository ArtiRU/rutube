import { Dispatch, SetStateAction } from 'react';

export interface UploadFieldHook {
  onChange: (...event: any) => void;
  folder?: string;
  setValue?: (val: number) => void;
  setIsChosen?: Dispatch<SetStateAction<boolean>>;
}

export interface IUploadField extends UploadFieldHook {
  title?: string;
}
