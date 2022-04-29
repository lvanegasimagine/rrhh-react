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
};

export const createDepartamento = async departamento => {
  try {
    const { data } = await axios.post(`${API}/departamento`, departamento);
    return data;
  } catch (error) {
    // return throw new Error(error);
  }
};

export const updateDepartamento = async ({ id, ...updateDeparmento }) => {
  const { data } = await axios.put(
    `${API}/departamento/${id}`,
    updateDeparmento
  );
  return data;
};

export const deleteDepartamento = async id => {
  await axios.delete(`${API}/departamento/${id}`);
  return true;
};
