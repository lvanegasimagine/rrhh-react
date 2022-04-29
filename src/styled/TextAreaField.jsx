import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Textarea
  } from "@chakra-ui/react";
  import { Field, useField } from "formik";

  const TextAreaField = ({ label, requir, top, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <FormControl isInvalid={meta.error && meta.touched} isRequired={requir} paddingTop={top}>
        <FormLabel>{label}</FormLabel>
        <Textarea as={Textarea} {...field} {...props} />
        <FormErrorMessage>{meta.error}</FormErrorMessage>
      </FormControl>
    );
  };
  
  export default TextAreaField;