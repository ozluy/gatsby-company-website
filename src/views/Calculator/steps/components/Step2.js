import React from 'react'
import RadioButton from 'components/RadioButton'
import oldHouseCondition from '../oldHouseCondition'

const Step2 = ({ calculatorParams, setCalculatorParams }) =>
  oldHouseCondition.map((houseCondition) => (
    <RadioButton
      checked={houseCondition === calculatorParams.oldHouseCondition}
      onChange={() =>
        setCalculatorParams({
          ...calculatorParams,
          ...{ oldHouseCondition: houseCondition }
        })
      }
      id={houseCondition}
      key={houseCondition}
      label={houseCondition}
      name="oldHouseCondition"
    />
  ))

export default Step2
