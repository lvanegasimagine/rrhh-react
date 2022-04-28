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
} from '@chakra-ui/react';
import React from 'react';
import { FaRegSave, FaArrowLeft } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import TextField from '../../styled/TextField';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useMutateDepartamento } from '../../hooks/useMutateDepartamento';

const NuevoDepartamentoScreen = () => {
  let navigate = useNavigate();

  const { mutate, isError, error } = useMutateDepartamento();

  return (
    <Formik
      initialValues={{
        nombre_departamento: 'hola',
        email_corporativo: 'mundo@mund.com',
        telefono_corporativo: '9874561',
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
        mutate(values, {
          onSuccess: () => {
            actions.resetForm();
            actions.setSubmitting(false);
            navigate('/listar-departamento');
          },
        });
      }}
    >
      {formik => (
        <>
        {isError && <Text>Error al crear el departamento</Text>}
        {error && <Text>Error al crear el departamento</Text>}
          <Text fontSize="2xl" paddingTop={'35'} paddingBottom={'2'}>
            Nuevo departamento
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
  );
};

export default NuevoDepartamentoScreen;
