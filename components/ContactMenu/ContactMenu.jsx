import classNames from 'classnames'
import Link from 'next/link'

import Icon from '../Icon/Icon'
import styles from './ContactMenu.module.css'

export default function ContactMenu({ data, fontColor }) {
  return (
    <ul className={styles['menu-contact']}>
      {data.map((item) => {
        return (
          <li key={item}>
            <Link href='/'>
              <a
                className={classNames(
                  styles['menu-contact-link'],
                  styles[fontColor]
                )}>
                <Icon name={item.category} />
                <p>{item.title}</p>
              </a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
