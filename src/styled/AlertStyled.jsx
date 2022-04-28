import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Container,
  Flex
} from '@chakra-ui/react';

export const AlertStyled = ({error}) => {
  return (
    <Container>
    <Flex py="5" justifyContent="center" >
    <Alert status="error">
      <AlertIcon />
      <AlertTitle>Error!!!!</AlertTitle>
      <AlertDescription>
        {error} Servidor Caido
      </AlertDescription>
    </Alert>
    </Flex>
    </Container>
  );
};
