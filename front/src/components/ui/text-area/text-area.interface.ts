import { TextareaHTMLAttributes } from 'react';

import { IFieldProps } from '@/components/ui/field/field.interface';

type TypeTextArea = TextareaHTMLAttributes<HTMLTextAreaElement> & IFieldProps;

export interface ITextArea extends TypeTextArea {}
