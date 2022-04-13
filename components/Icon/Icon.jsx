const Icon = ({ name }) => {
  return (
    <svg>
      <use xlinkHref={`#icons-sprite_svg__${name}`} />
    </svg>
  )
}

export default Icon
