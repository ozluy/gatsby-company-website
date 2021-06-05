import Badge, { BadgeGroup } from 'components/Badge'
import { Paragraph } from 'components/CoreElements'
import Dropdown from 'components/Dropdown'
import React, { useState } from 'react'

const Svg = (p) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    focusable="false"
    role="presentation"
    {...p}
  />
)

const DropdownIndicator = () => (
  <div css={{ color: 'var(--color-primary)', height: 24, width: 32 }}>
    <Svg>
      <path
        d="M16.436 15.085l3.94 4.01a1 1 0 0 1-1.425 1.402l-3.938-4.006a7.5 7.5 0 1 1 1.423-1.406zM10.5 16a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </Svg>
  </div>
)

const Step0 = ({ services, calculatorParams, setCalculatorParams }) => {
  const [localSelectedService, setLocalSelectedService] = useState(
    calculatorParams.selectedService
  )
  return (
    <>
      <Dropdown
        wrapperProps={{ mb: '100px' }}
        title="Hizmet"
        placeholder="Hizmet ara"
        key={localSelectedService && localSelectedService.value}
        components={{ DropdownIndicator, IndicatorSeparator: null }}
        defaultValue={localSelectedService}
        value={localSelectedService}
        options={services.map(({ name, id, price }) => ({
          label: name,
          value: id,
          price
        }))}
        onChange={(value) => {
          const updatedParams = {
            ...calculatorParams,
            ...{ selectedService: value }
          }
          setLocalSelectedService(value)
          setCalculatorParams(updatedParams)
        }}
      />
      <Paragraph color="grey">Popüler Hizmetler</Paragraph>
      <BadgeGroup>
        {services.slice(0, 6).map(({ name, id, price }) => (
          <Badge
            onClick={() => {
              const value = { label: name, value: id, price }
              const updatedParams = {
                ...calculatorParams,
                ...{ selectedService: value }
              }
              setLocalSelectedService(value)
              setCalculatorParams(updatedParams)
            }}
            key={id}
          >
            {name}
          </Badge>
        ))}
      </BadgeGroup>
    </>
  )
}

export default Step0
