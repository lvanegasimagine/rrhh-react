import { Button, FormControl, FormErrorMessage, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import React from 'react'

const LoginScreen = () => {
  return (
    <VStack
      as="form"
      mx="auto"
      w={{ base: "90%", md: 500 }}
      h="100vh"
      justifyContent="center"
      // onSubmit={formik.handleSubmit}
      autoComplete="off"
    >
      <Heading>Sign Up</Heading>
      <FormControl
        // isInvalid={formik.errors.username && formik.touched.username}
      >
        <FormLabel>User Name </FormLabel>
        <Input
          name="username"
          placeholder="Enter username"
          // {...formik.getFieldProps("username")} // Opcion 1 - llama a todas las props (handleChange, value, handleBlur, etc)
        />
        {/* <FormErrorMessage>{formik.errors.username}</FormErrorMessage> */}
      </FormControl>
      <FormControl
        // isInvalid={formik.errors.password && formik.touched.password}
      >
        <FormLabel>Password </FormLabel>
        <Input
          type="password"
          name="password"
          placeholder="Enter Password"
          // value={formik.values.password}
          // onChange={formik.handleChange}
          // onBlur={formik.handleBlur}
        />
        {/* <FormErrorMessage>{formik.errors.password}</FormErrorMessage> */}
      </FormControl>
      <Button type="submit" colorScheme="blue">
        Submit
      </Button>
    </VStack>
  )
}

export default LoginScreen