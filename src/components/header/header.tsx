import { FC } from 'react';
import styles from './header.module.scss';
import Link from 'next/link';
import { CartBlock } from '../cart-block/cart-block';

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Link href={'/'}>Билетопоиск</Link>
      <CartBlock />
    </header>
  );
}
