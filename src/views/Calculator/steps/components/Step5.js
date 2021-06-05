import { Paragraph } from 'components/CoreElements'
import RadioButton from 'components/RadioButton'
import React from 'react'
import config from 'common/config'

const Step5 = ({ calculatorParams, setCalculatorParams }) => (
  <>
    <Paragraph color="grey">
      Eşyaların yangın, kaza gibi afetlere karşı güvence altında olur
    </Paragraph>
    {config.insurance.map((ins) => (
      <RadioButton
        checked={ins.label === calculatorParams.insurance.label}
        onChange={() =>
          setCalculatorParams({
            ...calculatorParams,
            ...{ insurance: ins }
          })
        }
        id={ins.label}
        key={ins.label}
        label={ins.label}
        name="packaging"
      />
    ))}
  </>
)

export default Step5
