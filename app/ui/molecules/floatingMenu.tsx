import MenuItem, { MenuItemProps } from '@/app/ui/atoms/menuItem';
import styles from './floatingMenu.module.scss';

interface FloatingMenuProps {
  menus: Array<MenuItemProps>;
}

const FloatingMenu = ({
  menus,
}: FloatingMenuProps) => {
  return (
    <ul className={styles.menu}>
      {
        menus.map(({
          active,
          label,
          link,
          onClick,
        }) => (
          <li key={label}>
            <MenuItem key={label} {...{ active, label, link, onClick }} />
          </li>
        ))
      }
    </ul>
  );
};

export default FloatingMenu;
