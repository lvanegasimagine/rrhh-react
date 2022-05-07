import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { Field } from 'formik';

const TextField = (props) => {
  const { label, name, altura, requir, ext, ...rest } = props
  return (
    <Field name={name}>
      {({ field, form }) => (
        <FormControl isInvalid={form.errors[name] && form.touched[name]} isRequired={requir} pt={10}>
          <FormLabel htmlFor={name}>{label}</FormLabel>
          <Input id={name} {...rest} {...field} maxLength={ext} />
          <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  )
}

export default TextField;

// const TextField = ({ label, requir, top, ...props }) => {
//   const [field, meta] = useField(props);
//   return (
//     <FormControl
//       isInvalid={meta.error && meta.touched}
//       isRequired={requir}
//       paddingTop={10}
//     >
//       <FormLabel>{label}</FormLabel>
//       <Field as={Input} {...field} {...props} />
//       <FormErrorMessage>{meta.error}</FormErrorMessage>
//     </FormControl>
//   );
// };
