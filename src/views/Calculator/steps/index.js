import React, { forwardRef } from 'react'
import { Link } from 'gatsby'
import Button from 'components/Button'
import { Flex, Headline } from 'components/CoreElements'
import config from 'common/config'
import Form from './styled'
import titles from './titles'
import Stepper from './components'
import StepSummary from './Summary'

const Steps = forwardRef(
  (
    {
      currentStep,
      setCurrentStep,
      setCalculatorParams,
      calculatorParams,
      services,
      citiesInTurkey
    },
    ref
  ) => {
    const handleFormSubmit = async () => {
      const formData = new FormData()

      const {
        selectedService,
        sizeOfMoving,
        oldHouseCondition,
        destinationHouseCondition,
        packaging,
        insurance,
        dateOfMoving: { selectedOption, date },
        noteForCarrier,
        contact: { name, phone, email },
        cityFrom,
        cityTo,
        districtFrom,
        districtTo,
        neighborhoodFrom,
        neighborhoodTo
      } = calculatorParams
      const cityToCombined = `${cityTo.label},${districtTo.label},${neighborhoodTo.label}`
      const cityFromCombined = `${cityFrom.label},${districtFrom.label},${neighborhoodFrom.label}`

      const service = new google.maps.DistanceMatrixService()
      let distanceInKm = 0
      await service.getDistanceMatrix(
        {
          origins: [cityToCombined],
          destinations: [cityFromCombined],
          travelMode: google.maps.TravelMode.DRIVING,
          unitSystem: google.maps.UnitSystem.METRIC,
          avoidHighways: false,
          avoidTolls: false
        },
        (response, status) => {
          if (status !== 'OK') {
            // eslint-disable-next-line no-console
            console.log(`Error: ${status}`)
          } else {
            const firstRow = response?.rows && response.rows[0]
            if (firstRow) {
              const distanceInMeters =
                firstRow?.elements && firstRow.elements[0].distance.value
              distanceInKm = Math.floor(distanceInMeters / 1000) || 0
              setCalculatorParams({
                ...calculatorParams,
                ...{ distanceInKm }
              })
            }
          }
        }
      )

      formData.append('selectedService', selectedService.label)
      formData.append('name', name)
      formData.append('phone', phone)
      formData.append('email', email)
      formData.append('distanceInKm', distanceInKm)
      formData.append(
        'dateOfMoving',
        config.dateOfMoving[0] === selectedOption
          ? `${selectedOption}, ${date}`
          : selectedOption
      )
      formData.append('cityFrom', cityFromCombined)
      formData.append('cityTo', cityToCombined)
      formData.append('sizeOfMoving', sizeOfMoving)
      formData.append('oldHouseCondition', oldHouseCondition)
      formData.append('packaging', packaging)
      formData.append('destinationHouseCondition', destinationHouseCondition)
      formData.append('insurance', insurance)
      formData.append('noteForCarrier', noteForCarrier)
      fetch('https://getform.io/f/d6af6382-b495-4936-8b70-969c9434bb45', {
        method: 'POST',
        body: formData
      })
        .then((response) => {
          // eslint-disable-next-line no-console
          console.log(response)
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log(err)
        })
    }

    return (
      <Form ref={ref}>
        <StepSummary
          calculatorParams={calculatorParams}
          currentStep={currentStep}
        />
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
            <Button
              mr="auto"
              light
              onClick={() => setCurrentStep(currentStep - 1)}
            >
              Geri
            </Button>
          )}
          {currentStep < 10 && (
            <Button
              disabled={
                (currentStep === 0 && !calculatorParams.selectedService) ||
                (currentStep === 7 &&
                  !calculatorParams.neighborhoodFrom.label) ||
                (currentStep === 8 && !calculatorParams.neighborhoodTo.label)
              }
              onClick={() => setCurrentStep(currentStep + 1)}
            >
              Devam et
            </Button>
          )}
          {currentStep === 10 && (
            <Button
              disabled={
                !calculatorParams.contact.name ||
                !calculatorParams.contact.email
              }
              onClick={() => {
                handleFormSubmit()
                setCurrentStep(currentStep + 1)
              }}
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
  }
)

Steps.displayName = 'Steps'

export default Steps
