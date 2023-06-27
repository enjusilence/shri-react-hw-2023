'use client';
 
import { useParams } from 'next/navigation';
import styles from './movie.module.scss';
import { Main } from '@/components/main/main';
import { FilmCardLarge } from '@/components/film-card-large/film-card-large';
import { useQuery } from 'react-query';
import { fetchCommentsByID, fetchMovieByID } from '@/api/api';
import { CommentList } from '@/components/comment-list/comment-list';

export default function Movie() {
  const { movieID } = useParams();

  const movieQuery = useQuery(['movie', movieID], () => fetchMovieByID(movieID));
  const commentsQuery = useQuery(['comments', movieID], () => fetchCommentsByID(movieID));

  return (
    <Main className={styles.main}>
      <FilmCardLarge movieData={movieQuery.data} isLoading={movieQuery.isLoading}/>
      <CommentList commentList={commentsQuery.data} isLoading={commentsQuery.isLoading}/>
    </Main>
  );
}
