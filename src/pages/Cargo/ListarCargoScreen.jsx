import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Stack,
  IconButton,
  Button,
} from '@chakra-ui/react';
import { FaPlus, FaPen, FaTrash } from 'react-icons/fa';
import { Link as ReachLink } from 'react-router-dom';
import { useQueryCargo } from '../../hooks/useMutate';
import { AlertStyled } from '../../styled/AlertStyled';
import { SpinnerStyled } from '../../styled/Spinner';
import DepartamentoItemScreen from '../Departamento/DepartamentoItemScreen';
import CargoItemScreen from './CargoItemScreen';
// import DepartamentoItemScreen from './DepartamentoItemScreen';

const ListarCargoScreen = () => {
  const { data, isError, isLoading } = useQueryCargo();
  console.log(data);
  if (isLoading) {
    return (
      <>
        <Text fontSize="6xl">Cargo</Text>
        <SpinnerStyled />
      </>
    );
  }

  if (isError) {
    return <AlertStyled error={isError} />;
  }

  return (
    <>
      <Text fontSize="6xl">Cargo</Text>
      <Stack direction="row" spacing={4} pt="15" pb="15">
        <ReachLink to="/nuevo-cargo">
          <Button leftIcon={<FaPlus />} colorScheme="teal" variant="solid">
            Agregar Cargo
          </Button>
        </ReachLink>
      </Stack>
      <TableContainer p={'2.5'}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Cargo</Th>
              <Th>Departamento</Th>
              <Th>Descripcion</Th>
              <Th>Tools</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.map(cargo => (
              <CargoItemScreen key={cargo._id} {...cargo} />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ListarCargoScreen;
