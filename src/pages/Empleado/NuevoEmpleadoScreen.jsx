import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

const NuevoEmpleadoScreen = () => {
  const [input, setInput] = useState('')

  const handleInputChange = (e) => setInput(e.target.value)

  const isError = input === ''
  return (
    <div>
      <FormControl isRequired>
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input id="email" type="email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
      
    </div>
  );
};

export default NuevoEmpleadoScreen;
