'use client';

import { FilmList } from '@/components/film-list/film-list';
import { FilterBlock } from '@/components/filter-block/filter-block';
import { Main } from '@/components/main/main';
import styles from './main.module.scss';
import { useQuery } from 'react-query';
import { fetchCinemas, fetchMovies } from '@/api/api';
import { useState } from 'react';
import { Movie } from '@/const/types';

export type Filter = (i: Movie) => boolean;

export default function Home() {
  const defaultFilter: Filter = (x) => {
    return true;
  }

  const [filterFunc, setFilterFunc] = useState<Filter>(() => (x: Movie) => defaultFilter(x));
  const movieQuery = useQuery('movies', fetchMovies);
  const cinemaQuery = useQuery('cinema', fetchCinemas);

  if (!movieQuery.data || !cinemaQuery.data) return <span>Loading...</span>;

  const genreList = Array.from(new Set(movieQuery.data.map(i => i.genre)));

  const movieList = movieQuery.data.filter(filterFunc);

  return (
    <Main className={styles.main}>
      <FilterBlock genreList={genreList} cinemaList={cinemaQuery.data} setFilterFunc={setFilterFunc}/>
      <FilmList movieList={movieQuery.data}/>
    </Main>
  );
}
