import { Paragraph } from 'components/CoreElements'
import RadioButton from 'components/RadioButton'
import React from 'react'
import insurance from '../insurance'

const Step5 = ({ calculatorParams, setCalculatorParams }) => (
  <>
    <Paragraph color="grey">
      Eşyaların yangın, kaza gibi afetlere karşı güvence altında olur
    </Paragraph>
    {insurance.map((ins) => (
      <RadioButton
        checked={ins === calculatorParams.insurance}
        onChange={() =>
          setCalculatorParams({
            ...calculatorParams,
            ...{ insurance: ins }
          })
        }
        id={ins}
        key={ins}
        label={ins}
        name="packaging"
      />
    ))}
  </>
)

export default Step5
