/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from './AppHeader.module.css'

export default function AppHeader() {
  const [click, setClick] = useState(false)
  return (
    <header className={styles.header}>
      <div className={styles.section}>
        <div className={styles.logo}>
          <h1>Administratiekantoor</h1>
          <h2>Tirza van Ollefen</h2>
        </div>
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
          <ul className={styles['menu-contact']}>
            <li>
              <Link href='/'>
                <a className={styles['menu-contact-link']}>
                  <Image src='/icons/phone.svg' width='20' height='20' />
                  <p>+31 6 12345678</p>
                </a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a className={styles['menu-contact-link']}>
                  <Image src='/icons/mail.svg' width='20' height='20' />
                  <p>email@email.com</p>
                </a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a className={styles['menu-contact-link']}>
                  <Image src='/icons/clock.svg' width='20' height='20' />
                  <p>Ma-vr - 10:00-16:00</p>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  )
}
