/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react'
import Link from 'next/link'

import Logo from '../Logo'
import ContactMenu from '../ContactMenu'

import styles from './AppHeaderMobile.module.css'

export default function AppHeaderMobile() {
  const [click, setClick] = useState(false)
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.section}>
        {click ? (
          <button onClick={() => setClick(false)} className={styles.button}>
            Sluiten
          </button>
        ) : (
          <button onClick={() => setClick(true)} className={styles.button}>
            Menu
          </button>
        )}
      </div>
      {click ? (
        <div className={styles.menu}>
          <ul>
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
          <ContactMenu />
        </div>
      ) : null}
    </header>
  )
}
