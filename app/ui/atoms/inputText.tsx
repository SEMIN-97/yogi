import React from 'react';

import clsx from 'clsx';

import { ErrorMessageProps } from '@/types/common';
import styles from './inputText.module.scss';

export interface InputTextProps {
  label: string;
  name: string;
  value: string;
  error?: ErrorMessageProps | null;
  isDisabled?: boolean;
  isRequired?: boolean;
  placeholder?: string;
  type?: string;
  onBlur?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputText = React.forwardRef<HTMLInputElement, InputTextProps>(
  ({
    isDisabled = false,
    isRequired = false,
    type = 'text',
    label,
    name,
    value,
    error,
    placeholder,
    onChange,
    onBlur,
  }, ref) => {
    return (
      <>
        <label className={clsx(
          styles.label,
          {
            [styles.required]: isRequired,
          }
        )}>{label}</label>
        <div className={clsx(
          styles.inputContainer,
          {
            [styles.error]: error,
            [styles.disabled]: isDisabled,
          }
        )}>
          <input
            {...{ type, name, value, placeholder, ref, onChange, onBlur }}
            disabled={isDisabled}
          />
        </div>
        <p className={styles.errorMessage}>{error?.message}</p>
      </>
    );
  }
);

InputText.displayName = 'InputText';

export default InputText;
