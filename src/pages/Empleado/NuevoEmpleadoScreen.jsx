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
  HStack,
  StackDivider,
  FormHelperText,
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
      <Container maxW="container.xl" pt={5}>
        <HStack spacing="auto">
          <Box>
            <FormControl>
              <FormLabel htmlFor="email">Nombre</FormLabel>
              <Input id="email" type="email" />
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel htmlFor="email">Apellido</FormLabel>
              <Input id="email" type="email" />
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
          </Box>
        </HStack>
        {/* <VStack
          divider={<StackDivider borderColor="gray.200" />}
          spacing={4}
          align="stretch"
        >
          <Box h="40px" bg="yellow.200">
            1
          </Box>
          <Box h="40px" bg="tomato">
            2
          </Box>
          <Box h="40px" bg="pink.100">
            3
          </Box>
        </VStack> */}
      </Container>
    </>
  );
};

export default NuevoEmpleadoScreen;
