import { FieldError } from 'react-hook-form';

import { ErrorMessageProps } from '@/types/common';

export function getErrorMessage(error:  FieldError | undefined) {
  if (!error) {
    return null;
  }

  return {
    type: error.type,
    message: error.message,
  } as ErrorMessageProps;
}
