import RadioButton from 'components/RadioButton'
import React from 'react'
import config from 'common/config'

const Step4 = ({ calculatorParams, setCalculatorParams }) =>
  config.packaging.map((pack) => (
    <RadioButton
      checked={pack.label === calculatorParams.packaging.label}
      onChange={() =>
        setCalculatorParams({
          ...calculatorParams,
          ...{ packaging: pack }
        })
      }
      id={pack.label}
      key={pack.label}
      label={pack.label}
      name="packaging"
    />
  ))

export default Step4
