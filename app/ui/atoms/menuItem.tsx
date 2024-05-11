import Link, { LinkProps } from 'next/link';

import clsx from 'clsx';

import styles from './menuItem.module.scss';

export interface MenuItemProps {
  label: string;
  active?: boolean;
  link?: LinkProps;
  onClick?: () => void;
}

const LinkItem = ({
  active,
  label,
  link,
}: MenuItemProps) => {
  const linkProps = {
    ...(link && {
      href: link.href,
      prefetch: link.prefetch,
      replace: link.replace,
      scroll: link.scroll,
    }),
  } as LinkProps;

  return <Link
    className={clsx(
      styles.item,
      {
        active: active,
      }
    )}
    { ...linkProps }
  >
    { label }
  </Link>;
};

const ButtonItem = ({
  active,
  label,
  onClick,
}: MenuItemProps) => {
  return <button
    type="button"
    className={clsx(
      styles.item,
      {
        [styles.active]: active,
      }
    )}
    onClick={onClick}
  >
    { label }
    { active && <i className="icon material-symbols-rounded">check</i> }
  </button>;
};

const MenuItem = ({
  active,
  label,
  link,
  onClick,
}: MenuItemProps) => {
  if (link) {
    return <LinkItem {...{ active, label, link }} />;
  }
  return <ButtonItem {...{ active, label, onClick }} />;
};

export default MenuItem;
