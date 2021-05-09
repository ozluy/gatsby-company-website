import Dropdown from 'components/Dropdown'
import React from 'react'
import turkey from '../data/turkey'

const Step8 = ({ calculatorParams, setCalculatorParams }) => {
  const { cities } = turkey

  const {
    cityTo,
    districtTo,
    neighborhoodTo,
    toDistrictsList,
    toNeighborhoodsList
  } = calculatorParams
  return (
    <>
      <Dropdown
        options={cities}
        value={cityTo}
        onChange={(val) =>
          setCalculatorParams({
            ...calculatorParams,
            ...{
              cityTo: val,
              toDistrictsList: val.districts,
              districtTo: {}
            }
          })
        }
        placeholder="il girin"
      />
      <Dropdown
        options={toDistrictsList}
        key={cityTo.label}
        value={districtTo}
        onChange={(val) =>
          setCalculatorParams({
            ...calculatorParams,
            ...{
              districtTo: val,
              toNeighborhoodsList: val.neighbourhoods,
              neighborhoodTo: {}
            }
          })
        }
        placeholder="ilçe girin"
      />
      <Dropdown
        options={toNeighborhoodsList}
        key={districtTo.label}
        value={neighborhoodTo}
        onChange={(val) =>
          setCalculatorParams({
            ...calculatorParams,
            ...{ neighborhoodTo: val }
          })
        }
        placeholder="Mahalle girin"
      />
    </>
  )
}

export default Step8
