import React from 'react'

const Bookmark = ({ color = 'currentColor' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
    <path
      fill={color}
      d="M5 4V1a1 1 0 011-1h8a1 1 0 011 1v3h4a1 1 0 011 1v14a1 1 0 01-1 1H1a1 1 0 01-1-1V5a1 1 0 011-1h4zm8 2H7v12h6V6zM5 6H2v12h3V6zm10 0v12h3V6h-3zM7 2v2h6V2H7z"
    />
  </svg>
)

export default Bookmark
