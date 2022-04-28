import {
  Box,
  Button,
  Container,
  Flex,
  Spinner,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Formik } from 'formik';
import React from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Link, useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import {
  getDepartamento,
  updateDepartamento,
} from '../../api/departamentoResponse';
import TextField from '../../styled/TextField';
import { FaArrowLeft, FaSync } from 'react-icons/fa';

const EditarDepartamentoScreen = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { data, isLoading, isError, error } = useQuery(
    ['departamento', { id }],
    getDepartamento
  );
  const { mutateAsync, isLoading: isMutating } =
    useMutation(updateDepartamento);

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

  return (
    <Formik
      initialValues={{
        nombre_departamento: data?.nombre_departamento,
        email_corporativo: data?.email_corporativo,
        telefono_corporativo: data?.telefono_corporativo,
      }}
      validationSchema={Yup.object({
        nombre_departamento: Yup.string().required('Correo Obligatorio'),
        email_corporativo: Yup.string()
          .required('Correo Obligatorio')
          .email('Correo Invalido'),
        telefono_corporativo: Yup.string()
          .required('Telefono Obligatorio')
          .max(9, 'Maximo 9 Caracteres'),
      })}
      onSubmit={(values, actions) => {
        mutateAsync(
          { ...values, id },
          {
            onSuccess: () => {
              queryClient.setQueryData(['departamento', { id }], values);
              actions.resetForm();
              actions.setSubmitting(false);
              navigate('/listar-departamento');
            },
          }
        );
      }}
    >
      {formik => (
        <>
          <Text fontSize="2xl" paddingTop={'35'} paddingBottom={'2'}>
            Actualizar departamento
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
              name="nombre_departamento"
              label="Nombre Departamento"
              placeholder="Digita Nombre Departamento"
              maxW={'70%'}
            />
            <TextField
              top={10}
              requir={true}
              name="email_corporativo"
              label="Correo Electronico Corporativo"
              placeholder="Digita Correo Electronico"
              maxW={'70%'}
            />
            <TextField
              top={10}
              requir={true}
              name="telefono_corporativo"
              label="Telefono de Area"
              placeholder="Digita Telefono de Area"
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
              <Link to="/listar-departamento">
                <Button
                  leftIcon={<FaArrowLeft />}
                  colorScheme="orange"
                  variant="outline"
                  ml={4}
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

export default EditarDepartamentoScreen;
