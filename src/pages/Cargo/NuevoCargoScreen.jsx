import { Text, Stack, Button } from '@chakra-ui/react';
import React from 'react';
import { FaRegSave, FaArrowLeft } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useMutateCargo, useQueryDepartamento } from '../../hooks/useMutate';
import FormikControl from '../../utils/FormikControl';
import { SpinnerStyled } from '../../styled/Spinner';

const NuevoCargoScreen = () => {
  let navigate = useNavigate();

  const { mutate, isError, isLoading } = useMutateCargo();

  const { data: departamentoList, isLoading: loadingDepartamento } =
    useQueryDepartamento();

  if (loadingDepartamento) {
    return <SpinnerStyled />;
  }

  const departamento = departamentoList.map(departamento => ({
    key: departamento.nombre_departamento,
    value: departamento._id,
  }));

  const initialValues = {
    nombre_cargo: '',
    departamento: '',
    descripcion: '',
  };

  const validationSchema = Yup.object({
    nombre_cargo: Yup.string()
      .required('El Nombre es Obligatorio')
      .max(20, 'El Nombre debe tener menos de 20 caracteres')
      .min(1, 'El Nombre debe tener mas de 5 caracteres'),
    departamento: Yup.string().required('El Departamento es Obligatorio'),
    descripcion: Yup.string()
      .required('La Direccion es Obligatoria')
      .max(250, 'La Direccion debe tener maximo de 250 caracteres')
      .min(5, 'La Direccion debe tener minimo de 5 caracteres'),
  });

  const onSubmit = (values, actions) => {
    mutate(values, {
      onSuccess: () => {
        actions.resetForm();
        actions.setSubmitting(false);
        navigate('/listar-cargo');
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
            <Text fontSize="2xl" pt={'35'} paddingBottom={'2'}>
              Nuevo Cargo
            </Text>
            <hr />
            <Form
              as="form"
              pt={'35'}
              w="100%"
              p={4}
              autoComplete="off"
              // onSubmit={formik.handleSubmit}
            >
              <FormikControl
                control="chakraInput"
                label="Nombre Cargo"
                name="nombre_cargo"
              />
              <FormikControl
                        requir="true"
                        control="select"
                        label="Departamento a Asignar"
                        placeholder="Seleccione un departamento"
                        name="departamento"
                        options={departamento}
                      />
              <FormikControl
                        control="textarea"
                        requir="true"
                        name="descripcion"
                        label="Descripcion"
                        ext={250}
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

export default NuevoCargoScreen;
