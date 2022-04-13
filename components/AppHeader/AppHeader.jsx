import AppHeaderMobile from '../AppHeaderMobile'
import AppHeaderDesktop from '../AppHeaderDesktop'

import styles from './AppHeader.module.css'

export default function AppHeader() {
  return (
    <div>
      <div className={styles.mobile}>
        <AppHeaderMobile />
      </div>
      <div className={styles.desktop}>
        <AppHeaderDesktop />
      </div>
    </div>
  )
}
