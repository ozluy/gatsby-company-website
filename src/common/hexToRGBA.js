const hexToRGBA = (inputHex, opacity = 0.1) => {
  if (inputHex) {
    const hex = inputHex.replace('#', '')
    if (inputHex.indexOf('#') > -1 && (hex.length === 3 || hex.length === 6)) {
      const multiplier = hex.length === 3 ? 1 : 2

      const red = parseInt(hex.substring(0, multiplier), 16)
      const green = parseInt(hex.substring(multiplier, 2 * multiplier), 16)
      const blue = parseInt(hex.substring(2 * multiplier, 3 * multiplier), 16)

      const result = `rgba(${red},${green},${blue},${opacity})`

      return result
    }
    return inputHex
  }
  return ''
}

export default hexToRGBA
