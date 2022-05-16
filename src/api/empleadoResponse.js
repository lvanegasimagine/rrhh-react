import axios from 'axios';

const API = 'https://rrhh-react.herokuapp.com/api/v1';

export const getEmpleados = async _ => {
    try {
        const { data } = await axios.get(`${API}/empleado`);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const getEmpleado = async ({ queryKey }) => {
    // eslint-disable-next-line no-unused-vars
    const [_key, { id }] = queryKey;

    try {
        const {data} = await axios.get(`${API}/empleado/${id}`);
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const createEmpleado = async (empleado) => {
    try {
        const {data} = await axios.post(`${API}/empleado`, empleado);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const updateEmpleado = async ({id, ...updateEmpleado}) => {
    try {
        const { data } = await axios.put(`${API}/empleado/${id}`, updateEmpleado);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const deleteEmpleado = async (id) => {
    try {
        const { data } = await axios.delete(`${API}/empleado/${id}`);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const getEmpleadoCount = async () => {
    try {
      const { data } = await axios.get(`${API}/empleado/get/count`);
      return data;
    } catch (error) {
      throw new Error(error.response.data);
    }
  };

