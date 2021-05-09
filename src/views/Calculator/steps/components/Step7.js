import Dropdown from 'components/Dropdown'
import React from 'react'
import turkey from '../data/turkey'

const Step7 = ({ calculatorParams, setCalculatorParams }) => {
  const { cities } = turkey

  const {
    cityFrom,
    districtFrom,
    neighborhoodFrom,
    fromDistrictsList,
    fromNeighborhoodsList
  } = calculatorParams
  return (
    <>
      <Dropdown
        options={cities}
        value={cityFrom}
        onChange={(val) =>
          setCalculatorParams({
            ...calculatorParams,
            ...{
              cityFrom: val,
              fromDistrictsList: val.districts,
              districtFrom: {}
            }
          })
        }
        placeholder="il girin"
      />
      <Dropdown
        options={fromDistrictsList}
        key={cityFrom.label}
        value={districtFrom}
        onChange={(val) =>
          setCalculatorParams({
            ...calculatorParams,
            ...{
              districtFrom: val,
              fromNeighborhoodsList: val.neighbourhoods,
              neighborhoodFrom: {}
            }
          })
        }
        placeholder="ilçe girin"
      />
      <Dropdown
        options={fromNeighborhoodsList}
        key={districtFrom.label}
        value={neighborhoodFrom}
        onChange={(val) =>
          setCalculatorParams({
            ...calculatorParams,
            ...{ neighborhoodFrom: val }
          })
        }
        placeholder="Mahalle girin"
      />
    </>
  )
}

export default Step7
