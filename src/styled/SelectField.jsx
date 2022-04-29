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

const SelectField = ({ label, requir, top, data, ...props }) => {
  
  const [field, meta] = useField(props);
  return (
    <>
      <FormControl
        isInvalid={meta.error && meta.touched}
        isRequired={requir}
        paddingTop={top}
      >
        <FormLabel>{label}</FormLabel>
        <Select
          id="departamento"
          name="departamento"
          placeholder="Seleccione Departamento a asignar"
          maxW={'70%'}
        >
          {data?.map(departamento => (
            <option key={departamento._id} value={departamento.nombre_departamento}>
              {departamento.nombre_departamento}
            </option>
          ))}
        </Select>
        <FormErrorMessage>{meta.error}</FormErrorMessage>
      </FormControl>
    </>
  );
};

export default SelectField;
