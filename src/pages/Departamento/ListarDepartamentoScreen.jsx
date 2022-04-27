import {
  Button,
  IconButton,
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
import { FaPlus, FaPen, FaTrash } from 'react-icons/fa';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Link as ReachLink } from 'react-router-dom';
import {
  deleteDepartamento,
  getDepartamentos,
} from '../../api/departamentoResponse';

const ListarDepartamentoScreen = () => {
  // const queryClient = useQueryClient();
  const { data, error, isLoading } = useQuery(
    ['departamento'],
    getDepartamentos,
    {
      retry: 2,
      retryDelay: 1000,
    }
  );

  // const { mutate } = useMutation(deleteDepartamento, {
  //   onsuccess: (data) => {
  //     // queryClient.setQueryData(['departamento'], prevDepar => prevDepar.concat(data))
  //     // queryClient.invalidateQueries(['departamento']);
  //   },
  // });

  const eliminarDepartamento = id => {
    console.log(id);
    // mutate(id);
  };

  console.log(data);
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
              <Th>ID</Th>
              <Th>Nombre</Th>
              <Th>Correo Electronico</Th>
              <Th>Telefono de Area</Th>
              <Th>Tools</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((departamento, index) => (
              <Tr
                key={departamento._id}
                _hover={{
                  textDecoration: 'none',
                  bg: 'gray.200',
                  cursor: 'pointer',
                }}
              >
                <>
                  <Td>{index + 1}</Td>
                  <Td>{departamento.nombre_departamento}</Td>
                  <Td> {departamento.email_corporativo}</Td>
                  <Td> {departamento.telefono_corporativo}</Td>
                  <Td>
                    <Stack direction="row" spacing={2}>
                      <IconButton
                        colorScheme="blue"
                        aria-label="Search database"
                        icon={<FaPen />}
                      />
                      <IconButton
                        type="button"
                        colorScheme="red"
                        aria-label="Search database"
                        icon={<FaTrash />}
                        onClick={() => eliminarDepartamento(departamento._id)}
                      />
                    </Stack>
                  </Td>
                </>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ListarDepartamentoScreen;
