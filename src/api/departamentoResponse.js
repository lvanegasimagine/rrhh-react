import axios from 'axios';

const API = 'http://localhost:4000/api/v1';

export const getDepartamentos = async () => {
  const { data } = await axios.get(`${API}/departamento`);
  return data;
};

export const getDepartamento = async ({ queryKey }) => {
  const [_key, { id }] = queryKey;
  const { data } = await axios.get(`${API}/departamento/${id}`);
  return data;
}

export const createDepartamento = async (departamento) => {
  const {data} = await axios.post(`${API}/departamento`, departamento);
  
  if (!data) {
    throw new Error(data);
  }
  return data;
}

export const updateDepartamento = async ({id, ...updateDeparmento}) => {
  const { data } = await axios.put(`${API}/departamento/${id}`, updateDeparmento);
  return data;
}

export const deleteDepartamento = async (id) => {
  const { data } = await axios.delete(`${API}/departamento/${id}`);
  console.log(data);
  return data;
}
