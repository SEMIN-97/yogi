import clsx from 'clsx';

import styles from './textButton.module.scss';

interface TextButtonProps {
  label: string;
  disabled?: boolean;
  icon?: string;
  iconPos?: 'left' | 'right';
  onClick?: () => void;
  size?: 'small' | 'medium';
  variant?: 'primary' | 'secondary' | 'plain';
}

const TextButton = ({
  disabled = false,
  iconPos = 'left',
  size = 'medium',
  variant = 'primary',
  icon,
  label,
  onClick
}: TextButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(
        styles.textButton,
        styles[size],
        styles[variant],
        {
          [styles.iconRight]: 'right' === iconPos,
        }
      )}
      onClick={onClick}
      disabled={disabled}
    >
      { icon && <i className="material-symbols-rounded">{ icon }</i> }
      <span>{ label }</span>
    </button>
  );
};

export default TextButton;
