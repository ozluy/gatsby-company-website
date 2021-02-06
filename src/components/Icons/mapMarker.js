import React from 'react'

const MapMarker = ({ color = 'currentColor', size = 1 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15 * size}
    height={18 * size}
    fill="none"
  >
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M7.5 6.486a.505.505 0 110 1.01.505.505 0 010-1.01"
    />
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M7.5.926a6.065 6.065 0 016.065 6.065c0 2.588-3.622 7.515-5.268 9.62a1.012 1.012 0 01-1.594 0c-1.646-2.103-5.267-7.03-5.267-9.618A6.065 6.065 0 017.5.926v0z"
    />
  </svg>
)

export default MapMarker
