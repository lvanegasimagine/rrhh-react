import {
  Button,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

import { FaPlus } from 'react-icons/fa';
import { Link as ReachLink } from 'react-router-dom';
import { useQueryDepartamento } from '../../hooks/useMutateDepartamento';
import { AlertStyled } from '../../styled/AlertStyled';
import { SpinnerStyled } from '../../styled/Spinner';
import DepartamentoItemScreen from './DepartamentoItemScreen';

const ListarDepartamentoScreen = () => {
  const { data, isError, isLoading } = useQueryDepartamento();

  if (isLoading) {
    return (
      <>
        <Text fontSize="6xl">Departamento</Text>
        <SpinnerStyled/>
      </>
    );
  }

  if (isError) {
    return <AlertStyled error={isError}/>;
  }
  return (
    <>
      <Text fontSize="6xl">Departamento</Text>
      <Stack direction="row" spacing={4} pt="15" pb="15">
        <ReachLink to="/nuevo-departamento">
          <Button leftIcon={<FaPlus />} colorScheme="teal" variant="solid">
            Agregar Departamento
          </Button>
        </ReachLink>
      </Stack>
      <TableContainer p={'2.5'}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Nombre</Th>
              <Th>Correo Electronico</Th>
              <Th>Telefono de Area</Th>
              <Th>Tools</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.map(departamento => (
              <DepartamentoItemScreen
                key={departamento._id}
                {...departamento}
              />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ListarDepartamentoScreen;
