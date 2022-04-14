import Link from 'next/link'

import styles from './AppHeaderDesktop.module.css'

import ContactBanner from '../ContactBanner'
import Logo from '../Logo'

export default function AppHeaderDesktop() {
  return (
    <>
      <ContactBanner />
      <header className={styles.header}>
        <Logo />
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
