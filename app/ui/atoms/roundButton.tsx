import clsx from 'clsx';

import styles from './roundButton.module.scss';

type IconButtonProps = {
  active?: boolean;
  disabled?: boolean;
  icon?: string;
  label?: string;
  onClick?: () => void;
  outlined?: boolean;
  size?: 'small' | 'medium';
}

const RoundButton = ({
  active = false,
  disabled = false,
  outlined = false,
  size = 'medium',
  icon,
  label,
  onClick,
}: IconButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(
        styles.roundButton,
        styles[size],
        {
          [styles.active]: active,
          [styles.outlined]: outlined,
        }
      )}
      onClick={onClick}
      disabled={disabled}
    >
      { icon && <i className="material-symbols-rounded">{ icon }</i> }
      { label && label }
    </button>
  );
};

export default RoundButton;
