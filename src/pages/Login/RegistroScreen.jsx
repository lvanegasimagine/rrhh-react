import {
  Button,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import React from 'react';
import { useSignup } from '../../hooks/useSignup';
import { BsFillPersonCheckFill } from 'react-icons/bs';
import { useState } from 'react';

const RegistroScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');

  const { signup, isPending, error } = useSignup();

  const handleSubmit = e => {
    e.preventDefault();
    if (
      displayName.trim() === '' ||
      email.trim() === '' ||
      password.trim() === ''
    ) {
      return alert('Por favor, rellene todos los campos');
    } else {
      signup(email, password, displayName);
    }
  };

  return (
    <>
      <VStack
        as="form"
        mx="auto"
        w={{ base: '90%', md: 500 }}
        h="90vh"
        justifyContent="center"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        {error && (
          <Alert status="error" color={'red'}>
            <AlertIcon />
            {error}
          </Alert>
        )}
        <Heading pb={10}>Registro</Heading>
        <FormControl pt={10}>
          <FormLabel htmlFor="nombre">Nombre Usuario: </FormLabel>
          <Input
            type="text"
            value={displayName}
            onChange={e => setDisplayName(e.target.value)}
          />
        </FormControl>
        <FormControl pt={10}>
          <FormLabel htmlFor="email">Correo Electronico: </FormLabel>
          <Input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl pt={10} pb={5}>
          <FormLabel htmlFor="password">Contraseña: </FormLabel>
          <Input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </FormControl>

        {!isPending && (
          <Button type="submit" size={'lg'} colorScheme="blue">
            <BsFillPersonCheckFill /> &nbsp; Registro
          </Button>
        )}
        {isPending && (
          <Button type="submit" size={'lg'} colorScheme="blue">
            Loading...
          </Button>
        )}
      </VStack>
    </>
  );
};

export default RegistroScreen;
