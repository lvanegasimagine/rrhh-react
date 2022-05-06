import { Text, Stack, Button } from '@chakra-ui/react';
import React from 'react';
import { FaRegSave, FaArrowLeft } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useMutateDepartamento } from '../../hooks/useMutate';
import FormikControl from '../../utils/FormikControl';

const NuevoDepartamentoScreen = () => {
  let navigate = useNavigate();

  const { mutate, isError, isLoading } = useMutateDepartamento();

  const initialValues = {
    nombre_departamento: 'hola2',
    email_corporativo: 'mundo@mund.com',
    telefono_corporativo: '9874561',
  };

  const validationSchema = Yup.object({
    nombre_departamento: Yup.string().required('Correo Obligatorio'),
    email_corporativo: Yup.string()
      .required('Correo Obligatorio')
      .email('Correo Invalido'),
    telefono_corporativo: Yup.string()
      .required('Telefono Obligatorio')
      .max(9, 'Maximo 9 Caracteres'),
  });

  const onSubmit = (values, actions) => {
    mutate(values, {
      onSuccess: () => {
        actions.resetForm();
        actions.setSubmitting(false);
        navigate('/listar-departamento');
      },
    });
  };

  if (isError) return <p>Error</p>;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => {
        return (
          <>
            <Text fontSize="2xl" paddingTop={'35'} paddingBottom={'2'}>
              Nuevo departamento
            </Text>
            <hr />
            <Form as="form" paddingTop={'35'} w="100%" p={4} autoComplete="off">
              <FormikControl
                control="chakraInput"
                label="Nombre departamento"
                name="nombre_departamento"
              />
              <FormikControl
                control="chakraInput"
                type="email"
                label="Email Corporativo"
                name="email_corporativo"
              />
              <FormikControl
                control="chakraInput"
                label="Telefono Corporativo"
                name="telefono_corporativo"
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
            </Form>
          </>
        );
      }}
    </Formik>
  );
};

export default NuevoDepartamentoScreen;
