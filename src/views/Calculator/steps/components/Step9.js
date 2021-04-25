import DatePicker from 'components/DatePicker'
import RadioButton from 'components/RadioButton'
import React, { useState } from 'react'
import dateOfMoving from '../dateOfMoving'

const Step9 = ({ setCalculatorParams, calculatorParams }) => {
  const [startDate, setStartDate] = useState(calculatorParams.dateOfMoving.date)
  return (
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
