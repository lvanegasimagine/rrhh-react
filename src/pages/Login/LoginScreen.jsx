import { Button, Text, Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../../hooks/useLogin';
import { BsBoxArrowInRight } from 'react-icons/bs';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextField from '../../styled/TextField';

const LoginScreen = () => {
  let navigate = useNavigate();
  
  const { login, error, isPending } = useLogin();

  console.log('aca',error);

  return (
    <Formik
      initialValues={{ email: 'dinosaurio@dinosaurio.com', password: '123456' }}
      validationSchema={Yup.object({
        email: Yup.string()
          .required('Correo Obligatorio')
          .email('Correo Invalido'),
        password: Yup.string()
          .required('Contraseña Obligatoria')
          .min(6, 'Contraseña debe tener al menos 6 caracteres'),
      })}
      onSubmit={(values, actions) => {
        const { email, password } = values;
        login(email, password);
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
            requir={true}
            name="email"
            label="Correo Electronico"
            placeholder="Digita tu Correo Electronico"
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
              <BsBoxArrowInRight /> &nbsp; Login
            </Button>
          )}
          {isPending && (
            <Button type="submit" colorScheme="blue">
              Loading...
            </Button>
          )}
        </VStack>
      )}
    </Formik>
  );
};

export default LoginScreen;
