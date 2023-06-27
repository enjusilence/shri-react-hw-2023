import { FC } from 'react';
import styles from './comment-list.module.scss';
import { Comment } from '@/const/types';
import { UserComment } from '../user-comment/user-comment';

interface Props {
  isLoading: boolean,
  commentList?: Comment[],
}

export const CommentList: FC<Props> = ({ isLoading, commentList }) => {
  if (isLoading || !commentList) return <span>Loading...</span>;

  return (
    <ul className={styles.list}>
      {commentList.map(i => <UserComment key={i.id} commentData={i}/>)}
    </ul>
  );
}
