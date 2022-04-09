import Link from 'next/link'

import Logo from '../Logo'

import styles from './AppHeader.module.css'

export default function AppHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <h1>Administratiekantoor van Ollefen</h1>
      <ul>
        <li>
          <Link href='/'>
            <a>Financiele Administratie</a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a>Fiscale Aangiften</a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a>Jaarrekening</a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </header>
  )
}
