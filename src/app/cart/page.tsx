'use client';

import { useContext } from 'react';
import styles from './cart.module.scss';
import { CartContext } from '@/utils/cartProvider';
import { useQuery } from 'react-query';
import { fetchMovies } from '@/api/api';
import { FilmList } from '@/components/film-list/film-list';
import { Main } from '@/components/main/main';

export default function Cart() {
  const { cartState } = useContext(CartContext);
  const { data } = useQuery('movies', fetchMovies);

  const moviesInCart = data?.filter(i => Object.keys(cartState).includes(i.id));

  return (
    <Main>
      <FilmList movieList={moviesInCart} />
    </Main>
  );
}
