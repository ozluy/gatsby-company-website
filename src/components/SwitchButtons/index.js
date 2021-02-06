import React, { useState } from 'react'
import Button from 'components/Button'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.greyLightest};
  border-radius: 75px;
  overflow: hidden;
`

const SwitchButtons = ({ buttons = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <Wrapper>
      {buttons.map(({ onClick, ...rest }, index) => (
        <Button
          {...rest}
          inline
          padding="16px 46px"
          borderRadius="75px"
          green={activeIndex === index}
          key={index}
          onClick={() => {
            if (onClick) {
              onClick()
            }
            setActiveIndex(index)
          }}
        />
      ))}
    </Wrapper>
  )
}

export default SwitchButtons
