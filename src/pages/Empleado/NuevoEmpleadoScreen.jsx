import {
  Container,
  Flex,
  VStack,
  Heading,
  Divider,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Button,
} from '@chakra-ui/react';
import { FcCheckmark, FcCancel } from 'react-icons/fc';

export default function NuevoEmpleadoScreen() {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex
        h={{ base: 'auto', md: '100vh' }}
        py={[0, 5, 10]}
        direction={{ base: 'column-reverse', md: 'row' }}
      >
        <VStack
          w={'full'}
          h={'full'}
          p={2}
          spacing={8}
          alignItems="flex-start"
          // bg="blue.300"
        >
          <VStack spacing={3} alignItems="flex-start">
            <Heading size="lg">Datos Personales</Heading>
            <Divider w="full" orientation="horizontal" />
          </VStack>
          <SimpleGrid columns={3} columnGap={3} rowGap={6} w="full">
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Nombre</FormLabel>
                <Input placeholder="Digita tu nombre" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Apellido</FormLabel>
                <Input placeholder="Digita tu apellido" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Cedula</FormLabel>
                <Input placeholder="Digita tu cedula" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={3}>
              <FormControl>
                <FormLabel>Direccion</FormLabel>
                <Textarea placeholder="Digita tu direccion" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Fecha Nacimiento</FormLabel>
                <Input type="date" placeholder="Selecciona fecha" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Lugar Nacimiento</FormLabel>
                <Input placeholder="Digita lugar de Nacimiento" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Sexo</FormLabel>
                <Select placeholder="Select Opcion">
                  <option value="option1">Masculino</option>
                  <option value="option2">Femenino </option>
                  <option value="option3">No Binario</option>
                </Select>
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Estado Civil</FormLabel>
                <Select>
                  <option value="option1">Casado</option>
                  <option value="option2">Soltero </option>
                  <option value="option3">Viudo</option>
                </Select>
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Celular</FormLabel>
                <Input placeholder="Digita Numero Celular" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Correo Electronico</FormLabel>
                <Input type="email" placeholder="Digita correo personal" />
              </FormControl>
            </GridItem>
          </SimpleGrid>
          <VStack spacing={3} alignItems="flex-start">
            <Heading size="lg">Asignaciones</Heading>
            <Divider w="full" orientation="horizontal" />
          </VStack>
          <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Cargo a Asignar</FormLabel>
                <Select>
                  <option value="option1">Jefe de Cobro</option>
                  <option value="option2">Vividor</option>
                  <option value="option3">El Amigo</option>
                </Select>
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Departamento Laboral</FormLabel>
                <Select>
                  <option value="option1">Plan Playa Verde</option>
                  <option value="option2">Area Tecnica </option>
                  <option value="option3">Arquitectura</option>
                </Select>
              </FormControl>
            </GridItem>
            <GridItem colSpan={1} pt="2">
              <Button size="lg" w="full" colorScheme="facebook">
                {' '}
                <FcCheckmark /> &nbsp; Guardar
              </Button>
            </GridItem>
            <GridItem colSpan={1} pt="2">
              <Button size="lg" w="full" colorScheme="red">
                {' '}
                <FcCancel /> &nbsp; Cancelar
              </Button>
            </GridItem>
          </SimpleGrid>
        </VStack>
        
      </Flex>
    </Container>
  );
}
