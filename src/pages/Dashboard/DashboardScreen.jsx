import { Box, SimpleGrid, Grid, GridItem, Text } from '@chakra-ui/react';
import { BsPerson } from 'react-icons/bs';
import { FiServer } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { useAuthContext } from '../../hooks/useAuthContext';
import StatsCard from '../../styled/StatsCard';

const DashboardScreen = () => {
  return (
    <>
      <Grid templateColumns="repeat(5, 1fr)" gap={4} m={35}>
        <GridItem colSpan={6} h="10">
        <Text>Para algo servira esto</Text>
        </GridItem>
      </Grid>
      <Box
        maxW="7xl"
        mx={'auto'}
        pt={5}
        px={{ base: 2, sm: 12, md: 17 }}
        mt={25}
      >
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard
            title={'Empleados'}
            stat={'5,000'}
            icon={<BsPerson size={'3em'} />}
          />
          <StatsCard
            title={'Cargos'}
            stat={'1,000'}
            icon={<FiServer size={'3em'} />}
          />
          <StatsCard
            title={'Departamentos'}
            stat={'7'}
            icon={<GoLocation size={'3em'} />}
          />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default DashboardScreen;
