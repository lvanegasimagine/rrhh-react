import { Container } from '@chakra-ui/react';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
import NotFoundScreen from '../pages/NotFound/NotFoundScreen';
import Navbar from '../shared/Nabvar';

const AppRoutes = () => {
  const { authIsReady, user } = useAuthContext();

  return (
    <>
      {authIsReady && (
        <>
          <Navbar />
            <Routes>
              <Route path="/" element={user ? <DashboardScreen /> : <LoginScreen/> } />
              <Route path="login" element={<LoginScreen />} />
              <Route path="nuevo-empleado" element={<NuevoEmpleadoScreen />} />
              <Route
                path="editar-empleado/:id"
                element={<EditarEmpleadoScreen />}
              />
              <Route path="listar-empleado" element={<ListaEmpleadoScreen />} />
              <Route
                path="nuevo-departamento"
                element={<NuevoDepartamentoScreen />}
              />
              <Route
                path="editar-departamento/:id"
                element={<EditarDepartamentoScreen />}
              />
              <Route
                path="listar-departamento"
                element={<ListarDepartamentoScreen />}
              />
              <Route path="nuevo-cargo" element={<NuevoCargoScreen />} />
              <Route path="editar-cargo/:id" element={<EditarCargoScreen />} />
              <Route path="listar-cargo" element={<ListarCargoScreen />} />
            </Routes>
        </>
      )}
      {/* <Navbar />
      <Container maxW="container.xl">
        <Routes>
          <Route path="/" element={<DashboardScreen />} />
          <Route path="login" element={<LoginScreen />} />
          <Route path="nuevo-empleado" element={<NuevoEmpleadoScreen />} />
          <Route path="editar-empleado/:id" element={<EditarEmpleadoScreen />} />
          <Route path="listar-empleado" element={<ListaEmpleadoScreen />} />
          <Route
            path="nuevo-departamento"
            element={<NuevoDepartamentoScreen />}
          />
          <Route
            path="editar-departamento/:id"
            element={<EditarDepartamentoScreen />}
          />
          <Route
            path="listar-departamento"
            element={<ListarDepartamentoScreen />}
          />
          <Route path="nuevo-cargo" element={<NuevoCargoScreen />} />
          <Route path="editar-cargo/:id" element={<EditarCargoScreen />} />
          <Route path="listar-cargo" element={<ListarCargoScreen />} />
        </Routes>
      </Container> */}
    </>
  );
};

export default AppRoutes;
