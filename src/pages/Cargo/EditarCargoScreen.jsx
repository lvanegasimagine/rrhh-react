import {
  Container,
  Text,
  Box,
  FormControl,
  FormLabel,
  Stack,
  Button,
  Select,
  Flex,
  Spinner,
} from '@chakra-ui/react';
import React from 'react';
import { FaSync, FaArrowLeft } from 'react-icons/fa';
import { getDepartamentos } from '../../api/departamentoResponse';
import TextField from '../../styled/TextField';
import * as Yup from 'yup';
import { Formik } from 'formik';
import TextAreaField from '../../styled/TextAreaField';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getCargo, updateCargo } from '../../api/cargoResponse';

const EditarCargoScreen = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data, isLoading, isError, error } = useQuery(
    ['cargo', { id }],
    getCargo
  );

  const { data: departamentoList } = useQuery(
    ['departamento'],
    getDepartamentos,
    {
      retry: 2,
      retryDelay: 1000,
      cacheTime: 3000,
    }
  );

  const { mutateAsync, isLoading: isMutating } = useMutation(updateCargo);

  if (isLoading) {
    return (
      <Container>
        <Flex py="5" justifyContent="center">
          <Spinner size="xl" />
        </Flex>
      </Container>
    );
  }

  if (isError) {
    return (
      <Container>
        <Flex py="5" justifyContent="center">
          Error: {error.message}
        </Flex>
      </Container>
    );
  }

  const { _id, nombre_departamento } = data.departamento;

  const drop = departamentoList.map((departamento) => ({
    key: departamento.nombre_departamento,
    value: departamento._id,
  }));

  console.log(_id, nombre_departamento, drop)

  

  const initialValues = {
    nombre_cargo: data?.nombre_cargo,
    descripcion: data?.descripcion,
    departamento: data?.departamento._id,
  };

  const validationSchema = Yup.object({
    nombre_cargo: Yup.string().required('Nombre Cargo Obligatorio'),
    departamento: Yup.string().required('Departamento Obligatorio'),
    descripcion: Yup.string()
      .required('Descripcion Obligatorio')
      .max(250, 'Maximo 250 Caracteres'),
  });

  const onSubmit = (values, actions) => {
    mutateAsync(
          { ...values, id },
          {
            onSuccess: () => {
              queryClient.setQueryData(['cargo', { id }], values);
              actions.resetForm();
              actions.setSubmitting(false);
              navigate('/listar-cargo');
            },
          }
        );
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => (
        <>
          {isError && <Text>Error al crear el cargo</Text>}
          {error && <Text>Error al crear el cargo</Text>}
          <Text fontSize="2xl" paddingTop={'35'} paddingBottom={'2'}>
            Actualizar Cargo
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

            {/* <FormControl isRequired paddingTop={'7'}>
              <FormLabel htmlFor="departamento">Departamento</FormLabel>
              <Select
                name="departamento"
                // placeholder="Seleccione Departamento a asignar"
                maxW={'70%'}
                // value={formik.values.departamento}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                {departamentoList?.map(departamento => (
                  <option key={departamento._id} value={departamento._id}>
                    {departamento.nombre_departamento}
                  </option>
                ))}
              </Select>
            </FormControl> */}

            <TextAreaField
              top={10}
              requir={true}
              name="descripcion"
              label="Descripcion"
              placeholder="Digita Descripcion"
              maxW={'70%'}
            />

            <Stack direction="row" spacing={4} pt="25">
              {isMutating ? (
                <Button
                  isLoading
                  loadingText="Guardando..."
                  colorScheme="teal"
                  variant="outline"
                ></Button>
              ) : (
                <Button
                  type="submit"
                  leftIcon={<FaSync />}
                  colorScheme="blue"
                  variant="solid"
                >
                  Actualizar
                </Button>
              )}
              <Link to="/listar-cargo">
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

export default EditarCargoScreen;
