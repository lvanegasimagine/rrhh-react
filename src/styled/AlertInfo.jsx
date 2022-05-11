import { Alert, AlertIcon, AlertTitle } from '@chakra-ui/react';

export const AlertInfo = ({ stat, contenido }) => {
  return (
    <Alert
      status={stat}
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="130px"
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        {contenido}
      </AlertTitle>
    </Alert>
  );
};
