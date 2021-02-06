import React from 'react'

const Home = ({ color = 'currentColor' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none">
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M7.563 10.508H4.5a.437.437 0 00-.438.438v2.625a.437.437 0 00.438.438h2.625a.437.437 0 00.438-.438v-3.063z"
    />
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M10.625 10.508H7.562v3.063a.437.437 0 00.438.438h2.625a.437.437 0 00.438-.438v-2.625a.437.437 0 00-.438-.438z"
    />
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M8.875 7.009H6.25a.438.438 0 00-.438.437v3.063h3.5V7.445a.437.437 0 00-.437-.437z"
    />
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M14.125 14.008v-9.1a.874.874 0 00-.463-.772L7.974 1.103a.875.875 0 00-.823 0L1.464 4.136A.875.875 0 001 4.908v9.1"
    />
  </svg>
)

export default Home
