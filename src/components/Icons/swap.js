import React from 'react'

function Swap({ color = 'currentColor' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="21" fill="none">
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4.667 6.222v13.445m0 0L1 16m7.333-1.222V1.333m0 0L12 5"
      />
    </svg>
  )
}

export default Swap
