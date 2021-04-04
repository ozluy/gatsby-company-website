import RadioButton from 'components/RadioButton'
import React from 'react'
import oldHouseCondition from '../oldHouseCondition'

const Step3 = ({ calculatorParams, setCalculatorParams }) =>
  oldHouseCondition.map((houseCondition) => (
    <RadioButton
      checked={houseCondition === calculatorParams.destinationHouseCondition}
      onChange={() =>
        setCalculatorParams({
          ...calculatorParams,
          ...{ destinationHouseCondition: houseCondition }
        })
      }
      id={houseCondition}
      key={houseCondition}
      label={houseCondition}
      name="destinationHouseCondition"
    />
  ))
export default Step3
