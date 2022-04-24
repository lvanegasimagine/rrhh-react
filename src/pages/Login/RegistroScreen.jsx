import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignup } from '../../hooks/useSignup';
import { BsFillPersonCheckFill } from 'react-icons/bs';
import TextField from '../../styled/TextField';
import { Formik } from 'formik';
import * as Yup from 'yup';

const RegistroScreen = () => {
  let navigate = useNavigate();
  const { signup, isPending, error } = useSignup();

  return (
    <Formik
      initialValues={{ displayName: '', email: '', password: '' }}
      validationSchema={Yup.object({
        displayName: Yup.string()
          .min(8, 'Nombre debe tener al menos 8 caracteres'),
        email: Yup.string()
          .required('Correo Obligatorio')
          .email('Correo Invalido'),
        password: Yup.string()
          .required('Contraseña Obligatoria')
          .min(6, 'Contraseña debe tener al menos 6 caracteres'),
      })}
      onSubmit={(values, actions) => {
        const { email, password, displayName } = values;
        signup(email, password, displayName);
        navigate('/');
        actions.resetForm();
      }}
    >
      {formik => (
        <VStack
          as="form"
          mx="auto"
          w={{ base: '90%', md: 500 }}
          h="90vh"
          justifyContent="center"
          onSubmit={formik.handleSubmit}
          autoComplete="off"
        >
          <Heading pb={10}>Login</Heading>
          <TextField
            name="displayName"
            label="Nombre de Usuario"
            placeholder="Digita tu nombre de usuario"
          />
          <TextField
            requir={true}
            name="email"
            type="password"
            label="Correo Electronico"
            placeholder="Digita Tu Correo Electronico"
          />
          <TextField
            requir={true}
            name="password"
            type="password"
            label="Contraseña"
            placeholder="Digita tu Contraseña"
          />

          {!isPending && (
            <Button type="submit" colorScheme="blue">
              <BsFillPersonCheckFill /> &nbsp; Login
            </Button>
          )}
          {isPending && (
            <Button type="submit" colorScheme="blue">
              Loading...
            </Button>
          )}
          {error && <Text className="error">{error}</Text>}
        </VStack>
      )}
    </Formik>
  );
};

export default RegistroScreen;
