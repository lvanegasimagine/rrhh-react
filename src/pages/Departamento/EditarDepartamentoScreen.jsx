import { Box, Button, Container, Flex, Stack, Text } from '@chakra-ui/react';
import { Formik } from 'formik';
import React from 'react'
import { useMutation, useQuery } from 'react-query';
import { Link, useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { getDepartamento, updateDepartamento } from '../../api/departamentoResponse';
import { useMutateDepartamento } from '../../hooks/useMutateDepartamento';
import TextField from '../../styled/TextField';
import { FaRegSave, FaArrowLeft } from 'react-icons/fa';

const EditarDepartamentoScreen = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useQuery(["departamento", {id} ], getDepartamento);
  console.log( 'estamos aca perros', data);

  if (isLoading) {
    return (
      <Container>
        <Flex py="5" justifyContent="center">
          {/* <Loader type="ThreeDots" color="#cccccc" height={30} /> */}
          <h1>Cargando....</h1>
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
        console.log(values);
        // mutate(values, {
        //   onSuccess: () => {
        //     actions.resetForm();
        //     actions.setSubmitting(false);
        //     navigate('/listar-departamento');
        //   },
        // });
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
              <Button
                type="submit"
                leftIcon={<FaRegSave />}
                colorScheme="blue"
                variant="solid"
              >
                Guardar
              </Button>
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
  )
}

export default EditarDepartamentoScreen