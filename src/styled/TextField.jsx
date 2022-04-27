import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input
  } from "@chakra-ui/react";
  import { Field, useField } from "formik";
  
  const TextField = ({ label, requir, top, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <FormControl isInvalid={meta.error && meta.touched} isRequired={requir} paddingTop={top}>
        <FormLabel>{label}</FormLabel>
        <Field as={Input} {...field} {...props} />
        <FormErrorMessage>{meta.error}</FormErrorMessage>
      </FormControl>
    );
  };
  
  export default TextField;