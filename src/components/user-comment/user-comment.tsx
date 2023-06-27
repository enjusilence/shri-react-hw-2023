import { FC } from 'react';
import styles from './user-comment.module.scss';
import { BasicBlock } from '../basic-block/basic-block';
import { Comment } from '@/const/types';

interface Props {
  commentData: Comment,
}

export const UserComment: FC<Props> = ({ commentData }) => {
  const { name, rating, text } = commentData;

  return (
    <BasicBlock as={'li'} className={styles.card}>
      <div className={styles.avatar}/>
      <p className={styles.name}><b>{name}</b></p>
      <p className={styles.text}>{text}</p>
      <p className={styles.rating}><b>Оценка:</b> {rating}</p>
    </BasicBlock>
  );
}
