import { Movie } from '@/const/types';
import { BasicBlock } from '../basic-block/basic-block';
import styles from './film-card-large.module.scss';
import { FC } from 'react';
import { TicketCounter } from '../ticket-counter/ticket-counter';
import { translateGenre } from '@/utils/translateGenre';

interface Props {
  isLoading: boolean,
  movieData?: Movie,
}

export const FilmCardLarge: FC<Props> = ({ isLoading, movieData }) => {
  if (isLoading || !movieData) return <span>Loading...</span>;

  const { id, title, genre, posterUrl, releaseYear, rating, director, description } = movieData;

  return (
    <BasicBlock as={'article'} className={styles.card}>
      <img src={posterUrl} alt={title} className={styles.poster}/>
      <h1>{title}</h1>
      <div className={styles.shortDescription}>
        <p><b>Жанр:</b> {translateGenre(genre)}</p>
        <p><b>Год выпуска:</b> {releaseYear}</p>
        <p><b>Рейтинг:</b> {rating}</p>
        <p><b>Режиссер:</b> {director}</p>
      </div>
      <p className={styles.descTitle}><b>Описание</b></p>
      <p className={styles.description}>{description}</p>
      <TicketCounter movieID={id} isDeleteActive={false} />
    </BasicBlock>
  );
}
