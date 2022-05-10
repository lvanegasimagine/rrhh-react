import axios from 'axios';

const API = 'http://localhost:4000/api/v1';

export const getEmpleados = async _ => {
    try {
        const { data } = await axios.get(`${API}/empleado`);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const getEmpleado = async ({ queryKey }) => {
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

