import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Textarea,
  } from "@chakra-ui/react";
  import { Field } from "formik";

  const TextAreaField = (props) => {
    const { label, name, top, requir, ...rest } = props
    return (
      <Field name={name}>
      {({ field, form }) => (
        <FormControl isInvalid={form.errors[name] && form.touched[name]} isRequired={requir} pt={10}>
          <FormLabel htmlFor={name}>{label}</FormLabel>
          <Textarea id={name} {...rest} {...field} />
          <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
    );
  };
  
  export default TextAreaField;