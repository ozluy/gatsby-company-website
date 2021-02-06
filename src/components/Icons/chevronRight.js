import React from 'react'

function ChevronRight({ color = 'currentColor', size = 1 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={8 * size}
      height={14 * size}
      fill="none"
    >
      <path
        fill={color}
        d="M4.95 7L0 2.05 1.412.636 7.777 7l-6.364 6.364L0 11.95 4.95 7z"
      />
    </svg>
  )
}

export default ChevronRight
