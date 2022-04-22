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

const ListarCargoScreen = () => {
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
              <Th>ID</Th>
              <Th>Cargo</Th>
              <Th>Departamento</Th>
              <Th>Descripcion</Th>
              <Th>Tools</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr
              _hover={{
                textDecoration: 'none',
                bg: 'gray.200',
                cursor: 'pointer',
              }}
            >
              <Td>1</Td>
              <Td>Título 1</Td>
              <Td>Título 1</Td>
              <Td>Título 1</Td>
              <Td>Título 1</Td>
              <Td>
                <Stack direction="row" spacing={2}>
                  <IconButton
                    colorScheme="blue"
                    aria-label="Search database"
                    icon={<FaPen />}
                  />
                  <IconButton
                    colorScheme="red"
                    aria-label="Search database"
                    icon={<FaTrash />}
                  />
                </Stack>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ListarCargoScreen;
