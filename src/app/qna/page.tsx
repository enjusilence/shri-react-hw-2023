import { BasicBlock } from "@/components/basic-block/basic-block";
import styles from './qna.module.scss';
import { QnABlock } from "@/components/qna-block/qna-block";
import { Main } from "@/components/main/main";

export default function QnA() {
  type QnA = {
    id: number,
    q: string,
    a: string,
  }

  const qnaList: QnA[] = [
    {
      id: 1,
      q: 'Что такое Билетопоиск?',
      a: 'Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.',
    },
    {
      id: 2,
      q: 'Какой компании принадлежит Билетопоиск?',
      a: 'Янденс',
    },
  ]

  return (
    <Main>
      <section className={styles.section}>
        <BasicBlock as={'h1'} className={styles.header}>Вопросы-ответы</BasicBlock>
        <ul className={styles.list}>
          {qnaList.map(i => 
            <QnABlock key={i.id} question={i.q} answer={i.a} />
          )}
        </ul>
      </section>
    </Main>
  );
}
