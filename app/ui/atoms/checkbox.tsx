import React from 'react';

import clsx from 'clsx';

import styles from './checkbox.module.scss';

interface CheckboxPros<T> {
  checked: boolean;
  label: string;
  onChange: (value: T) => void;
  disabled?: boolean;
  value?: T;
}

const Checkbox = <T,>({
  disabled = false,
  checked,
  label,
  onChange,
  value,
}: CheckboxPros<T>) => {
  function toggleChecked() {
    if (!value) {
      onChange(!checked as T);
      return;
    }

    const updatedValue = (checked ? null : value) as T;
    onChange(updatedValue);
  }

  return (
    <label className={clsx(
      styles.checkbox,
      {
        [styles.disabled]: disabled,
      }
    )}>
      <input
        type="checkbox"
        className="hidden"
        checked={checked}
        onChange={toggleChecked}
        disabled={disabled}
      />
      <div className={styles.icon}>
        <i className="material-symbols-rounded">check</i>
      </div>
      <span>{ label }</span>
    </label>
  );
};

export default Checkbox;
