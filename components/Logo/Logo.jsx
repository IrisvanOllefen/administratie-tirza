import styles from './Logo.module.css'

export default function Logo() {
  return (
    <div>
      <div className={styles['big-box']}></div>
      <div className={styles['small-box']}></div>
      <div className={styles['button-wrapper']}>
        <div className={styles['button']}></div>
        <div className={styles['button']}></div>
        <div className={styles['button']}></div>
        <div className={styles['button']}></div>
        <div className={styles['button']}></div>
        <div className={styles['button']}></div>
        <div className={styles['button']}></div>
        <div className={styles['button']}></div>
        <div className={styles['button']}></div>
      </div>
    </div>
  )
}
