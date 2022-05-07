import {
  Text,
  Stack,
  Button,
  Container,
  Flex,
  VStack,
  Heading,
  SimpleGrid,
  GridItem,
  Divider,
} from '@chakra-ui/react';
import React from 'react';
import { FaRegSave, FaArrowLeft } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useMutateDepartamento, useQueryCargo, useQueryDepartamento } from '../../hooks/useMutate';
import FormikControl from '../../utils/FormikControl';
import { SpinnerStyled } from '../../styled/Spinner';

const NuevoEmpleadoScreen = () => {
  let navigate = useNavigate();

  const { mutate, isError, isLoading } = useMutateDepartamento();
  const { data: departamentoList, isLoading: loadingDepartamento } =
    useQueryDepartamento();

  const { data: cargoList, isLoading: loadingCargo } = useQueryCargo();

  const sexo = [
    { key: 'Seleccione sexo', value: '' },
    { key: 'Masculino', value: 'Masculino' },
    { key: 'Femenino', value: 'Femenino' },
  ];

  const estadoCivil = [
    { key: 'Seleccione estado Civil', value: '' },
    { key: 'Soltero', value: 'Soltero' },
    { key: 'Casado', value: 'Casado' },
    { key: 'Divorciado', value: 'Divorciado' },
    { key: 'Separado', value: 'Separado' },
    { key: 'Viuda', value: 'Viudo' },
  ];

  if (loadingDepartamento || loadingCargo) {
    return <SpinnerStyled />;
  }

  const cargo = cargoList.map(cargo => ({
    key: cargo.nombre_cargo,
    value: cargo._id,
  }));

  const departamento = departamentoList.map(departamento => ({
    key: departamento.nombre_departamento,
    value: departamento._id,
  }));

  const initialValues = {
    nombre: 'Clark',
    apellido: 'Kent',
    correo_electronico: 'mundo@mund.com',
    cedula: '001-020565-0010H',
    telefono: '9874-8561',
    cargo: '',
    departamento: '',
    direccion: 'Metropolis wey',
    estado_civil: '',
    fecha_nacimiento: '2022-02-01',
    ciudad_nacimiento: 'Managua, Nicaragua',
    sexo: '',
  };

  // const validationSchema = Yup.object({
  //   nombre_departamento: Yup.string().required('Correo Obligatorio'),
  //   email_corporativo: Yup.string()
  //     .required('Correo Obligatorio')
  //     .email('Correo Invalido'),
  //   telefono_corporativo: Yup.string()
  //     .required('Telefono Obligatorio')
  //     .max(9, 'Maximo 9 Caracteres'),
  // });

  const onSubmit = (values, actions) => {
    console.log(values);
    // mutate(values, {
    //   onSuccess: () => {
    //     actions.resetForm();
    //     actions.setSubmitting(false);
    //     navigate('/listar-departamento');
    //   },
    // });
  };

  if (isError) return <p>Error</p>;

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => {
        return (
          <>
            <Container maxW="container.xl" p={0}>
              <Text fontSize="2xl" pt={'35'} paddingBottom={'2'}>
                Nuevo Empleado
              </Text>
              <hr />
              <Flex
                h={{ base: 'auto', md: '100vh' }}
                py={[0, 5, 10]}
                direction={{ base: 'column-reverse', md: 'row' }}
              >
                <VStack
                  as={Form}
                  w={'full'}
                  h={'full'}
                  p={2}
                  spacing={8}
                  alignItems="flex-start"
                  autoCapitalize="off"
                >
                <VStack spacing={3} alignItems="flex-start">
                  <Heading size="lg">Datos Personales</Heading>
                  <Divider w="full" orientation="horizontal" />
                </VStack>
                  <SimpleGrid columns={3} columnGap={3} rowGap={6} w="full">
                    <GridItem colSpan={1}>
                      <FormikControl
                        control="chakraInput"
                        label="Nombre departamento"
                        name="nombre"
                      />
                    </GridItem>
                    <GridItem colSpan={1}>
                      <FormikControl
                        control="chakraInput"
                        label="Apellido"
                        name="apellido"
                      />
                    </GridItem>
                    <GridItem colSpan={1}>
                      <FormikControl
                        control="chakraInput"
                        requir="true"
                        name="cedula"
                        label="Cedula"
                        placeholder="Ej: 000-000000-0010A"
                        ext={16}
                      />
                    </GridItem>
                    <GridItem colSpan={3}>
                      <FormikControl
                        control="textarea"
                        requir="true"
                        name="direccion"
                        label="Direccion"
                        placeholder="Digita direccion"
                      />
                    </GridItem>
                    <GridItem colSpan={1}>
                      <FormikControl
                        control="chakraInput"
                        type="date"
                        requir="true"
                        name="fecha_nacimiento"
                        label="Fecha Nacimiento"
                      />
                    </GridItem>
                    <GridItem colSpan={1}>
                      <FormikControl
                        control="chakraInput"
                        requir="true"
                        name="ciudad_nacimiento"
                        label="Lugar Nacimiento"
                        placeholder="Ciudad/Pais"
                      />
                    </GridItem>
                    <GridItem colSpan={1}>
                      <FormikControl
                        requir="true"
                        control="select"
                        label="Sexo"
                        name="sexo"
                        options={sexo}
                      />
                    </GridItem>
                    <GridItem colSpan={1}>
                      <FormikControl
                        requir="true"
                        control="select"
                        label="Estado Civil"
                        name="estado_civil"
                        options={estadoCivil}
                      />
                    </GridItem>
                    <GridItem colSpan={1}>
                      <FormikControl
                        control="chakraInput"
                        requir="true"
                        name="telefono"
                        label="Celular"
                        placeholder="0000-0000"
                      />
                    </GridItem>
                    <GridItem colSpan={1}>
                      <FormikControl
                        control="chakraInput"
                        type="email"
                        requir="true"
                        name="correo_electronico"
                        label="Email"
                        placeholder="tucorreo@correo.com"
                      />
                    </GridItem>
                  </SimpleGrid>
                  <VStack spacing={3} alignItems="flex-start">
                    <Heading size="lg">Asignaciones</Heading>
                    <Divider w="full" orientation="horizontal" />
                  </VStack>
                  <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
                  <GridItem colSpan={1}>
                    <FormikControl
                      control="select"
                      requir="true"
                      label="Cargo a Asignar"
                      name="cargo"
                      options={cargo}
                    />
                  </GridItem>
                  <GridItem colSpan={1}>
                    <FormikControl
                      control="select"
                      requir="true"
                      label="Departamento a Asignar"
                      name="departamento"
                      options={departamento}
                    />
                  </GridItem>
                  </SimpleGrid>
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
                </VStack>
              </Flex>
            </Container>
          </>
        );
      }}
    </Formik>
  );
};

export default NuevoEmpleadoScreen;
