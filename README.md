# ReactPro Recursos Humanos

Es una aplicacion para llevar el registro de empleados de una organizacion, el cual se tiene como meta ir expandiendo el sistema mediante modulos.

***

## Herramientas a utilizar:

#### **- Backend**

- Firebase
- Nodejs
- Express
- MongoDB

#### **- Frontend**

- React

***

# Entidades

## Usuario

- IdUsuario
- DisplayName
- Online
- PhotoUrl
- CreatedAt

## Empleado

- IdEmpleado
- IdDepartamento
- IdCargo
- Nombre
- Apellido
- Sexo
- Direccion
- FechaNacimiento
- Cedula
- LugarNacimiento
- Telefono
- EstadoCivil
- CorreoElectronico
- CreatedAt
- UpdatedAt

## Cargo

- IdCargo
- IdDepartamento
- NombreCargo
- Descripcion
- CreatedAt
- UpdatedAt

## Departamento

- IdDepartamento
- NombreDepartamento
- EmailCorporativo
- TelefonoCorporativo
- CreatedAt
- UpdatedAt

# Relaciones

- Un *Departamento* tiene asignado varios *Cargos*.
- Un *Cargo* tiene asignado un *Departamento*.
- Un *Empleado* tiene asignado un *Cargo* y pertenece a un *Departamento*

# Funciones

- Crear Usuario
- Editar Usuario
- Crear Cargo
- Editar Cargo
- Actualizar Cargo
- Eliminar Cargo
- Crear Departamento
- Editar Departamento
- Actualizar Departamento
- Eliminar Departamento
- Crear Empleado
- Editar Empleado
- Actualizar Empleado
- Eliminar Empleado

# Pantallas

- Login Usuario
- Dashboard y Estadisticas
- Listado Cargo
- Listado Departamento
- Listado Empleado
- Detalle de Empleado
- Crear/Editar Empleado
- Crear/Editar Cargo
- Crear/Editar Departamento

---
