import { Container } from '@chakra-ui/react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import {
  ListarEmpleadoScreen,
  NuevoEmpleadoScreen,
  EditarEmpleadoScreen,
  ViewEmpleadoScreen
} from '../pages/Empleado';
import {
  ListarDepartamentoScreen,
  NuevoDepartamentoScreen,
  EditarDepartamentoScreen,
} from '../pages/Departamento';
import {
  ListarCargoScreen,
  NuevoCargoScreen,
  EditarCargoScreen,
} from '../pages/Cargo';
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
                element={user ? <Navigate to="/" replace /> : <LoginScreen />}
              />
              <Route
                path="signup"
                element={
                  user ? <Navigate to="/" replace /> : <RegistroScreen />
                }
              />
              <Route
                path="/"
                element={
                  !user ? <Navigate to="/login" replace /> : <DashboardScreen />
                }
              />
              <Route
                path="nuevo-empleado"
                element={
                  user ? (
                    <NuevoEmpleadoScreen />
                  ) : (
                    <Navigate to="/login" replace />
                  )
                }
              />
              <Route
                path="editar-empleado/:id"
                element={
                  user ? (
                    <EditarEmpleadoScreen />
                  ) : (
                    <Navigate to="/login" replace />
                  )
                }
              />
              <Route
                path="listar-empleado"
                element={
                  user ? (
                    <ListarEmpleadoScreen />
                  ) : (
                    <Navigate to="/login" replace />
                  )
                }
              />
              <Route
                path="detalle-empleado/:id"
                element={
                  user ? (
                    <ViewEmpleadoScreen />
                  ) : (
                    <Navigate to="/login" replace />
                  )
                }
              />
              <Route
                path="nuevo-departamento"
                element={
                  user ? (
                    <NuevoDepartamentoScreen />
                  ) : (
                    <Navigate to="/login" replace />
                  )
                }
              />
              <Route
                path="editar-departamento/:id"
                element={
                  user ? (
                    <EditarDepartamentoScreen />
                  ) : (
                    <Navigate to="/login" replace />
                  )
                }
              />
              <Route
                path="listar-departamento"
                element={
                  user ? (
                    <ListarDepartamentoScreen />
                  ) : (
                    <Navigate to="/login" replace />
                  )
                }
              />
              <Route
                path="nuevo-cargo"
                element={
                  user ? <NuevoCargoScreen /> : <Navigate to="/login" replace />
                }
              />
              <Route
                path="editar-cargo/:id"
                element={
                  user ? (
                    <EditarCargoScreen />
                  ) : (
                    <Navigate to="/login" replace />
                  )
                }
              />
              <Route
                path="listar-cargo"
                element={
                  user ? (
                    <ListarCargoScreen />
                  ) : (
                    <Navigate to="/login" replace />
                  )
                }
              />
              <Route
                path="*"
                element={
                  user ? <NotFoundScreen /> : <Navigate to="/login" replace />
                }
              />
            </Routes>
          </Container>
        </>
      )}
    </>
  );
};

export default AppRoutes;
