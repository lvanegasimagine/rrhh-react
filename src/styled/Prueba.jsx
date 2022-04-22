import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

export default function Prueba() {
  return (
    <>
      <Text fontSize="6xl">Tickets</Text>

      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Título</Th>
            </Tr>
          </Thead>

          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>Título 1</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
