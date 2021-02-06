export const breakpoints = {
  // mobile first
  uhd: 1980,
  widescreen: 1366,
  desktop: 1024,
  tablet: 768
}

const theme = {
  breakpoints,
  colors: {
    primary: '#2E3054',
    secondary: '#059CE1',
    black: '#303030',
    white: '#FFFFFF',
    grey: '#7F8F9E',
    green: '#09C66B',
    blue: '#22A6E3',
    blueBg: '#41B3E7',
    whiteBg: '#F8FAFB',
    red: '#E7A588'
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

export const cssVariables = () => `
:root{
  ${attrSpreader(theme.colors, '--color-')}
  ${attrSpreader(theme.fontWeight, '--font-weight-')}
  ${attrSpreader(theme.typography, '--typography-')}
  ${attrSpreader(theme.breakpoints, '--media-')}
}
`

export default theme
