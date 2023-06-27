import { FC } from 'react';
import styles from './header.module.scss';
import Link from 'next/link';

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Link href={'/'}>Билетопоиск</Link>
      <Link href={'/cart'}>Корзина</Link>
    </header>
  );
}
