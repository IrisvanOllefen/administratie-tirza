import Link from 'next/link'

import styles from './AppHeaderDesktop.module.css'

import ContactBanner from '../ContactBanner'
import Logo from '../Logo'
import AppMenu from '../AppMenu'

export default function AppHeaderDesktop({ data }) {
  return (
    <>
      {data.contactmodel.contactblock.map((item) => {
        return <ContactBanner key={item.contactItem} data={item.contactItem} />
      })}
      <header className={styles.header}>
        <Logo />
        {data.menu.menu.map((item) => {
          return <AppMenu key={item} data={item} styling='desktop' />
        })}
      </header>
    </>
  )
}
