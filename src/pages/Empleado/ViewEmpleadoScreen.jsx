import React from 'react';
import {
  Container,
  Flex,
  GridItem,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useQueryEmpleadoById } from '../../hooks/useMutate';
import { useParams } from 'react-router-dom';
import { SpinnerStyled } from '../../styled/Spinner';
import { AlertStyled } from '../../styled/AlertStyled';
import { AlertInfo } from '../../styled/AlertInfo';

const ViewEmpleadoScreen = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useQueryEmpleadoById(id);

  let today = new Date(data?.fecha_nacimiento);

  if (isLoading) {
    return <SpinnerStyled />;
  }

  if (isError) {
    return <AlertStyled error={isError} />;
  }

  return (
    <>
      {data?.length === 0 ? (
        <AlertInfo stat="info" contenido="Uppps Usuario no existe" />
      ) : (
        <Container maxW="container.xl">
          <Text fontSize="2xl" pt={'35'} paddingBottom={'2'}>
            Detalles del Empleado
          </Text>
          <hr />
          <Flex
            h={{ base: 'auto', md: '100vh' }}
            py={[0, 5, 10]}
            direction={{ base: 'column-reverse', md: 'row' }}
          >
            <VStack
              w={'full'}
              h={'full'}
              p={2}
              spacing={8}
              alignItems="flex-start"
              autoCapitalize="off"
            >
              <SimpleGrid columns={3} columnGap={3} rowGap={6} w="full">
                <GridItem colSpan={2}>
                  <Text fontSize="lg">
                    <strong>Nombre y Apellido: </strong> {data?.nombre}{' '}
                    {data?.apellido}
                  </Text>
                </GridItem>
                <GridItem colSpan={1}>
                  <Text fontSize="lg">
                    <strong>Cedula: </strong> {data?.cedula}
                  </Text>
                </GridItem>
                <GridItem colSpan={3}>
                  <Text fontSize="lg">
                    <strong>Correo Electronico: </strong>{' '}
                    {data?.correo_electronico}
                  </Text>
                </GridItem>
                <GridItem colSpan={1}>
                  <Text fontSize="lg">
                    <strong>Sexo: </strong> {data?.sexo}
                  </Text>
                </GridItem>
                <GridItem colSpan={1}>
                  <Text fontSize="lg">
                    <strong>Celular: </strong> {data?.telefono}
                  </Text>
                </GridItem>
                <GridItem colSpan={1}>
                  <Text fontSize="lg">
                    <strong>Estado Civil: </strong> {data?.estado_civil}
                  </Text>
                </GridItem>
                <GridItem colSpan={3}>
                  <Text fontSize="lg">
                    <strong>Dirección: </strong> {data?.direccion}
                  </Text>
                </GridItem>
                <GridItem colSpan={2}>
                  <Text fontSize="lg">
                    <strong>Ciudad Nacimiento: </strong>{' '}
                    {data?.ciudad_nacimiento}
                  </Text>
                </GridItem>
                <GridItem colSpan={1}>
                  <Text fontSize="lg">
                    <strong>Fecha Nacimiento: </strong>{' '}
                    {today.toISOString().split('T')[0]}
                  </Text>
                </GridItem>
                <GridItem colSpan={2}>
                  <Text fontSize="lg">
                    <strong>Departamento Asignado: </strong>{' '}
                    {data?.departamento.nombre_departamento}
                  </Text>
                </GridItem>
                <GridItem colSpan={1}>
                  <Text fontSize="lg">
                    <strong>Cargo Asignado: </strong> {data?.cargo.nombre_cargo}
                  </Text>
                </GridItem>
              </SimpleGrid>
            </VStack>
          </Flex>
        </Container>
      )}
    </>
  );
};

export default ViewEmpleadoScreen;
