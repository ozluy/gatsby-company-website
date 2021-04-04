import Dropdown from 'components/Dropdown'
import React from 'react'

const Step8 = ({ calculatorParams, setCalculatorParams, citiesInTurkey }) => (
  <Dropdown
    options={citiesInTurkey}
    defaultValue={calculatorParams.cityTo}
    onChange={(val) =>
      setCalculatorParams({ ...calculatorParams, ...{ cityTo: val } })
    }
    placeholder="Il girin"
  />
)
export default Step8
