import {
  Container,
  VStack,
  Text,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Select,
  Textarea,
} from '@chakra-ui/react';
import React from 'react';
import { FaRegSave, FaArrowLeft } from 'react-icons/fa';
import { useQuery } from 'react-query';
import { getDepartamentos } from '../../api/departamentoResponse';
import { useMutateCargo } from '../../hooks/useMutate';
import { Link, useNavigate } from 'react-router-dom';
import TextField from '../../styled/TextField';
import * as Yup from 'yup';
import { Formik } from 'formik';
import TextAreaField from '../../styled/TextAreaField';

const NuevoCargoScreen = () => {
  let navigate = useNavigate();

  const { data: departamentoList } = useQuery(
    ['departamento'],
    getDepartamentos,
    {
      retry: 2,
      retryDelay: 1000,
      cacheTime: 3000,
    }
  );

  const { mutate, isError, error, isLoading } = useMutateCargo();

  return (
    <Formik
      initialValues={{
        nombre_cargo: '',
        departamento: '',
        descripcion: '',
      }}
      validationSchema={Yup.object({
        nombre_cargo: Yup.string().required('Nombre Cargo Obligatorio'),
        departamento: Yup.string().required('Departamento Obligatorio'),
        descripcion: Yup.string()
          .required('Descripcion Obligatorio')
          .max(250, 'Maximo 250 Caracteres'),
      })}
      onSubmit={(values, actions) => {
        console.log(values);
        mutate(values, {
          onSuccess: () => {
            actions.resetForm();
            actions.setSubmitting(false);
            navigate('/listar-cargo');
          },
        });
      }}
    >
      {formik => (
        <>
          {isError && <Text>Error al crear el cargo</Text>}
          {error && <Text>Error al crear el cargo</Text>}
          <Text fontSize="2xl" paddingTop={'35'} paddingBottom={'2'}>
            Nuevo Cargo
          </Text>
          <hr />
          <Box
            as="form"
            paddingTop={'35'}
            w="100%"
            p={4}
            onSubmit={formik.handleSubmit}
            autoComplete="off"
          >
            <TextField
              top={10}
              requir={true}
              name="nombre_cargo"
              label="Nombre Cargo"
              placeholder="Digita Nombre Cargo"
              maxW={'70%'}
            />

            <FormControl isRequired paddingTop={'7'}>
              <FormLabel htmlFor="departamento">Departamento</FormLabel>
              <Select
                name="departamento"
                placeholder="Seleccione Departamento a asignar"
                maxW={'70%'}
                value={formik.values.departamento}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                {departamentoList?.map(departamento => (
                  <option key={departamento._id} value={departamento._id}>
                    {departamento.nombre_departamento}
                  </option>
                ))}
              </Select>
            </FormControl>

            <TextAreaField
              top={10}
              requir={true}
              name="descripcion"
              label="Descripcion"
              placeholder="Digita Descripcion"
              maxW={'70%'}
            />

            <Stack direction="row" spacing={4} pt="25">
              {isLoading ? (
                <Button
                  isLoading
                  loadingText="Guardando..."
                  colorScheme="teal"
                  variant="outline"
                ></Button>
              ) : (
                <Button
                  type="submit"
                  leftIcon={<FaRegSave />}
                  colorScheme="blue"
                  variant="solid"
                >
                  Guardar
                </Button>
              )}
              <Link to="/listar-departamento">
                <Button
                  leftIcon={<FaArrowLeft />}
                  colorScheme="orange"
                  variant="outline"
                >
                  Atras
                </Button>
              </Link>
            </Stack>
          </Box>
        </>
      )}
    </Formik>
  );
};

export default NuevoCargoScreen;
