import {
  Container,
  Flex,
  VStack,
  Heading,
  Divider,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Button,
  Text,
} from '@chakra-ui/react';
import { Formik } from 'formik';
import { FcCheckmark, FcCancel } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import { getDepartamentos } from '../../api/departamentoResponse';
import { useQuery } from 'react-query';
import { getCargos } from '../../api/cargoResponse';
import { useMutateEmpleado } from '../../hooks/useMutate';
import TextField from '../../styled/TextField';
import TextAreaField from '../../styled/TextAreaField';

export default function NuevoEmpleadoScreen() {
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

  const { data: cargoList } = useQuery(['cargo'], getCargos, {
    retry: 2,
    retryDelay: 1000,
    cacheTime: 3000,
  });

  const { mutate, isError, error, isLoading } = useMutateEmpleado();

  return (
    <Formik
      initialValues={{
        nombre: '',
        apellido: '',
        cedula: '',
        direccion: '',
        fecha_nacimiento: '',
        ciudad_nacimiento: '',
        sexo: '',
        estado_civil: '',
        telefono: '',
        correo_electronico: '',
        cargo: '',
        departamento: '',
      }}
      onSubmit={(values, actions) => {
        console.log(values);
        mutate(values, {
          onSuccess: () => {
            actions.resetForm();
            actions.setSubmitting(false);
            navigate('/listar-empleado');
          },
        });
      }}
    >
      {formik => (
        <>
          <Container maxW="container.xl" p={0}>
            {isError && <Text>Error al crear el cargo</Text>}
            {error && <Text>Error al crear el cargo</Text>}
            <Text fontSize="2xl" paddingTop={'35'} paddingBottom={'2'}>
              Nuevo Empleado
            </Text>
            <hr />
            <Flex
              h={{ base: 'auto', md: '100vh' }}
              py={[0, 5, 10]}
              direction={{ base: 'column-reverse', md: 'row' }}
            >
              <VStack
                as="form"
                w={'full'}
                h={'full'}
                p={2}
                spacing={8}
                alignItems="flex-start"
                autoComplete="off"
                onSubmit={formik.handleSubmit}
              >
                <VStack spacing={3} alignItems="flex-start">
                  <Heading size="lg">Datos Personales</Heading>
                  <Divider w="full" orientation="horizontal" />
                </VStack>
                <SimpleGrid columns={3} columnGap={3} rowGap={6} w="full">
                  <GridItem colSpan={1}>
                    <TextField
                      requir={true}
                      name="nombre"
                      label="Nombre"
                      placeholder="Digita nombres"
                    />
                  </GridItem>
                  <GridItem colSpan={1}>
                    <TextField
                      requir={true}
                      name="apellido"
                      label="Apellido"
                      placeholder="Digita apellidos"
                    />
                  </GridItem>
                  <GridItem colSpan={1}>
                    <TextField
                      requir={true}
                      name="cedula"
                      label="Cedula"
                      placeholder="Digita cedula"
                    />
                  </GridItem>
                  <GridItem colSpan={3}>
                    {/* <TextField
                      requir={true}
                      name="direccion"
                      label="Direccion"
                      placeholder="Digita direccion"
                    /> */}
                    <TextAreaField
                      requir={true}
                      name="direccion"
                      label="Direccion"
                      placeholder="Digita direccion"
                    />
                  </GridItem>
                  <GridItem colSpan={1}>
                    <TextField
                      type="date"
                      requir={true}
                      name="fecha_nacimiento"
                      label="Fecha Nacimiento"
                    />
                  </GridItem>
                  <GridItem colSpan={1}>
                    <TextField
                      requir={true}
                      name="ciudad_nacimiento"
                      label="Lugar Nacimiento"
                      placeholder="Digita Lugar Nacimiento"
                    />
                  </GridItem>
                  <GridItem colSpan={1}>
                    <FormControl>
                      <FormLabel>Sexo</FormLabel>
                      <Select
                        name="sexo"
                        placeholder="Selecciona Genero"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      >
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino </option>
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <FormControl>
                      <FormLabel>Estado Civil</FormLabel>
                      <Select
                        name="estado_civil"
                        placeholder="Selecciona Estado Civil"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      >
                        <option value="Soltero">Soltero</option>
                        <option value="Casado">Casado</option>
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <TextField
                      requir={true}
                      name="telefono"
                      label="Celular"
                      placeholder="Digita Celular"
                    />
                  </GridItem>
                  <GridItem colSpan={1}>
                    <TextField
                      requir={true}
                      name="correo_electronico"
                      label="Correo Electronico"
                      placeholder="Digita Correo Electronico"
                    />
                  </GridItem>
                </SimpleGrid>
                <VStack spacing={3} alignItems="flex-start">
                  <Heading size="lg">Asignaciones</Heading>
                  <Divider w="full" orientation="horizontal" />
                </VStack>
                <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
                  <GridItem colSpan={1}>
                    <FormControl isRequired>
                      <FormLabel htmlFor="cargo">Cargo a Asignar</FormLabel>
                      <Select
                        name="cargo"
                        value={formik.values.cargo}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      >
                        {cargoList?.map(cargo => (
                          <option key={cargo._id} value={cargo._id}>
                            {cargo.nombre_cargo}
                          </option>
                        ))}
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <FormControl isRequired>
                      <FormLabel htmlFor="departamento">
                        Departamento a Asignar
                      </FormLabel>
                      <Select
                        name="departamento"
                        value={formik.values.departamento}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      >
                        {departamentoList?.map(departamento => (
                          <option
                            key={departamento._id}
                            value={departamento._id}
                          >
                            {departamento.nombre_departamento}
                          </option>
                        ))}
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem colSpan={1} pt="2">
                    <Button
                      size="lg"
                      w="full"
                      colorScheme="facebook"
                      type="submit"
                    >
                      {' '}
                      <FcCheckmark /> &nbsp; Guardar
                    </Button>
                  </GridItem>
                  <GridItem colSpan={1} pt="2">
                    <Button size="lg" w="full" colorScheme="red">
                      {' '}
                      <FcCancel /> &nbsp; Atras
                    </Button>
                  </GridItem>
                </SimpleGrid>
              </VStack>
            </Flex>
          </Container>
        </>
      )}
    </Formik>
  );
}
