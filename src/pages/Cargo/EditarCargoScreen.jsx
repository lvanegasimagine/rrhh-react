import {
  Container,
  Text,
  Stack,
  Button,
  Flex,
  Spinner,
} from '@chakra-ui/react';
import React from 'react';
import { FaSync, FaArrowLeft } from 'react-icons/fa';
import { getDepartamentos } from '../../api/departamentoResponse';
import * as Yup from 'yup';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getCargo, updateCargo } from '../../api/cargoResponse';
import { Form, Formik } from 'formik';
import { AlertStyled } from '../../styled/AlertStyled';
import FormikControl from '../../utils/FormikControl';

const EditarCargoScreen = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data, isLoading, isError, error } = useQuery(
    ['cargo', { id }],
    getCargo
  );

  const { data: departamentoList, isLoading: departamentoLoading } = useQuery(
    ['departamento'],
    getDepartamentos
  );

  const { mutateAsync, isLoading: isMutating } = useMutation(updateCargo);

  if (isLoading && departamentoLoading) {
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
          <AlertStyled error={error.message} />
        </Flex>
      </Container>
    );
  }

  const { _id, nombre_departamento } = data['departamento'];

  const drop = departamentoList?.map(departamento => ({
    key: departamento.nombre_departamento,
    value: departamento._id,
  }));

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
    console.log('Form Data', values);
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
      {formik => {
        return (
          <Form as="form" pt={'35'} w="100%" p={4} autoComplete="off">
            <Text fontSize="2xl" pt={'35'} paddingBottom={'2'}>
              Actualizar Cargo
            </Text>
            <hr />
            <FormikControl
              requir={true}
              control="chakraInput"
              type="text"
              label="Cargo"
              name="nombre_cargo"
              maxW={'70%'}
            />
            <FormikControl
              control="selectFilter"
              label="Departamento"
              name="departamento"
              defaultid={_id}
              defaultnombre={nombre_departamento}
              options={drop || []}
              maxW={'70%'}
            />
            <FormikControl
              requir={true}
              control="textarea"
              label="Descripcion"
              name="descripcion"
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
          </Form>
        );
      }}
    </Formik>
  );
};

export default EditarCargoScreen;
