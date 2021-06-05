import RadioButton from 'components/RadioButton'
import React from 'react'
import config from 'common/config'

const Step3 = ({ calculatorParams, setCalculatorParams }) =>
  config.houseCondition.map((houseCondition) => (
    <RadioButton
      checked={
        houseCondition.label ===
        calculatorParams.destinationHouseCondition.label
      }
      onChange={() =>
        setCalculatorParams({
          ...calculatorParams,
          ...{ destinationHouseCondition: houseCondition }
        })
      }
      id={houseCondition.label}
      key={houseCondition.label}
      label={houseCondition.label}
      name="destinationHouseCondition"
    />
  ))
export default Step3
