import React, { useRef, useEffect } from 'react'
import config from 'common/config'

const Animator = ({
  component: Component,
  customConfig = {},
  className,
  ...rest
}) => {
  const animationRef = useRef(null)
  useEffect(() => {
    animationRef?.current &&
      ScrollReveal().reveal(animationRef.current, {
        ...config.scrollReveal,
        ...customConfig
      })
  }, [animationRef])

  return Component ? (
    <Component style={{ visibility: 'hidden' }} ref={animationRef} {...rest} />
  ) : (
    'Pass Animator a Componenent'
  )
}

export default Animator
