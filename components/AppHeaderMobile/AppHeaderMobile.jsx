/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react'
import Link from 'next/link'

import Logo from '../Logo'
import ContactMenu from '../ContactMenu'
import AppMenu from '../AppMenu'

import styles from './AppHeaderMobile.module.css'

export default function AppHeaderMobile({ data }) {
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
          {data.menu.menu.map((item) => {
            return <AppMenu key={item} data={item} styling='mobile' />
          })}
          {data.contactmodel.contactblock.map((item) => {
            return (
              <ContactMenu
                key={item}
                data={item.contactItem}
                fontColor='accent'
              />
            )
          })}
        </div>
      ) : null}
    </header>
  )
}
