import React from 'react'
import useComponentDidMount from 'hooks/useComponentDidMount'
import useComponentWillUnmount from 'hooks/useComponentWillUnmount'

const BodyClassChanger = () => {
  useComponentDidMount(() => {
    document.querySelector('body').classList.add('mobile__nav__open')
  })

  useComponentWillUnmount(() => {
    document.querySelector('body').classList.remove('mobile__nav__open')
  })
  return <div />
}
export default BodyClassChanger
