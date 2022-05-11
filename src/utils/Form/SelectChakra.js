import React from 'react';
import { Field } from 'formik';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Select,
} from '@chakra-ui/react';

function SelectChakra(props) {
  const { label, name, options, ...rest } = props;

  console.log(options)

  return (
    <FormControl isRequired pt={10}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Field as={Select} id={name} name={name} {...rest}>
        {options.map(option => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <FormErrorMessage>Selecciona una Opcion</FormErrorMessage>
    </FormControl>
  );
}

export default SelectChakra;
