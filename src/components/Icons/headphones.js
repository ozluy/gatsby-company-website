import React, { memo } from 'react'

const Headphones = ({ color = 'currentColor' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M4.5 18h-.75a3 3 0 01-3-3v-3a3 3 0 013-3h.75a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75zM20.25 18h-.75a.75.75 0 01-.75-.75v-7.5A.75.75 0 0119.5 9h.75a3 3 0 013 3v3a3 3 0 01-3 3zM3.75 9A8.25 8.25 0 0112 .75v0A8.25 8.25 0 0120.25 9M15 21.75h2.25a3 3 0 003-3V18"
    />
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M13.5 23.25H12a1.5 1.5 0 110-3h1.5a1.5 1.5 0 110 3zM9 15.442a4.454 4.454 0 006 0M9 9.985v1.312M15 9.985v1.312"
    />
  </svg>
)

export default memo(Headphones)
