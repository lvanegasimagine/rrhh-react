import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Container,
  Grid,
  GridItem,
  Button,
  Stack,
  IconButton,
} from '@chakra-ui/react';
import { FaPlus, FaPen, FaTrash } from 'react-icons/fa';
import ButtonModeDark from './ButtonModeDark';

export default function Prueba() {
  return (
    <Container maxW="container.xl">
      <ButtonModeDark />
      <Text fontSize="6xl">Tickets</Text>
      <Stack direction="row" spacing={4} p="20">
        <Button leftIcon={<FaPlus />} colorScheme="teal" variant="solid">
          Agregar Empleado
        </Button>
      </Stack>
      <TableContainer p={'2.5'}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Título</Th>
              <Th>Tools</Th>
            </Tr>
          </Thead>

          <Tbody>
            <Tr>
              <Td>1</Td>
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
    </Container>
  );
}
