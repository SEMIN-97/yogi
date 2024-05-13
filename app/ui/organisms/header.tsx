import Link from 'next/link';

import clsx from 'clsx';

import UserMenu from '@/ui/organisms/userMenu';
import Logo from '@/ui/atoms/logo';
import styles from './header.module.scss';

export default function Header() {
  return (
    <header className={clsx(
      'inner',
      styles.header
    )}>
      <h1 className={styles.logo}>
        <Link href="/" title='홈으로 이동'>
          <Logo></Logo>
        </Link>
      </h1>
      <UserMenu />
    </header>
  );
}
