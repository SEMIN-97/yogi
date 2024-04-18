import clsx from 'clsx';

import styles from './boxButton.module.scss';

interface BoxButtonProps {
  label: string;
  disabled?: boolean;
  icon?: string;
  iconPos?: 'left' | 'right'
  onClick?: () => void;
  rounded?: boolean;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'plain';
}

const BoxButton = ({
  disabled = false,
  rounded = false,
  iconPos = 'left',
  size = 'medium',
  variant = 'primary',
  icon,
  label,
  onClick,
}: BoxButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(
        styles.boxButton,
        styles[size],
        styles[variant],
        {
          [styles.rounded]: rounded,
          [styles.iconRight]: 'right' === iconPos,
        }
      )}
      onClick={onClick}
      disabled={disabled}
    >
      { icon && <i className="material-symbols-rounded">{ icon }</i> }
      { label }
    </button>
  );
};

export default BoxButton;
