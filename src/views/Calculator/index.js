import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Container from 'components/Container'
import FAQSection from 'components/FAQ'
import { Flex, H1, Img, Section } from 'components/CoreElements'
import Animator from 'components/Animator'
import config from 'common/config'
import imageSources from './img'
import Steps from './steps'

const CalculatorPage = ({ location }) => {
  const { cityFrom, cityTo, selectedService } = location.state || {}
  const [currentStep, setCurrentStep] = useState(0)
  const [calculatorParams, setCalculatorParams] = useState({
    distanceInKm: 0,
    selectedService,
    sizeOfMoving: config.sizeOfMoving[0],
    oldHouseCondition: config.houseCondition[0],
    destinationHouseCondition: config.houseCondition[0],
    packaging: config.packaging[0],
    insurance: config.insurance[0],
    dateOfMoving: { selectedOption: config.dateOfMoving[0], date: new Date() },
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
    neighborhoodFrom: {},
    neighborhoodTo: {},
    fromDistrictsList: [],
    toDistrictList: [],
    fromNeighborhoodsList: [],
    toNeighborhoodsList: []
  })
  const { allGraphCmsService, allGraphCmsSehirler } = useStaticQuery(graphql`
    {
      allGraphCmsService {
        nodes {
          id
          name
          price
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
