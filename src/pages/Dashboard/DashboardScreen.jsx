import { Box, SimpleGrid, Grid, GridItem, Text } from '@chakra-ui/react';
import { BsPerson } from 'react-icons/bs';
import { FiServer } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useQueryCountCargo, useQueryCountDepartamento, useQueryCountEmpleado } from '../../hooks/useMutate';
import { AlertStyled } from '../../styled/AlertStyled';
import { SpinnerStyled } from '../../styled/Spinner';
import StatsCard from '../../styled/StatsCard';

const DashboardScreen = () => {
  const { user } = useAuthContext();

  const {data: departamento, isLoading: departamentoLoading, isError: isErrorDepartamento} = useQueryCountDepartamento();
  const {data: cargo, isLoading: cargoLoading, isError: isErrorCargo} = useQueryCountCargo();
  const {data: empleado, isLoading: empleadoLoading, isError: isErrorEmpleado} = useQueryCountEmpleado();


  if(departamentoLoading || cargoLoading || empleadoLoading) return <SpinnerStyled/>;

  if(isErrorDepartamento || isErrorCargo || isErrorEmpleado) return <AlertStyled error="Hubo un error al cargar los datos"/>

  return (
    <>
      <Grid templateColumns="repeat(5, 1fr)" gap={4} m={35}>
        <GridItem colSpan={6} h="10">
          <Text fontSize='2xl'>
            Bienvenido <strong>{user.displayName}</strong>{' '}
          </Text>
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
            stat={empleado}
            icon={<BsPerson size={'3em'} />}
          />
          <StatsCard
            title={'Cargos'}
            stat={ cargo }
            icon={<FiServer size={'3em'} />}
          />
          <StatsCard
            title={'Departamentos'}
            stat={departamento}
            icon={<GoLocation size={'3em'} />}
          />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default DashboardScreen;
