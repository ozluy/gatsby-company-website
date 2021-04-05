import { Img } from 'components/CoreElements'
import React from 'react'
import { Item, Wrapper, IconWrapper, Label } from './styled'
import summaryTitles from './summary-titles'
import tickSrc from './tick.svg'

const StepSummary = ({ calculatorParams, currentStep }) => {
  const { selectedService } = calculatorParams
  return (
    <Wrapper>
      {summaryTitles.map(({ desktopLabel, mobileLabel }, index) => (
        <Item key={desktopLabel}>
          <IconWrapper>
            {selectedService && index === 0 && <Img src={tickSrc} />}
            {currentStep >= 1 && index === 1 && <Img src={tickSrc} />}
            {currentStep >= 3 && index === 2 && <Img src={tickSrc} />}
            {currentStep >= 4 && index === 3 && <Img src={tickSrc} />}
            {currentStep >= 5 && index === 4 && <Img src={tickSrc} />}
          </IconWrapper>
          <Label>{desktopLabel}</Label>
          <Label>{mobileLabel}</Label>
        </Item>
      ))}
    </Wrapper>
  )
}

export default StepSummary
