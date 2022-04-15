import Link from 'next/link'
import classNames from 'classnames'

import styles from './AppMenu.module.css'

export default function AppMenu({ data, styling, fontColor }) {
  return (
    <ul className={classNames(styles['menu-items'], styles[styling])}>
      {data.menulink.map((item) => {
        return (
          <li key={item.title}>
            <Link href={item.link}>
              <a className={classNames('menu-link', styles[fontColor])}>
                {item.title}
              </a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
