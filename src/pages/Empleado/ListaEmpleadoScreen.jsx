import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Button,
  Stack,
  IconButton,
} from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';
import { Link as ReachLink } from 'react-router-dom';
import { useQueryEmpleado } from '../../hooks/useMutate';
import { AlertStyled } from '../../styled/AlertStyled';
import { SpinnerStyled } from '../../styled/Spinner';
import EmpleadoItemScreen from './EmpleadoItemScreen';

const ListaEmpleadoScreen = () => {

  const { data, isError, isLoading } = useQueryEmpleado();

  if (isLoading) {
    return (
      <>
        <Text fontSize="6xl">Empleado</Text>
        <SpinnerStyled />
      </>
    );
  }

  if (isError) {
    return <AlertStyled error={isError} />;
  }
  
  return (
    <>
      <Text fontSize="6xl">Empleado</Text>
      <Stack direction="row" spacing={4} pt="15" pb="15">
        <ReachLink to="/nuevo-empleado">
          <Button leftIcon={<FaPlus />} colorScheme="teal" variant="solid">
            Agregar Empleado
          </Button>
        </ReachLink>
      </Stack>
      <TableContainer p={'2.5'}>
        <Table variant="simple" maxW={'100%'}>
          <Thead>
            <Tr>
              <Th>Nombre y Apellidos</Th>
              <Th>Cargo</Th>
              <Th>Departamento</Th>
              <Th>Telefono</Th>
              <Th>Correo Electronico</Th>
              <Th>Tools</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((empleado) => (
              <EmpleadoItemScreen key={empleado._id} {...empleado} />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ListaEmpleadoScreen;
