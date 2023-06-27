'use client';

import { FilmList } from '@/components/film-list/film-list';
import { FilterBlock } from '@/components/filter-block/filter-block';
import { Main } from '@/components/main/main';
import styles from './main.module.scss';
import { useQuery } from 'react-query';
import { fetchCinemas, fetchMovies, fetchMoviesByCinemaID } from '@/api/api';
import { useState } from 'react';
import { Movie } from '@/const/types';

export type Filter = (i: Movie) => boolean;

export interface FilterFormData {
  searchName: string,
  searchGenre: string,
  searchCinema: string,
}

export default function Home() {
  const [filterFormData, setFilterFormData] = useState<FilterFormData>({
    searchName: '',
    searchGenre: '',
    searchCinema: '',
  })

  const request = filterFormData.searchCinema === '' ? fetchMovies : () => fetchMoviesByCinemaID(filterFormData.searchCinema);

  const movieQuery = useQuery(['movies', filterFormData.searchCinema], request);
  const cinemaQuery = useQuery('cinema', fetchCinemas);

  if (!movieQuery.data || !cinemaQuery.data) return <span>Loading...</span>;

  const filterFunc: Filter = (x) => {
    const regex = new RegExp(filterFormData.searchName, 'i')
    const namePart = filterFormData.searchName === '' ? true : x.title.search(regex) > -1;
    const genrePart = filterFormData.searchGenre === '' ? true : x.genre === filterFormData.searchGenre;
    return (namePart && genrePart);
  }

  const genreList = Array.from(new Set(movieQuery.data.map(i => i.genre)));

  const movieList = movieQuery.data.filter(filterFunc);

  return (
    <Main className={styles.main}>
      <FilterBlock genreList={genreList} cinemaList={cinemaQuery.data} formData={filterFormData} setFormData={setFilterFormData}/>
      <FilmList movieList={movieList}/>
    </Main>
  );
}
