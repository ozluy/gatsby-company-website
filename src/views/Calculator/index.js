import React, { useEffect, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Container from 'components/Container'
import FAQSection from 'components/FAQ'
import { Flex, H1, Img, Section } from 'components/CoreElements'
import Animator from 'components/Animator'
import imageSources from './img'
import Steps from './steps'
import sizeOfMoving from './steps/sizeOfMoving'
import oldHouseCondition from './steps/oldHouseCondition'
import packaging from './steps/packaging'
import insurance from './steps/insurance'
import dateOfMoving from './steps/dateOfMoving'

const CalculatorPage = ({ location }) => {
  const { cityFrom, cityTo, selectedService } = location.state || {}
  const [currentStep, setCurrentStep] = useState(7)
  const [calculatorParams, setCalculatorParams] = useState({
    selectedService,
    sizeOfMoving: sizeOfMoving[0],
    oldHouseCondition: oldHouseCondition[0],
    destinationHouseCondition: oldHouseCondition[0],
    packaging: packaging[0],
    insurance: insurance[0],
    dateOfMoving: { selectedOption: dateOfMoving[0], date: new Date() },
    noteForCarrier: '',
    contact: {
      name: '',
      phone: '',
      email: ''
    },
    cityFrom: cityFrom || {},
    cityTo: cityTo || {},
    districtFrom: {},
    districtTo: {},
    neigborhoodFrom: {},
    neigborhoodTo: {},
    fromDistrictsList: [],
    toDistrictList: [],
    fromNeighborhoodsList: [],
    toNeighborhoodsList: []
  })

  useEffect(() => {})
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
          <Animator customConfig={{ origin: 'left' }} component={H1} mb="40px">
            Hesap Makinesi
          </Animator>
          <Flex alignItems="flex-start" justifyContent="space-between">
            <Animator
              customConfig={{ origin: 'left' }}
              component={Steps}
              citiesInTurkey={citiesInTurkey}
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              setCalculatorParams={setCalculatorParams}
              calculatorParams={calculatorParams}
              services={services}
            />
            <Animator
              component={Img}
              key={currentStep}
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
