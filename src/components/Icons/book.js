import React from 'react'

const Book = ({ color = 'currentColor' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="none">
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M13 10.757a14.56 14.56 0 013-.64m-12 .001c1.054.117 2.039.321 3 .64m9-4.64a14.496 14.496 0 00-3 .64m-6-.001a14.56 14.56 0 00-3-.64"
    />
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M10 3.131C7.406 1.678 5.088 1.1 2.017 1.001a.995.995 0 00-1.017 1v11.853c0 .541.433.99.974.998 3.092.046 5.42.616 8.026 2.148 2.606-1.532 4.934-2.102 8.026-2.148a.996.996 0 00.974-.999V2a.995.995 0 00-1.017-1c-3.071.1-5.389.678-7.983 2.131v0zm0-.001V17"
    />
  </svg>
)

export default Book
