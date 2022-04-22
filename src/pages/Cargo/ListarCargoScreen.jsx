import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

const ListarCargoScreen = () => {
  return (
    <>
      <Text fontSize="6xl">Cargo</Text>
      <TableContainer>
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
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ListarCargoScreen;
