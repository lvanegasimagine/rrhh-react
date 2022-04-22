import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";

const NuevoEmpleadoScreen = () => {
  return (
    <div>
      <FormControl>
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input id="email" type="email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
    </div>
  );
};

export default NuevoEmpleadoScreen;
