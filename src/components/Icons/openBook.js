import React from 'react'

const OpenBook = ({ color = 'currentColor' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" fill="none">
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M15 4.492a19.433 19.433 0 012.956-.316C18.524 4.156 19 4.63 19 5.227v12.46c0 .57-.433 1.043-.974 1.05-3.092.05-5.42.65-8.026 2.263-2.606-1.613-4.934-2.213-8.026-2.261-.541-.008-.974-.481-.974-1.052V5.227c0-.588.459-1.071 1.017-1.052 3.071.104 5.389.712 7.983 2.242"
    />
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M15 14.935V2.065c0-.767-.766-1.303-1.417-.959-1.756.927-3.236 2.81-3.583 4.749V21c.396-2.21 2.261-4.346 4.331-5.078.402-.142.669-.54.669-.987v0z"
    />
  </svg>
)

export default OpenBook
