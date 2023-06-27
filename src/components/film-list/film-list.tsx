import { FC } from 'react';
import styles from './film-list.module.scss';
import { FilmCardSmall } from '../film-card-small/film-card-small';
import { Movie } from '@/const/types';

interface Props {
  isDeleteActive: boolean,
  movieList?: Movie[],
}

export const FilmList: FC<Props> = ({ movieList, isDeleteActive }: Props) => {
  if (!movieList) return <span>Loading...</span>;

  return (
    <ul className={styles.list}>
      {movieList.map(i => <FilmCardSmall key={i.id} movieData={i} isDeleteActive={isDeleteActive}/>)}
    </ul>    
  );
}
