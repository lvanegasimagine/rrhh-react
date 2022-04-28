import { Container } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { ListaEmpleadoScreen, NuevoEmpleadoScreen, EditarEmpleadoScreen  } from '../pages/Empleado';
import { ListarDepartamentoScreen, NuevoDepartamentoScreen, EditarDepartamentoScreen } from '../pages/Departamento';
import { ListarCargoScreen, NuevoCargoScreen, EditarCargoScreen } from '../pages/Cargo';
import { DashboardScreen } from '../pages/Dashboard';
import { NotFoundScreen } from '../pages/NotFound';
import { LoginScreen, RegistroScreen } from '../pages/Login';
import { Navbar } from '../shared';

const AppRoutes = () => {
  const { authIsReady, user } = useAuthContext();
  return (
    <>
      {authIsReady && (
        <>
          <Navbar />
          <Container maxW="container.xl">
            <Routes>
              <Route
                path="login"
                element={user ? <DashboardScreen /> : <LoginScreen />}
              />
              <Route path="signup" element={<RegistroScreen />} />
              <Route
                path="/"
                element={user ? <DashboardScreen /> : <LoginScreen />}
              />
              <Route
                path="nuevo-empleado"
                element={user ? <NuevoEmpleadoScreen /> : <LoginScreen />}
              />
              <Route
                path="editar-empleado/:id"
                element={user ? <EditarEmpleadoScreen /> : <LoginScreen />}
              />
              <Route
                path="listar-empleado"
                element={user ? <ListaEmpleadoScreen /> : <LoginScreen />}
              />
              <Route
                path="nuevo-departamento"
                element={user ? <NuevoDepartamentoScreen /> : <LoginScreen />}
              />
              <Route
                path="editar-departamento/:id"
                element={user ? <EditarDepartamentoScreen /> : <LoginScreen />}
              />
              <Route
                path="listar-departamento"
                element={user ? <ListarDepartamentoScreen /> : <LoginScreen />}
              />
              <Route
                path="nuevo-cargo"
                element={user ? <NuevoCargoScreen /> : <LoginScreen />}
              />
              <Route
                path="editar-cargo/:id"
                element={user ? <EditarCargoScreen /> : <LoginScreen />}
              />
              <Route
                path="listar-cargo"
                element={user ? <ListarCargoScreen /> : <LoginScreen />}
              />
              <Route
                path="*"
                element={user ? <NotFoundScreen /> : <LoginScreen />}
              />
            </Routes>
          </Container>
        </>
      )}
    </>
  );
};

export default AppRoutes;
