'use client';

import { useContext } from 'react';
import styles from './cart.module.scss';
import { CartContext } from '@/utils/cartProvider';
import { useQuery } from 'react-query';
import { fetchMovies } from '@/api/api';
import { FilmList } from '@/components/film-list/film-list';
import { Main } from '@/components/main/main';
import { BasicBlock } from '@/components/basic-block/basic-block';

export default function Cart() {
  const { cartState } = useContext(CartContext);
  const { data } = useQuery('movies', fetchMovies);

  const ticketCount = Object.values(cartState).reduce((acc, curr) => acc + curr, 0);

  const moviesInCart = data?.filter(i => Object.keys(cartState).filter(key => cartState[key] > 0).includes(i.id));

  return (
    <Main className={styles.main}>
      <FilmList movieList={moviesInCart} isDeleteActive/>
      <BasicBlock as={'div'} className={styles.total}>
        <span>Итого билетов:</span>
        <span>{ticketCount}</span>
      </BasicBlock>
    </Main>
  );
}
