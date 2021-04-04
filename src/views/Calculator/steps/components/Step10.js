import { Paragraph } from 'components/CoreElements'
import InputField from 'components/InputField'
import React from 'react'

const Step10 = ({ calculatorParams, setCalculatorParams }) => (
  <>
    <Paragraph mb="16px" color="grey">
      Evden Eve Nakliyat talebini oluşturmak için email adresine ihtiyacımız
      var. Bu bilgiyi kimseyle paylaşmıyoruz.
    </Paragraph>
    <InputField
      onChange={(evt) =>
        setCalculatorParams({
          ...calculatorParams,
          ...{
            contact: {
              ...calculatorParams.contact,
              ...{ name: evt.target.value }
            }
          }
        })
      }
      value={calculatorParams.contact.name}
      placeholder="Adınız ve soyadınız *"
    />
    <InputField
      onChange={(evt) =>
        setCalculatorParams({
          ...calculatorParams,
          ...{
            contact: {
              ...calculatorParams.contact,
              ...{ phone: evt.target.value }
            }
          }
        })
      }
      required
      type="tel"
      value={calculatorParams.contact.phone}
      placeholder="Telefon numaranız"
    />
    <InputField
      onChange={(evt) =>
        setCalculatorParams({
          ...calculatorParams,
          ...{
            contact: {
              ...calculatorParams.contact,
              ...{ email: evt.target.value }
            }
          }
        })
      }
      required
      type="email"
      value={calculatorParams.contact.email}
      placeholder="Email adresiniz *"
    />
  </>
)

export default Step10
