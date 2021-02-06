import React from 'react'

const Badge = ({ color = 'currentColor' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="31" fill="none">
    <g clipPath="url(#clip0)" filter="url(#filter0_d)">
      <path
        fill={color}
        d="M17 15.245v6.872a.5.5 0 01-.757.429L12 20l-4.243 2.546a.5.5 0 01-.757-.43v-6.87a8 8 0 1110 0v-.001zm-8 1.173v3.05l3-1.8 3 1.8v-3.05A7.978 7.978 0 0112 17a7.978 7.978 0 01-3-.582zM12 15a6 6 0 100-12 6 6 0 000 12z"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <path fill={color} d="M0 0h24v24H0z" />
      </clipPath>
      <filter
        id="filter0_d"
        width="32"
        height="32"
        x="-4"
        y="0"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
    </defs>
  </svg>
)

export default Badge
