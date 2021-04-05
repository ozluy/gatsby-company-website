import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Container from 'components/Container'
import FAQSection from 'components/FAQ'
import { Flex, H1, Img, Section } from 'components/CoreElements'
import imageSources from './img'
import Steps from './steps'
import sizeOfMoving from './steps/sizeOfMoving'
import oldHouseCondition from './steps/oldHouseCondition'
import packaging from './steps/packaging'
import insurance from './steps/insurance'
import dateOfMoving from './steps/dateOfMoving'

const CalculatorPage = ({ location }) => {
  const { cityFrom, cityTo, selectedService } = location.state || {}
  const [currentStep, setCurrentStep] = useState(0)
  const [calculatorParams, setCalculatorParams] = useState({
    selectedService,
    sizeOfMoving: sizeOfMoving[0],
    oldHouseCondition: oldHouseCondition[0],
    destinationHouseCondition: oldHouseCondition[0],
    packaging: packaging[0],
    insurance: insurance[0],
    dateOfMoving: { selectedOption: dateOfMoving[0], date: null, time: null },
    noteForCarrier: '',
    contact: {
      name: '',
      phone: '',
      email: ''
    },
    cityFrom,
    cityTo
  })
  const { allGraphCmsService, allGraphCmsSehirler } = useStaticQuery(graphql`
    {
      allGraphCmsService {
        nodes {
          id
          name
        }
      }
      allGraphCmsSehirler {
        nodes {
          citiesInTurkey
        }
      }
    }
  `)
  const services = allGraphCmsService.nodes
  const { citiesInTurkey } = allGraphCmsSehirler.nodes[0]

  return (
    <>
      <Section p="100px 0 0 0">
        <Container>
          <H1 mb="40px">Hesap Makinesi</H1>
          <Flex alignItems="flex-start" justifyContent="space-between">
            <Steps
              citiesInTurkey={citiesInTurkey}
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              setCalculatorParams={setCalculatorParams}
              calculatorParams={calculatorParams}
              services={services}
            />
            <Img
              display={['none', 'none', 'block']}
              src={imageSources[currentStep]}
            />
          </Flex>
        </Container>
      </Section>
      <FAQSection />
    </>
  )
}

export default CalculatorPage
