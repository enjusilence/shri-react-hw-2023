import { FC } from 'react';
import styles from './film-list.module.scss';
import { FilmCardSmall } from '../film-card-small/film-card-small';
import { Movie } from '@/const/types';

interface Props {
  movieList?: Movie[],
}

export const FilmList: FC<Props> = ({ movieList }: Props) => {
  if (!movieList) return <span>Loading...</span>;

  return (
    <ul className={styles.list}>
      {movieList.map(i => <FilmCardSmall key={i.id} movieData={i}/>)}
    </ul>    
  );
}
