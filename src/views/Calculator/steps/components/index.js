import React from 'react'
import Step0 from './Step0'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import Step5 from './Step5'
import Step6 from './Step6'
import Step7 from './Step7'
import Step8 from './Step8'
import Step9 from './Step9'
import Step10 from './Step10'
import Step11 from './Step11'

const Stepper = ({
  currentStep,
  calculatorParams,
  setCalculatorParams,
  services,
  citiesInTurkey
}) => {
  switch (currentStep) {
    case 0:
      return (
        <Step0
          calculatorParams={calculatorParams}
          setCalculatorParams={setCalculatorParams}
          services={services}
        />
      )
    case 1:
      return (
        <Step1
          calculatorParams={calculatorParams}
          setCalculatorParams={setCalculatorParams}
        />
      )
    case 2:
      return (
        <Step2
          calculatorParams={calculatorParams}
          setCalculatorParams={setCalculatorParams}
        />
      )
    case 3:
      return (
        <Step3
          calculatorParams={calculatorParams}
          setCalculatorParams={setCalculatorParams}
        />
      )
    case 4:
      return (
        <Step4
          calculatorParams={calculatorParams}
          setCalculatorParams={setCalculatorParams}
        />
      )
    case 5:
      return (
        <Step5
          calculatorParams={calculatorParams}
          setCalculatorParams={setCalculatorParams}
        />
      )
    case 6:
      return (
        <Step6
          calculatorParams={calculatorParams}
          setCalculatorParams={setCalculatorParams}
        />
      )
    case 7:
      return (
        <Step7
          calculatorParams={calculatorParams}
          setCalculatorParams={setCalculatorParams}
          citiesInTurkey={citiesInTurkey}
        />
      )
    case 8:
      return (
        <Step8
          calculatorParams={calculatorParams}
          setCalculatorParams={setCalculatorParams}
          citiesInTurkey={citiesInTurkey}
        />
      )
    case 9:
      return (
        <Step9
          calculatorParams={calculatorParams}
          setCalculatorParams={setCalculatorParams}
        />
      )
    case 10:
      return (
        <Step10
          calculatorParams={calculatorParams}
          setCalculatorParams={setCalculatorParams}
        />
      )
    case 11:
      return (
        <Step11
          calculatorParams={calculatorParams}
          setCalculatorParams={setCalculatorParams}
        />
      )

    default:
      return null
  }
}

export default Stepper
