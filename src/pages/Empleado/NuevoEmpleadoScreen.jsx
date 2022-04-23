import {
  Container,
  VStack,
  Text,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Select,
  Textarea,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import React from 'react';
import { FaRegSave, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NuevoEmpleadoScreen = () => {
  return (
    <>
      <Text fontSize="2xl" paddingTop={'35'} paddingBottom={'2'}>
        Nuevo Empleado
      </Text>

      <hr />
      <Grid templateColumns="repeat(5, 1fr)" gap={4}>
          <GridItem colSpan={2} h="10" bg="tomato"></GridItem>
          <GridItem colStart={4} colEnd={6} h="10" bg="papayawhip"></GridItem>
        </Grid>
      <Box paddingTop={'35'} w="100%" p={4}>
       
        <FormControl isRequired paddingTop={'10'}>
          <FormLabel htmlFor="departamento">Nombre del Cargo</FormLabel>
          <Input type="text" id="departamento" maxW={'50%'} />
          <FormLabel htmlFor="departamento">Nombre del Cargo</FormLabel>
          <Input type="text" id="departamento" maxW={'50%'} />
        </FormControl>
        <FormControl isRequired paddingTop={'7'}>
          <FormLabel htmlFor="departamento">Departamento</FormLabel>
          <Select
            id="departamento"
            placeholder="Seleccione Departamento a asignar"
            maxW={'70%'}
          >
            <option>United Arab Emirates</option>
            <option>Nigeria</option>
          </Select>
        </FormControl>
        <FormControl isRequired paddingTop={'7'}>
          <FormLabel htmlFor="departamento">Descripcion</FormLabel>

          <Textarea maxW={'70%'} />
        </FormControl>
        <Stack direction="row" spacing={4} pt="25">
          <Button leftIcon={<FaRegSave />} colorScheme="blue" variant="solid">
            Guardar
          </Button>
          <Link to="/listar-empleado">
            <Button
              leftIcon={<FaArrowLeft />}
              colorScheme="orange"
              variant="outline"
            >
              Atras
            </Button>
          </Link>
        </Stack>
      </Box>
    </>
  );
};

export default NuevoEmpleadoScreen;
