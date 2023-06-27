import { FC } from 'react';
import { BasicBlock } from '../basic-block/basic-block';
import styles from './film-card-small.module.scss';
import { Movie } from '@/const/types';
import { TicketCounter } from '../ticket-counter/ticket-counter';
import Link from 'next/link';

interface Props {
  isDeleteActive: boolean,
  movieData: Movie,
}

export const FilmCardSmall: FC<Props> = ({ movieData, isDeleteActive }) => {
  const { id, title, genre, posterUrl } = movieData;

  return (
    <BasicBlock as={'li'} className={styles.item}>
      <img src={posterUrl} alt={title} className={styles.poster}/>
      <div className={styles.shortDesc}>
        <Link href={`/movie/${id}`}><h3>{title}</h3></Link>
        <p className={styles.genre}>{genre}</p>
      </div>
      <TicketCounter movieID={id} isDeleteActive={isDeleteActive}/>
    </BasicBlock>
  );
}
