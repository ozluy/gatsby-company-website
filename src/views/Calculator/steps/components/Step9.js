import DatePicker from 'components/DatePicker'
import RadioButton from 'components/RadioButton'
import React, { useState } from 'react'
import config from 'common/config'

const Step9 = ({ setCalculatorParams, calculatorParams }) => {
  const [startDate, setStartDate] = useState(calculatorParams.dateOfMoving.date)
  return (
    <>
      {config.dateOfMoving.map((movingDate) => (
        <>
          <RadioButton
            checked={
              movingDate.label ===
              calculatorParams.dateOfMoving.selectedOption.label
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
            id={movingDate.label}
            key={movingDate.label}
            label={movingDate.label}
            name="packaging"
          />
          {movingDate === config.dateOfMoving[0] && (
            <DatePicker
              selected={startDate}
              onChange={(date) => {
                setStartDate(date)
                setCalculatorParams({
                  ...calculatorParams,
                  ...{
                    dateOfMoving: {
                      ...calculatorParams.dateOfMoving,
                      ...{ date }
                    }
                  }
                })
              }}
              showTimeSelect
              dateFormat="MMMM d, yyyy HH:mm"
            />
          )}
        </>
      ))}
    </>
  )
}
export default Step9
