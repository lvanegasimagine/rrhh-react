import {
  Button,
  Container,
  Divider,
  Flex,
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { updateEmpleado } from '../../api/empleadoResponse';
import { useQueryCargo, useQueryDepartamento, useQueryEmpleadoById } from '../../hooks/useMutate';
import { AlertStyled } from '../../styled/AlertStyled';
import { Form, Formik } from 'formik';
import FormikControl from '../../utils/FormikControl';
import { FaSync, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SpinnerStyled } from '../../styled/Spinner';
import * as Yup from 'yup';

const EditarEmpleadoScreen = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data, isLoading, isError, error } = useQueryEmpleadoById(id);
  const { data: departamentoList, isLoading: loadingDepartamento } =
    useQueryDepartamento();

  const { data: cargoList, isLoading: loadingCargo } = useQueryCargo();

  const { mutateAsync, isLoading: isMutating } = useMutation(updateEmpleado);

  if (isLoading) {
    return (
      <Container>
        <Flex py="5" justifyContent="center">
          <Spinner size="xl" />
        </Flex>
      </Container>
    );
  }

  if (loadingDepartamento || loadingCargo) {
    return <SpinnerStyled />;
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

  const { _id: idDepartamento, nombre_departamento } = data['departamento'];
  const { _id: idCargo, nombre_cargo } = data['cargo'];

  const dropDepartamento = departamentoList.map(departamento => ({
    key: departamento.nombre_departamento,
    value: departamento._id,
  }));

  const dropCargo = cargoList.map(cargo => ({
    key: cargo.nombre_cargo,
    value: cargo._id,
  }));

  let today = new Date(data?.fecha_nacimiento);

  const initialValues = {
    nombre: data?.nombre,
    apellido: data?.apellido,
    correo_electronico: data?.correo_electronico,
    cedula: data?.cedula,
    telefono: data?.telefono,
    cargo: data?.cargo._id,
    departamento: data?.departamento._id,
    direccion: data?.direccion,
    estado_civil: data?.estado_civil,
    fecha_nacimiento: today.toISOString().split('T')[0],
    ciudad_nacimiento: data?.ciudad_nacimiento,
    sexo: data?.sexo,
  };

  const validationSchema = Yup.object({
    nombre: Yup.string().required('El Nombre es Obligatorio')
            .max(20, 'El Nombre debe tener menos de 20 caracteres')
            .min(1, 'El Nombre debe tener mas de 5 caracteres'),
    apellido: Yup.string().required('El Apellido es Obligatorio')
            .max(20, 'El Nombre debe tener menos de 20 caracteres')
            .min(1, 'El Nombre debe tener mas de 5 caracteres'),
    correo_electronico: Yup.string().required('El Correo Electronico es Obligatorio')
            .email('El Correo Electronico no es valido'),
    cedula: Yup.string().required('La Cedula es Obligatoria')
            .max(16, 'Cedula debe tener 16 caracteres incluido -')
            .min(16, ''),
    telefono: Yup.string().required('El Telefono es Obligatorio')
            .max(9, 'Celular debe tener 9 caracteres incluido -')
            .min(9, ''),
    cargo: Yup.string().required('El Cargo es Obligatorio'),
    departamento: Yup.string().required('El Departamento es Obligatorio'),
    direccion: Yup.string().required('La Direccion es Obligatoria')
              .max(250, 'La Direccion debe tener maximo de 250 caracteres')
              .min(5, 'La Direccion debe tener minimo de 5 caracteres'),
    estado_civil: Yup.string().required('El Estado Civil es Obligatorio'),
    fecha_nacimiento: Yup.string().required('La Fecha de Nacimiento es Obligatoria'),
    ciudad_nacimiento: Yup.string().required('La Ciudad de Nacimiento es Obligatoria'),
    sexo: Yup.string().required('El Sexo es Obligatorio'),
  });

  const onSubmit = (values, actions) => {
    mutateAsync(
      { ...values, id },
      {
        onSuccess: () => {
          queryClient.setQueryData(['empleado', { id }], values);
          actions.resetForm();
          actions.setSubmitting(false);
          navigate('/listar-empleado');
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
          <>
            <Container maxW="container.xl" p={0}>
              <Text fontSize="2xl" pt={'35'} paddingBottom={'2'}>
                Actualizar Empleado
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
                        label="Nombre Empleado"
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
                        control="selectFilter"
                        requir="true"
                        label="Cargo Asignado"
                        name="cargo"
                        defaultid={idCargo}
                        defaultnombre={nombre_cargo}
                        options={dropCargo}
                      />
                    </GridItem>
                    <GridItem colSpan={1}>
                      <FormikControl
                        control="selectFilter"
                        requir="true"
                        label="Departamento Asignado"
                        name="departamento"
                        defaultid={idDepartamento}
                        defaultnombre={nombre_departamento}
                        options={dropDepartamento}
                      />
                    </GridItem>
                  </SimpleGrid>
                  <Stack direction="row" spacing={4} pt="25" pb="10">
                    {isMutating ? (
                      <Button
                        isLoading
                        size="lg"
                        loadingText="Guardando..."
                        colorScheme="teal"
                        variant="outline"
                      ></Button>
                    ) : (
                      <Button
                        type="submit"
                        size="lg"
                        leftIcon={<FaSync />}
                        colorScheme="blue"
                        variant="solid"
                      >
                        Actualizar
                      </Button>
                    )}
                    <Link to="/listar-empleado">
                      <Button
                        size="lg"
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

export default EditarEmpleadoScreen;
