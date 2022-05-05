import React from 'react';
import TextAreaField from './Form/TextAreaField';
import TextField from './Form/TextField';
import SelectChakra from './Form/SelectChakra';

function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case 'chakraInput':
      return <TextField {...rest} />;
    case 'textarea':
      return <TextAreaField {...rest} />;
    case 'select':
      return <SelectChakra {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
