import Dropdown from 'components/Dropdown'
import React from 'react'

const Step7 = ({ calculatorParams, setCalculatorParams, citiesInTurkey }) => (
  <Dropdown
    options={citiesInTurkey}
    defaultValue={calculatorParams.cityFrom}
    onChange={(val) =>
      setCalculatorParams({ ...calculatorParams, ...{ cityFrom: val } })
    }
    placeholder="Il girin"
  />
)

export default Step7
