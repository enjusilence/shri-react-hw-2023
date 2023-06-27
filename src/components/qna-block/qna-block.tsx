'use client'

import { FC, MouseEventHandler, useState } from 'react';
import styles from './qna-block.module.scss';
import { BasicBlock } from '../basic-block/basic-block';

interface Props {
  question: string,
  answer: string,
}

export const QnABlock: FC<Props> = ({ question, answer }: Props) => {
  const [isActive, setIsActive] = useState(false);

  const handleOnClick = () => {
    setIsActive(!isActive);
  }

  return (
  <BasicBlock as={'li'} className={styles.block}>
    <article className={styles.article}>
      <h2 className={styles.header} onClick={handleOnClick}>{question}</h2>
      {isActive && <p>{answer}</p>}
    </article>
    <button className={styles.button} onClick={handleOnClick} style={isActive ? {transform: 'rotate(180deg)'} : {}}/>
  </BasicBlock>
  );
}
