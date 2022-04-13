import classNames from 'classnames'

import styles from './Icon.module.css'

const Icon = ({ name, className }) => {
  return (
    <svg
      // className={classNames(
      // styles.icon
      // styles[className === 'fill' ? 'fill' : 'stroke']
      // )}
      className={styles.icon}>
      <use xlinkHref={`#icons-sprite_svg__${name}`} />
    </svg>
  )
}

export default Icon
