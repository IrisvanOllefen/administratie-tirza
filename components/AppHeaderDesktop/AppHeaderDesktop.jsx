import Link from 'next/link'

import styles from './AppHeaderDesktop.module.css'

import Icon from '../Icon/Icon'

export default function AppHeaderDesktop() {
  return (
    <>
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
      <header className={styles.header}>
        <div className={styles.logo}>
          <h1>Administratiekantoor</h1>
          <h2>Tirza van Ollefen</h2>
        </div>
        <ul className={styles['menu-items']}>
          <li>
            <Link href='/'>
              <a className='menu-link'>Financiele Administratie</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a className='menu-link'>Fiscale Aangiften</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a className='menu-link'>Jaarrekening</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a className='menu-link'>Contact</a>
            </Link>
          </li>
        </ul>
      </header>
    </>
  )
}
