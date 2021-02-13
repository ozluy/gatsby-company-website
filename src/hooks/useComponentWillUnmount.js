import { useEffect } from 'react'

const useComponentWillUnmount = (func) => {
  useEffect(() => func, [])
}

export default useComponentWillUnmount
