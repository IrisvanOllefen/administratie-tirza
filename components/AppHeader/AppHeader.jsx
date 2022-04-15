import AppHeaderMobile from '../AppHeaderMobile'
import AppHeaderDesktop from '../AppHeaderDesktop'

import styles from './AppHeader.module.css'

export default function AppHeader({ data }) {
  return (
    <div>
      <div className={styles.mobile}>
        <AppHeaderMobile data={data} />
      </div>
      <div className={styles.desktop}>
        <AppHeaderDesktop data={data} />
      </div>
    </div>
  )
}
