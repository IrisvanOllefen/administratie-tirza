import Link from 'next/link'

import Icon from '../Icon/Icon'
import styles from './ContactBanner.module.css'

export default function ContactBanner({ data }) {
  return (
    <ul className={styles['contact-banner']}>
      {data.map((item) => {
        return (
          <li key={item}>
            <Link href='/'>
              <a className={styles['menu-contact-link']}>
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
