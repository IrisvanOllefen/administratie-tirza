/* eslint-disable jsx-a11y/alt-text */
import Link from 'next/link'
import Image from 'next/image'

import styles from './AppHeaderDesktop.module.css'

export default function AppHeaderDesktop() {
  return (
    <>
      <ul className={styles['contact-banner']}>
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
