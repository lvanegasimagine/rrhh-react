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
import { useLogin } from '../../hooks/useLogin';
import { BsBoxArrowInRight } from 'react-icons/bs';
import { useState } from 'react';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login, error: errordelogueo, isPending } = useLogin();

  const handleSubmit = e => {
    e.preventDefault();
    if (email.trim() === '' || password.trim() === '') {
      return alert('Por favor, rellene todos los campos');
    } else {
      login(email, password);
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
        {errordelogueo && (
          <Alert status="error" color={'red'}>
            <AlertIcon />
            {errordelogueo}
          </Alert>
        )}
        <Heading pb={10}>Login</Heading>
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
            <BsBoxArrowInRight /> &nbsp; Login
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

export default LoginScreen;
