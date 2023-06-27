import { FC, HTMLAttributes, PropsWithChildren } from 'react'
import styles from './main.module.scss'
import classNames from 'classnames'

export const Main: FC<HTMLAttributes<HTMLOrSVGElement>> = ({ className, children }) => {
  return (
    <main className={classNames(styles.main, className)}>
      {children}
    </main>
  );
}
