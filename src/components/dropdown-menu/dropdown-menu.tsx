import { FC, MouseEvent } from 'react';
import styles from './dropdown-menu.module.scss';

interface Props {
  optionList: Option[],
  closeMenu: () => void,
  selectOption: (optionID: string) => void,
}

interface Option {
  optionID: string,
  optionValue: string,
}

export const DropDownMenu: FC<Props> = ({ optionList, closeMenu, selectOption }) => {
  const handleOnClick = (optionID: string) => {
    selectOption(optionID);
    closeMenu();
  }

  return (
    <ul className={styles.list}>
      {optionList.map(i => <li className={styles.item} onClick={() => handleOnClick(i.optionID)}>{i.optionValue}</li>)}
    </ul>
  );
}
