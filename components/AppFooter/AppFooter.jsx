import Link from 'next/link'

import ContactMenu from '../ContactMenu'
import Logo from '../Logo'
import AppMenu from '../AppMenu'

import styles from './AppFooter.module.css'
import classNames from 'classnames'

export default function AppFooter({ data }) {
  return (
    <footer key='footer' className={styles.footer}>
      <Logo />
      <div className={styles['decor-line']}></div>
      {data.menu.menu.map((item) => {
        return (
          <AppMenu key={item} data={item} styling='mobile' fontColor='white' />
        )
      })}
      {data.contactmodel.contactblock.map((item) => {
        return (
          <ContactMenu key={item} data={item.contactItem} fontColor='white' />
        )
      })}
      <ul className={styles['basic-links']}>
        {data.footermenu.footermenu.map((item) => {
          return (
            <>
              {item.footermenulink.map((something) => {
                console.log(something)
                return (
                  <li key={something.title}>
                    <Link href={something.link}>
                      <a className={classNames('menu-link', 'white-link')}>
                        {something.title}
                      </a>
                    </Link>
                  </li>
                )
              })}
            </>
          )
        })}
      </ul>
    </footer>
  )
}
