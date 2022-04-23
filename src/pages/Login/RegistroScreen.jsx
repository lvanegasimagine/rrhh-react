import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignup } from '../../hooks/useSignup';
import { BsFillPersonCheckFill } from "react-icons/bs";

const RegistroScreen = () => {
  let navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');

  const { signup, isPending, error } = useSignup();

  const handleSubmit = e => {
    e.preventDefault();
    signup(email, password, displayName);
    navigate('/');
  };
  return (
    <VStack
      as="form"
      mx="auto"
      w={{ base: '90%', md: 500 }}
      h="90vh"
      justifyContent="center"
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Heading pb={10}>Registro Usuario</Heading>
      <FormControl>
        <FormLabel>Nombre Usuario </FormLabel>
        <Input
          value={displayName}
          onChange={e => setDisplayName(e.target.value)}
          type="text"
          name="displayName"
          placeholder="Enter Username"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Email </FormLabel>
        <Input
          value={email}
          onChange={e => setEmail(e.target.value)}
          name="email"
          placeholder="Enter email"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Password </FormLabel>
        <Input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          name="password"
          placeholder="Enter Password"
        />
      </FormControl>

      {!isPending && (
        <Button type="submit" colorScheme="blue">
          <BsFillPersonCheckFill/>  &nbsp; Registrar
        </Button>
      )}
      {isPending && (
        <Button type="submit" colorScheme="blue">
          Loading...
        </Button>
      )}
      {error && <p className="error">{error}</p>}
    </VStack>
  );
};

export default RegistroScreen;
