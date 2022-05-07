import React from 'react';
import { Field } from 'formik';
import { FormControl, FormLabel, FormErrorMessage, Select } from '@chakra-ui/react';

function SelectChakraFilter(props) {
  const { defaultid, defaultnombre, label, name, options, ...rest } = props;

  const filtrado = options.filter((option) => option.key !== defaultnombre);

  return (
    <FormControl isRequired paddingTop={'7'}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Field as={Select} id={name} name={name} {...rest} maxW={'70%'}>
        <option value={defaultid}>{defaultnombre}</option>
        {filtrado.map((option) => {
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

export default SelectChakraFilter;
