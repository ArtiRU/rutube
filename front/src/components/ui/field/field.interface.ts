import { InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export interface IFieldProps {
  error?: FieldError;
  style?: any;
}

type TypeInputAttrs = InputHTMLAttributes<HTMLInputElement> & IFieldProps;

export interface IField extends TypeInputAttrs {}
