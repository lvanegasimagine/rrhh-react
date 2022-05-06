import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { FormControl, FormLabel, FormErrorMessage, Select } from '@chakra-ui/react';

function SelectChakra(props) {
  const { defaultid, defaultnombre, label, name, options, ...rest } = props;
  // const { defaultid, defaultnombre } = props;

  const filtrado = options.filter((option) => option.key !== defaultnombre);
  console.log('filtrado', filtrado);
  console.log(defaultid)

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
      {/* <Select id={name} name={name} {...rest} maxW={'70%'}>
        <option value={defaultid}>{defaultnombre}</option>
        {filtrado.map(option => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Select> */}
      <FormErrorMessage>Selecciona una Opcion</FormErrorMessage>
    </FormControl>
  );
}

export default SelectChakra;
