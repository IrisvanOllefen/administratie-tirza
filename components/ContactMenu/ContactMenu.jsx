/* eslint-disable jsx-a11y/alt-text */
import classNames from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

import styles from './ContactMenu.module.css'

export default function ContactMenu({ data, fontColor }) {
  return (
    <ul className={styles['menu-contact']}>
      {data.map((item) => {
        console.log(item.category)
        return (
          <li key={item}>
            <Link href='/'>
              <a
                className={classNames(
                  styles['menu-contact-link'],
                  styles[fontColor]
                )}>
                <div>
                  <Image
                    src={`/icons/${item.category}.svg`}
                    width={24}
                    height={24}
                    className={styles.icon}
                  />
                </div>
                <p>{item.title}</p>
              </a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
