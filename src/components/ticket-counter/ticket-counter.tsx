import styles from './ticket-counter.module.scss';
import Image from 'next/image';
import plus from './img/plus.svg';
import minus from './img/minus.svg';
import { FC, MouseEvent, useContext } from 'react';
import { CartContext, ReducerActionType } from '@/utils/cartProvider';

interface Props {
  movieID: string,
}

export const TicketCounter: FC<Props> = ({ movieID }) => {
  const { cartState, dispatchCartAction } = useContext(CartContext);

  const ticketCount = cartState[movieID] ?? 0;

  const isAddActive = ticketCount < 30;
  const isRemoveActive = ticketCount > 0;

  const handleAddTicketClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    if (isAddActive) {
      dispatchCartAction({ type: ReducerActionType.ADD_TICKET, payload: movieID});
    }
  }

  const handleRemoveTicketClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    if (isRemoveActive) {
      dispatchCartAction({ type: ReducerActionType.REMOVE_TICKET, payload: movieID});
    }
  }

  return (
    <div className={styles.ticketCounter}>
      <button onClick={handleRemoveTicketClick} className={isRemoveActive ? styles.isActive : ''} >
        <Image src={minus} alt='-' />
      </button>
      <span>{ticketCount}</span>
      <button onClick={handleAddTicketClick} className={isAddActive ? styles.isActive : ''} >
        <Image src={plus} alt='+' />
      </button>
    </div>
  );
}
