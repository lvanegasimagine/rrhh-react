import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
} from '@chakra-ui/react';
import { Field, useField } from 'formik';
import { useQuery } from 'react-query';
import { getDepartamentos } from '../api/departamentoResponse';

const SelectField = ({ label, requir, place, top, data, departamento, handleChange, handleBlur }) => {
  // const { data: departamentoList } = useQuery(
  //   ['departamento'],
  //   getDepartamentos,
  //   {
  //     retry: 2,
  //     retryDelay: 1000,
  //     cacheTime: 3000,
  //   }
  // );

  return (
    <>
      <FormControl isRequired={requir} paddingTop={'7'}>
        <FormLabel htmlFor={label}>{label}</FormLabel>
        <Select
          name={label}
          placeholder={place}
          maxW={top}
          value={departamento}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          {data?.map(departamento => (
            <option key={departamento._id} value={departamento._id}>
              {departamento.nombre_departamento}
            </option>
          ))}
        </Select>
        {/* <FormErrorMessage>{meta.error}</FormErrorMessage> */}
      </FormControl>
    </>
  );
};

export default SelectField;
