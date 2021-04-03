import React, { useState } from 'react'
import Dropdown from 'components/Dropdown'
import Swap from 'components/Icons/swap'
import IconButton from 'components/IconButton'
import { ButtonWithArrow } from 'components/Button'
import InputField from 'components/InputField'
import { CalculatorWrapper, SwapWrapper } from './styled'

const Calculator = ({ cities, currentCity, destinationCity }) => {
  const [cityFrom, setCityFrom] = useState(currentCity)
  const [cityTo, setCityTo] = useState(destinationCity)

  const handleSwap = () => {
    const destCity = cityTo
    setCityTo(cityFrom)
    setCityFrom(destCity)
  }

  return (
    <CalculatorWrapper>
      <InputField
        placeholder="Nereden"
        value={cityFrom.label}
        readOnly
        onChange={() => ''}
      />
      <SwapWrapper>
        <IconButton icon={<Swap />} onClick={handleSwap} />
      </SwapWrapper>
      <Dropdown
        key={cityTo.label}
        title="Nereye"
        options={cities}
        placeholder="Sehir Ara..."
        defaultValue={cityTo}
        maxMenuHeight={90}
        onChange={(val) => setCityTo(val)}
      />
      <ButtonWithArrow mt="20px"> Fiyat Hesapla</ButtonWithArrow>
    </CalculatorWrapper>
  )
}

export default Calculator
