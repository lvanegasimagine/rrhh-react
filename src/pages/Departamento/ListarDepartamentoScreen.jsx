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

const ListarDepartamentoScreen = () => {
  return (
    <>
      <Text fontSize="6xl">Departamento</Text>
      <TableContainer>
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

export default ListarDepartamentoScreen;
