import { Container, Flex, Spinner } from "@chakra-ui/react";

export const SpinnerStyled = () =>{
    return (
        <Container>
          <Flex py="5" justifyContent="center">
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </Flex>
        </Container>
    )
}