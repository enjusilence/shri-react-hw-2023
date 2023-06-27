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
    <BasicBlock as={'li'} >
      <img src={undefined} />
      <p>{name}</p>
      <p>{text}</p>
      <p>{rating}</p>
    </BasicBlock>
  );
}
