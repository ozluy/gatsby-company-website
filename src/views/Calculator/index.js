import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Container from 'components/Container'
import FAQSection from 'components/FAQ'
import { H1, Img, Section } from 'components/CoreElements'
import { Banner } from './styled'
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
    <Section>
      <Container>
        <H1 mb="40px">Hesap Makinesi</H1>
        <Banner>
          <Steps
            citiesInTurkey={citiesInTurkey}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            setCalculatorParams={setCalculatorParams}
            calculatorParams={calculatorParams}
            services={services}
          />
          <Img src={imageSources[currentStep]} />
        </Banner>
      </Container>
      <FAQSection />
    </Section>
  )
}

export default CalculatorPage
