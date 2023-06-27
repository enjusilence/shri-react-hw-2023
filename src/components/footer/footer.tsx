import { FC } from 'react';
import styles from './footer.module.scss';
import Link from 'next/link';

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <Link href='/qna'>Вопросы-ответы</Link>
      <Link href='/about'>О нас</Link>
    </footer>
  );
}
