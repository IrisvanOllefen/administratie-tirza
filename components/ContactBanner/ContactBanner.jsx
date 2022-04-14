import Link from 'next/link'

import Icon from '../Icon/Icon'
import styles from './ContactBanner.module.css'

export default function ContactBanner() {
  return (
    <ul className={styles['contact-banner']}>
      <li>
        <Link href='/'>
          <a className={styles['menu-contact-link']}>
            <Icon name='phone' />
            <p>+31 6 12345678</p>
          </a>
        </Link>
      </li>
      <li>
        <Link href='/'>
          <a className={styles['menu-contact-link']}>
            <Icon name='mail' />
            <p>email@email.com</p>
          </a>
        </Link>
      </li>
      <li>
        <Link href='/'>
          <a className={styles['menu-contact-link']}>
            <Icon name='clock' />
            <p>Ma-vr - 10:00-16:00</p>
          </a>
        </Link>
      </li>
    </ul>
  )
}