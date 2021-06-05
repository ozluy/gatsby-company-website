import React from 'react'
import RadioButton from 'components/RadioButton'
import config from 'common/config'

const Step1 = ({ calculatorParams, setCalculatorParams }) =>
  config.sizeOfMoving.map((movingSize) => (
    <RadioButton
      checked={movingSize.label === calculatorParams.sizeOfMoving.label}
      onChange={() =>
        setCalculatorParams({
          ...calculatorParams,
          ...{ sizeOfMoving: movingSize }
        })
      }
      id={movingSize.label}
      key={movingSize.label}
      label={movingSize.label}
      name="movingSize"
    />
  ))

export default Step1
