import TextArea from 'components/TextArea'
import React from 'react'

const Step6 = ({ calculatorParams, setCalculatorParams }) => (
  <TextArea
    title=""
    value={calculatorParams.noteForCarrier}
    onChange={(evt) =>
      setCalculatorParams({
        ...calculatorParams,
        ...{ noteForCarrier: evt.target.value }
      })
    }
    placeholder="Eşyaların tarifi (mobilyalar, koliler, hurçlar ve sayıları)? Asansör / merdiven genişlikleri eşyaların geçmesi için uygun mu? Aklına gelen başka önemli bir detay var mı?"
  />
)

export default Step6
