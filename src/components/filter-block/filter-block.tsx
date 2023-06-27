import { FC, useState, MouseEvent, ChangeEvent, Dispatch, SetStateAction } from 'react';
import styles from './filter-block.module.scss';
import { BasicBlock } from '../basic-block/basic-block';
import { Cinema } from '@/const/types';
import { DropDownMenu } from '../dropdown-menu/dropdown-menu';
import classNames from 'classnames';
import { Filter } from '@/app/page';

interface Props {
  setFilterFunc: Dispatch<SetStateAction<Filter>>,
  cinemaList: Cinema[],
  genreList: string[],
}

export const FilterBlock: FC<Props> = ({ cinemaList, genreList, setFilterFunc }) => {
  const [isGenresOpen, setIsGenresOpen] = useState(false);
  const [isCinemasOpen, setIsCinemasOpen] = useState(false);
  const [formData, setFormData] = useState({
    searchName: '',
    searchGenre: '',
    searchCinema: '',
  })

  const composeFilterFunc = () => {
    
  }

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, searchName: evt.target.value});
  }

  const handleCinemasClick = (evt: MouseEvent<HTMLSelectElement>) => {
    evt.preventDefault();
    setIsCinemasOpen(!isCinemasOpen);
    setIsGenresOpen(false);
  }

  const handleGenresClick = (evt: MouseEvent<HTMLSelectElement>) => {
    evt.preventDefault();
    setIsGenresOpen(!isGenresOpen);
    setIsCinemasOpen(false);
  }

  const handleOptionChange = (formID: string, optionID: string) => {
    setFormData({...formData, [formID]: optionID});
  }

  return (
    <BasicBlock as={'search'} className={styles.search}>
      <h2 className={styles.header}>Фильтр поиска</h2>
      <form className={styles.form}>
        <label className={styles.label}>
          Название
          <input type='search' id='searchName' placeholder='Введите название' className={styles.input} onChange={handleInputChange} value={formData.searchName}/>
        </label>
        <label className={styles.label}>
          Жанр
          <select id='searchGenre' className={classNames(styles.input, styles.select)} onMouseDown={handleGenresClick} value={formData.searchGenre}>
            <option value="" disabled selected hidden>Выберете жанр</option>
            {genreList.map(genre => <option value={genre}>{genre}</option>)}
          </select>
          {isGenresOpen && <DropDownMenu
            optionList={genreList.map(genre => ({optionID: genre, optionValue: genre}))}
            closeMenu={() => setIsGenresOpen(false)}
            selectOption={(optionID) => handleOptionChange('searchGenre', optionID)}
          />}
        </label>
        <label className={styles.label}>
          Кинотеатр
          <select id='searchCinema' className={classNames(styles.input, styles.select)} onMouseDown={handleCinemasClick} value={formData.searchCinema}>
            <option value="" disabled selected hidden>Выберете кинотеатр</option>
            {cinemaList.map(i => <option value={i.id}>{i.name}</option>)}
          </select>
          {isCinemasOpen && <DropDownMenu
            optionList={cinemaList.map(i => ({optionID: i.id, optionValue: i.name}))}
            closeMenu={() => setIsCinemasOpen(false)}
            selectOption={(optionID) => handleOptionChange('searchCinema', optionID)}
          />}
        </label>
      </form>
    </BasicBlock>      
  );
}
