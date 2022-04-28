import {
  Button,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';
import { useQuery } from 'react-query';
import { Link as ReachLink } from 'react-router-dom';
import { getDepartamentos } from '../../api/departamentoResponse';
import DepartamentoItemScreen from './DepartamentoItemScreen';

const ListarDepartamentoScreen = () => {
  const { data, error, isLoading } = useQuery(
    ['departamento'],
    getDepartamentos
    // {
    //   retry: 2,
    //   retryDelay: 1000,
    // }
  );

  if(error){
    return <Text>Error</Text>
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
