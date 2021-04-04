import React from 'react'
import RadioButton from 'components/RadioButton'
import sizeOfMoving from '../sizeOfMoving'

const Step1 = ({ calculatorParams, setCalculatorParams }) =>
  sizeOfMoving.map((movingSize) => (
    <RadioButton
      checked={movingSize === calculatorParams.sizeOfMoving}
      onChange={() =>
        setCalculatorParams({
          ...calculatorParams,
          ...{ sizeOfMoving: movingSize }
        })
      }
      id={movingSize}
      key={movingSize}
      label={movingSize}
      name="movingSize"
    />
  ))

export default Step1
