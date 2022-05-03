import React from 'react';
import {
  GridItem,
  Heading,
  SimpleGrid,
  VStack,
  Container,
  Flex,
  Button,
  Image,
  Text,
} from '@chakra-ui/react';
import { FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import logo from './../../assets/img/Scarecrow.png';

const NotFoundScreen = () => {
  const navigate = useNavigate();

  return (
    <Container maxW="container.2xl">
      <Flex
        h={{ base: 'auto', md: '100vh' }}
        py={[0, 5, 10]}
        direction={{ base: 'column-reverse', md: 'row' }}
      >
        <VStack w={'full'} h={'full'} p={2} spacing={8} alignItems="flex-start">
          <VStack spacing={3} alignItems="flex-start" mr={20}>
            <Heading size="3xl" color="tomato">
              Ooops! Lo sentimos,
            </Heading>
            <br />
            <Heading size="xl">Pagina no Encontrada </Heading>
            <Text fontSize={'3xl'} color="blue.500" pt={20} pb={10}>
              La Página que está buscando podría estar eliminada <br /> o no
              estar disponible temporalmente.
            </Text>

            <Button
              size="lg"
              height="48px"
              width="200px"
              leftIcon={<FaHome />}
              colorScheme={'facebook'}
              onClick={() => navigate('/')}
            >
              INICIO
            </Button>
          </VStack>
        </VStack>
        <VStack w={'full'} h={'full'} p={2} spacing={8} alignItems="flex-start">
          <SimpleGrid columns={4} columnGap={3} rowGap={6} w="full">
            <GridItem colSpan={4}>
              <Image src={logo} alt="Dan Abramov" />
            </GridItem>
          </SimpleGrid>
        </VStack>
      </Flex>
    </Container>
  );
};

export default NotFoundScreen;
