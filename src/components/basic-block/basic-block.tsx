import { ElementType, FC, HTMLAttributes } from 'react';
import styles from './basic-block.module.scss';
import classNames from 'classnames';

interface Props extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType;
}

export const BasicBlock: FC<Props> = ({ as: Tag = 'div', className, children}) => {
  return <Tag className={classNames(styles.basicBlock, className)} >{children}</Tag>;
}
