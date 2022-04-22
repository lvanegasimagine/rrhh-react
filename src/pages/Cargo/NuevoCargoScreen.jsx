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
} from '@chakra-ui/react';
import React from 'react';
import { FaRegSave, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NuevoCargoScreen = () => {
  return (
    <>
      <Text fontSize="2xl" paddingTop={'35'} paddingBottom={'2'}>
        Nuevo departamento
      </Text>

      <hr />
      <Box paddingTop={'35'} w="100%" p={4}>
        <FormControl isRequired paddingTop={'10'}>
          <FormLabel htmlFor="departamento">Nombre del Cargo</FormLabel>
          <Input type="text" id="departamento" maxW={'70%'} />
        </FormControl>
        <FormControl isRequired paddingTop={'7'}>
          <FormLabel htmlFor="departamento">Departamento</FormLabel>
          <Select id="departamento" placeholder="Seleccione Departamento a asignar" maxW={'70%'}>
            <option>United Arab Emirates</option>
            <option>Nigeria</option>
          </Select>
        </FormControl>
        <FormControl isRequired paddingTop={'10'}>
          <FormLabel htmlFor="departamento">Telefono Corporativo</FormLabel>
          <Input type="text" id="departamento" maxW={'70%'} />
        </FormControl>
        <Stack direction="row" spacing={4} pt="25">
          <Button leftIcon={<FaRegSave />} colorScheme="blue" variant="solid">
            Guardar
          </Button>
          <Link to="/listar-cargo">
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

export default NuevoCargoScreen;
