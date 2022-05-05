import React from 'react'
import TextField from '../../styled/TextField'
import TextAreaField from '../../styled/TextAreaField'
import SelectChakra from './SelectChakra'


function FormikControl (props) {
  const { control, ...rest } = props
  switch (control) {

    case 'textarea':
      return <TextAreaField {...rest} />
    case 'select':
      return <SelectChakra {...rest} />
    case 'radio':
      // return <RadioButtons {...rest} />
    case 'checkbox':
      // return <CheckboxGroup {...rest} />
    case 'date':
      // return <DatePicker {...rest} />
    case 'chakraInput':
      return <TextField {...rest} />
    default:
      return null
  }
}

export default FormikControl
