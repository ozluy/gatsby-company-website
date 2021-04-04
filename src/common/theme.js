export const breakpoints = {
  // mobile first
  widescreen: 1260,
  desktop: 1024,
  tablet: 768
}

const theme = {
  breakpoints: Object.keys(breakpoints).map((key) => breakpoints[key]),
  colors: {
    primary: '#2E3054',
    secondary: '#059CE1',
    black: '#303030',
    white: '#FFFFFF',
    grey: '#7F8F9E',
    greyLighter: '#BBC9D6',
    greyLight: '#8D8D8D',
    greyLightest: '#cae5f2',
    green: '#09C66B',
    blueDarker: '#0181BB',
    blue: '#22A6E3',
    blueBg: '#41B3E7',
    blue100: '#6FB9E1',
    blue25: '#ECF1F5',
    blue50: '#E3F3FB',
    whiteBg: '#F8FAFB',
    lightBg: '#f4f4f4',
    darkBg: '#0B1A33',
    lighterBg: '#F8FAFB',
    red: '#E7A588',
    transparent: 'transparent',
    border: '#DCE4F1'
  },
  fontWeight: {
    regular: 400,
    semibold: 600,
    bold: 700
  },
  typography: {
    h1: '48px',
    h2: '36px',
    h3: '32px',
    headline: '24px',
    subline: '20px',
    large: '18px',
    medium: '16px',
    primary: '14px',
    small: '12px'
  }
}

const attrSpreader = (obj, attrPrefix) => {
  let spreadedAttrs = ''
  for (const attr in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, attr)) {
      spreadedAttrs += `${attrPrefix}${attr}:${obj[attr]};`
    }
  }
  return spreadedAttrs
}

const classSpreader = (obj, attrPrefix) => {
  let spreadedAttrs = ''
  for (const attr in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, attr)) {
      spreadedAttrs += `.destan--${attr}{${attrPrefix}:${obj[attr]};}`
    }
  }
  return spreadedAttrs
}

export const cssVariables = () => `
:root{
  ${attrSpreader(theme.colors, '--color-')}
  ${attrSpreader(theme.fontWeight, '--font-weight-')}
  ${attrSpreader(theme.typography, '--typography-')}
  ${attrSpreader(theme.breakpoints, '--media-')}
}
`

export const colorClasses = () => `
${classSpreader(theme.colors, 'color')}
`

export default theme
