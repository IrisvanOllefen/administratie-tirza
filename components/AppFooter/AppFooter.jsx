import classNames from 'classnames'
import Link from 'next/link'

import ContactMenu from '../ContactMenu'
import Logo from '../Logo'

import styles from './AppFooter.module.css'

export default function AppFooter() {
  return (
    <footer className={styles.footer}>
      <Logo />
      <div className={styles['decor-line']}></div>
      <ul className={styles['menu-items']}>
        <li>
          <Link href='/'>
            <a className={classNames('menu-link', 'white-link')}>
              Financiële Administratie
            </a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a className={classNames('menu-link', 'white-link')}>
              Fiscale Aangiften
            </a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a className={classNames('menu-link', 'white-link')}>
              Jaarrekening
            </a>
          </Link>
        </li>
      </ul>
      <ContactMenu />
      <ul className={styles['basic-links']}>
        <li>Algemene Voorwaarden</li>
        <li>Privacyverklaring</li>
        <li>Disclaimer</li>
        <li>Contact</li>
      </ul>
    </footer>
  )
}
