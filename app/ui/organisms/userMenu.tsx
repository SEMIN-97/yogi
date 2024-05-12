'use client';

import { useState } from 'react';

import clsx from 'clsx';

import FloatingMenu from '@/app/ui/molecules/floatingMenu';
import styles from './userMenu.module.scss';

const menus = [
  {
    label: '로그인/회원가입',
    link: {
      href: '/login',
    },
  },
  {
    label: '비회원 예약조회',
    link: {
      href: '/guest/reservation/check',
    },
  },
];

const UserMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(prev => !prev);
  }

  return (
    <div className={styles.wrapper}>
      <button
        type="button"
        aria-label="User Menu Button"
        aria-expanded={isMenuOpen}
        className={styles.btnMenu}
        onClick={toggleMenu}
      >
        <i className="material-symbols-rounded">menu</i>
        <div className={styles.userIcon}>
          <i className="material-symbols-rounded">person</i>
        </div>
      </button>
      <div className={clsx(
        styles.floatingMenu,
        {
          [styles.hide]: !isMenuOpen,
        }
      )}>
        <nav aria-label="User Menu">
          <FloatingMenu menus={menus} />
        </nav>
      </div>
    </div>
  );
};

export default UserMenu;
