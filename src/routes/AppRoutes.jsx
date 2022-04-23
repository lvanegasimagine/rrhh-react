import { Container } from '@chakra-ui/react';
import React from 'react';
import { Routes, Route, useNavigate, BrowserRouter } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import EditarCargoScreen from '../pages/Cargo/EditarCargoScreen';
import ListarCargoScreen from '../pages/Cargo/ListarCargoScreen';
import NuevoCargoScreen from '../pages/Cargo/NuevoCargoScreen';
import DashboardScreen from '../pages/Dashboard/DashboardScreen';
import EditarDepartamentoScreen from '../pages/Departamento/EditarDepartamentoScreen';
import ListarDepartamentoScreen from '../pages/Departamento/ListarDepartamentoScreen';
import NuevoDepartamentoScreen from '../pages/Departamento/NuevoDepartamentoScreen';
import EditarEmpleadoScreen from '../pages/Empleado/EditarEmpleadoScreen';
import ListaEmpleadoScreen from '../pages/Empleado/ListaEmpleadoScreen';
import NuevoEmpleadoScreen from '../pages/Empleado/NuevoEmpleadoScreen';
import LoginScreen from '../pages/Login/LoginScreen';
import RegistroScreen from '../pages/Login/RegistroScreen';
import NotFoundScreen from '../pages/NotFound/NotFoundScreen';
import Navbar from '../shared/Nabvar';

const AppRoutes = () => {
  const { authIsReady, user } = useAuthContext();
  let navigate = useNavigate();
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
                element={user ? <EditarEmpleadoScreen /> : <LoginScreen />}
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
            </Routes>
          </Container>
        </>
      )}
    </>
  );
};

export default AppRoutes;
