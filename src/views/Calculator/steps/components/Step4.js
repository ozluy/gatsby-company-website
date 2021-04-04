import RadioButton from 'components/RadioButton'
import React from 'react'
import packaging from '../packaging'

const Step4 = ({ calculatorParams, setCalculatorParams }) =>
  packaging.map((pack) => (
    <RadioButton
      checked={pack === calculatorParams.packaging}
      onChange={() =>
        setCalculatorParams({
          ...calculatorParams,
          ...{ packaging: pack }
        })
      }
      id={pack}
      key={pack}
      label={pack}
      name="packaging"
    />
  ))

export default Step4
