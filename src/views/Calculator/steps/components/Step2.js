import React from 'react'
import RadioButton from 'components/RadioButton'
import config from 'common/config'

const Step2 = ({ calculatorParams, setCalculatorParams }) =>
  config.houseCondition.map((houseCondition) => (
    <RadioButton
      checked={
        houseCondition.label === calculatorParams.oldHouseCondition.label
      }
      onChange={() =>
        setCalculatorParams({
          ...calculatorParams,
          ...{ oldHouseCondition: houseCondition }
        })
      }
      id={houseCondition.label}
      key={houseCondition.label}
      label={houseCondition.label}
      name="oldHouseCondition"
    />
  ))

export default Step2
