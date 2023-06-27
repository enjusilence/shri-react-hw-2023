'use client';

import { FC, useContext } from 'react';
import styles from './cart-block.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import cartIcon from './img/basket.svg';
import { CartContext } from '@/utils/cartProvider';

export const CartBlock: FC = () => {
  const { cartState } = useContext(CartContext);

  const ticketCount = Object.values(cartState).reduce((acc, curr) => acc + curr, 0);

  return (
    <Link href={'/cart'} className={styles.wrapper}>
      <span className={styles.ticketCount} style={ticketCount === 0 ? {display: 'none'} : {}}>{ticketCount}</span>
      <Image src={cartIcon} alt='Корзина'/>
    </Link>
  );
}
