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
import { useLogin } from '../../hooks/useLogin';
import { BsBoxArrowInRight } from "react-icons/bs";

const LoginScreen = () => {
  let navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, isPending} = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    navigate("/");
  }

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
      <Heading pb={10}>Login</Heading>
      <FormControl>
        <FormLabel>Email </FormLabel>
        <Input value={email} onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Enter email" />
      </FormControl>
      <FormControl>
        <FormLabel>Password </FormLabel>
        <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="Enter Password" />
      </FormControl>
      {!isPending && <Button type="submit" colorScheme="blue">
        <BsBoxArrowInRight/> &nbsp; Login
      </Button> }
      {isPending && <Button type="submit" colorScheme="blue">
        Loading...
      </Button>}
      {error && <p className="error">{error}</p>}
    </VStack>
  );
};

export default LoginScreen;
