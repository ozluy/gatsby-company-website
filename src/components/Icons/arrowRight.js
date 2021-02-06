import React from 'react'

const ArrowRight = ({ color = 'currentColor', size = 1 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16 * size}
    height={13 * size}
    fill="none"
  >
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="M8.5 11.5l6-5.25L8.5 1m6 5.25H1"
    />
  </svg>
)

export default ArrowRight
