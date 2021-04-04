import React from 'react'
import { Link } from 'gatsby'
import Button from 'components/Button'
import { Flex, Headline } from 'components/CoreElements'
import Form from './styled'
import titles from './titles'
import Stepper from './components'

const Steps = ({
  currentStep,
  setCurrentStep,
  setCalculatorParams,
  calculatorParams,
  services,
  citiesInTurkey
}) => (
  <Form>
    <Headline mb="20px" color="secondary">
      {titles[currentStep]}
    </Headline>
    <Stepper
      currentStep={currentStep}
      calculatorParams={calculatorParams}
      setCalculatorParams={setCalculatorParams}
      services={services}
      citiesInTurkey={citiesInTurkey}
    />
    <Flex justifyContent="flex-end" mt="40px">
      {currentStep > 0 && currentStep < 11 && (
        <Button mr="auto" light onClick={() => setCurrentStep(currentStep - 1)}>
          Geri
        </Button>
      )}
      {currentStep < 10 && (
        <Button
          disabled={
            (currentStep === 0 && !calculatorParams.selectedService) ||
            (currentStep === 7 && !calculatorParams.cityFrom) ||
            (currentStep === 8 && !calculatorParams.cityTo)
          }
          onClick={() => setCurrentStep(currentStep + 1)}
        >
          Devam et
        </Button>
      )}
      {currentStep === 10 && (
        <Button
          disabled={
            !calculatorParams.contact.name || !calculatorParams.contact.email
          }
          onClick={() => setCurrentStep(currentStep + 1)}
        >
          Hesapla
        </Button>
      )}
      {currentStep === 11 && (
        <Link to="/">
          <Button>Anasayfaya dön</Button>
        </Link>
      )}
    </Flex>
  </Form>
)

export default Steps
