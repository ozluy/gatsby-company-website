import React, { useState } from 'react'
import DatePicker from 'components/DatePicker'
import { Flex, H2, Headline, Img, Paragraph } from 'components/CoreElements'
import Dropdown from 'components/Dropdown'
import InputField from 'components/InputField'
import Button from 'components/Button'
import Badge, { BadgeGroup, BadgeWithIcon } from 'components/Badge'
import RadioButton from 'components/RadioButton'
import TextArea from 'components/TextArea'
import Form from './styled'
import titles from './titles'
import sizeOfMoving from './sizeOfMoving'
import oldHouseCondition from './oldHouseCondition'
import packaging from './packaging'
import insurance from './insurance'
import dateOfMoving from './dateOfMoving'
import phoneIcon from './icons/phone.svg'
import mailIcon from './icons/mail.svg'
import whatsappIcon from './icons/whatsapp.svg'
import telegramIcon from './icons/telegram.svg'

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

const Steps = ({
  currentStep,
  setCurrentStep,
  setCalculatorParams,
  calculatorParams,
  services
}) => {
  const [startDate, setStartDate] = useState(new Date())
  const Step0 = () => (
    <>
      <Dropdown
        wrapperProps={{ mb: '100px' }}
        title="Hizmet"
        placeholder="Hizmet ara"
        components={{ DropdownIndicator, IndicatorSeparator: null }}
        defaultValue={calculatorParams.selectedService}
        options={services.map(({ name, id }) => ({
          label: name,
          value: id
        }))}
        onChange={(value) => {
          const updatedParams = {
            ...calculatorParams,
            ...{ selectedService: value }
          }

          setCalculatorParams(updatedParams)
        }}
      />
      <Paragraph color="grey">Popüler Hizmetler</Paragraph>
      <BadgeGroup>
        {services.slice(0, 6).map(({ name, id }) => (
          <Badge
            onClick={() => {
              const updatedParams = {
                ...calculatorParams,
                ...{ selectedService: { label: name, value: id } }
              }

              setCalculatorParams(updatedParams)
            }}
            key={id}
          >
            {name}
          </Badge>
        ))}
      </BadgeGroup>
      <Flex mt="40px">
        {currentStep > 0 && (
          <Button light onClick={() => setCurrentStep(currentStep - 1)}>
            Geri
          </Button>
        )}
        <Button
          disabled={!calculatorParams.selectedService}
          onClick={() => setCurrentStep(currentStep + 1)}
          ml="auto"
        >
          Devam et
        </Button>
      </Flex>
    </>
  )
  const Step1 = () => (
    <>
      {sizeOfMoving.map((movingSize) => (
        <RadioButton
          checked={movingSize === calculatorParams.sizeOfMoving}
          onChange={() =>
            setCalculatorParams({
              ...calculatorParams,
              ...{ sizeOfMoving: movingSize }
            })
          }
          id={movingSize}
          key={movingSize}
          label={movingSize}
          name="movingSize"
        />
      ))}
      <Flex mt="40px">
        {currentStep > 0 && (
          <Button light onClick={() => setCurrentStep(currentStep - 1)}>
            Geri
          </Button>
        )}
        <Button onClick={() => setCurrentStep(currentStep + 1)} ml="auto">
          Devam et
        </Button>
      </Flex>
    </>
  )
  const Step2 = () => (
    <>
      {oldHouseCondition.map((houseCondition) => (
        <RadioButton
          checked={houseCondition === calculatorParams.oldHouseCondition}
          onChange={() =>
            setCalculatorParams({
              ...calculatorParams,
              ...{ oldHouseCondition: houseCondition }
            })
          }
          id={houseCondition}
          key={houseCondition}
          label={houseCondition}
          name="oldHouseCondition"
        />
      ))}
      <Flex mt="40px">
        {currentStep > 0 && (
          <Button light onClick={() => setCurrentStep(currentStep - 1)}>
            Geri
          </Button>
        )}
        <Button onClick={() => setCurrentStep(currentStep + 1)} ml="auto">
          Devam et
        </Button>
      </Flex>
    </>
  )
  const Step3 = () => (
    <>
      {oldHouseCondition.map((houseCondition) => (
        <RadioButton
          checked={
            houseCondition === calculatorParams.destinationHouseCondition
          }
          onChange={() =>
            setCalculatorParams({
              ...calculatorParams,
              ...{ destinationHouseCondition: houseCondition }
            })
          }
          id={houseCondition}
          key={houseCondition}
          label={houseCondition}
          name="destinationHouseCondition"
        />
      ))}
      <Flex mt="40px">
        {currentStep > 0 && (
          <Button light onClick={() => setCurrentStep(currentStep - 1)}>
            Geri
          </Button>
        )}
        <Button onClick={() => setCurrentStep(currentStep + 1)} ml="auto">
          Devam et
        </Button>
      </Flex>
    </>
  )
  const Step4 = () => (
    <>
      {packaging.map((pack) => (
        <RadioButton
          checked={pack === calculatorParams.packaging}
          onChange={() =>
            setCalculatorParams({
              ...calculatorParams,
              ...{ packaging: pack }
            })
          }
          id={pack}
          key={pack}
          label={pack}
          name="packaging"
        />
      ))}
      <Flex mt="40px">
        {currentStep > 0 && (
          <Button light onClick={() => setCurrentStep(currentStep - 1)}>
            Geri
          </Button>
        )}
        <Button onClick={() => setCurrentStep(currentStep + 1)} ml="auto">
          Devam et
        </Button>
      </Flex>
    </>
  )
  const Step5 = () => (
    <>
      <Paragraph color="grey">
        Eşyaların yangın, kaza gibi afetlere karşı güvence altında olur
      </Paragraph>
      {insurance.map((ins) => (
        <RadioButton
          checked={ins === calculatorParams.insurance}
          onChange={() =>
            setCalculatorParams({
              ...calculatorParams,
              ...{ insurance: ins }
            })
          }
          id={ins}
          key={ins}
          label={ins}
          name="packaging"
        />
      ))}
      <Flex mt="40px">
        {currentStep > 0 && (
          <Button light onClick={() => setCurrentStep(currentStep - 1)}>
            Geri
          </Button>
        )}
        <Button onClick={() => setCurrentStep(currentStep + 1)} ml="auto">
          Devam et
        </Button>
      </Flex>
    </>
  )

  const Step6 = () => (
    <>
      <TextArea
        title=""
        value={calculatorParams.noteForCarrier}
        onChange={(evt) => {
          evt.preventDefault()
          evt.stopPropagation()
          setCalculatorParams({
            ...calculatorParams,
            ...{ noteForCarrier: evt.target.value }
          })
        }}
        placeholder="Eşyaların tarifi (mobilyalar, koliler, hurçlar ve sayıları)? Asansör / merdiven genişlikleri eşyaların geçmesi için uygun mu? Aklına gelen başka önemli bir detay var mı?"
      />

      <Flex mt="40px">
        {currentStep > 0 && (
          <Button light onClick={() => setCurrentStep(currentStep - 1)}>
            Geri
          </Button>
        )}
        <Button onClick={() => setCurrentStep(currentStep + 1)} ml="auto">
          Devam et
        </Button>
      </Flex>
    </>
  )

  const Step7 = () => (
    <>
      <Dropdown placeholder="Il girin" />
      <Dropdown placeholder="Ilçe girin" />
      <Dropdown placeholder="Mahalle girin" />

      <Flex mt="40px">
        {currentStep > 0 && (
          <Button light onClick={() => setCurrentStep(currentStep - 1)}>
            Geri
          </Button>
        )}
        <Button onClick={() => setCurrentStep(currentStep + 1)} ml="auto">
          Devam et
        </Button>
      </Flex>
    </>
  )
  const Step8 = () => (
    <>
      <Dropdown placeholder="Il girin" />
      <Dropdown placeholder="Ilçe girin" />
      <Dropdown placeholder="Mahalle girin" />

      <Flex mt="40px">
        {currentStep > 0 && (
          <Button light onClick={() => setCurrentStep(currentStep - 1)}>
            Geri
          </Button>
        )}
        <Button onClick={() => setCurrentStep(currentStep + 1)} ml="auto">
          Devam et
        </Button>
      </Flex>
    </>
  )

  const Step9 = () => (
    <>
      {dateOfMoving.map((movingDate) => (
        <>
          <RadioButton
            checked={
              movingDate === calculatorParams.dateOfMoving.selectedOption
            }
            onChange={() =>
              setCalculatorParams({
                ...calculatorParams,
                ...{
                  dateOfMoving: {
                    ...calculatorParams.dateOfMoving,
                    ...{ selectedOption: movingDate }
                  }
                }
              })
            }
            id={movingDate}
            key={movingDate}
            label={movingDate}
            name="packaging"
          />
          {movingDate === dateOfMoving[0] && (
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              showTimeSelect
              dateFormat="MMMM d, yyyy HH:mm"
            />
          )}
        </>
      ))}

      <Flex mt="40px">
        {currentStep > 0 && (
          <Button light onClick={() => setCurrentStep(currentStep - 1)}>
            Geri
          </Button>
        )}
        <Button onClick={() => setCurrentStep(currentStep + 1)} ml="auto">
          Devam et
        </Button>
      </Flex>
    </>
  )

  const Step10 = () => (
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
        placeholder="Adınız"
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
        value={calculatorParams.contact.email}
        placeholder="Email adresiniz"
      />

      <Flex mt="40px">
        {currentStep > 0 && (
          <Button light onClick={() => setCurrentStep(currentStep - 1)}>
            Geri
          </Button>
        )}
        <Button onClick={() => setCurrentStep(currentStep + 1)} ml="auto">
          Devam et
        </Button>
      </Flex>
    </>
  )

  const Step11 = () => (
    <>
      <H2>250₺ - 750₺</H2>
      <Paragraph m="40px 0 20px 0" color="grey">
        Yakında sizinle iletişime geçeceğiz. Bu zamana kadar bize şu yolla
        ulaşabilirsiniz:
      </Paragraph>

      <BadgeGroup>
        <BadgeWithIcon>
          <Img src={phoneIcon} />
          05321234567
        </BadgeWithIcon>
        <BadgeWithIcon>
          <Img src={telegramIcon} />
          @destannakliyat
        </BadgeWithIcon>
        <BadgeWithIcon>
          <Img src={whatsappIcon} />
          05321234567
        </BadgeWithIcon>
        <BadgeWithIcon>
          <Img src={mailIcon} />
          info@destannakliyat.com.tr
        </BadgeWithIcon>
      </BadgeGroup>

      <Flex mt="40px">
        {currentStep > 0 && (
          <Button light onClick={() => setCurrentStep(currentStep - 1)}>
            Geri
          </Button>
        )}
        <Button
          disabled={!calculatorParams.noteForCarrier}
          onClick={() => setCurrentStep(currentStep + 1)}
          ml="auto"
        >
          Devam et
        </Button>
      </Flex>
    </>
  )
  const steps = [
    Step0,
    Step1,
    Step2,
    Step3,
    Step4,
    Step5,
    Step6,
    Step7,
    Step8,
    Step9,
    Step10,
    Step11
  ]

  const StepComponent = steps[currentStep]
  return (
    <Form>
      <Headline mb="20px" color="secondary">
        {titles[currentStep]}
      </Headline>
      <StepComponent />
    </Form>
  )
}

export default Steps
