import axios from 'axios';

const API = 'http://localhost:4000/api/v1';

export const getDepartamentos = async () => {
  const { data } = await axios.get(`${API}/departamento`);
  return data;
};

export const createDepartamento = async (departamento) => {
  const { data } = await axios.post(`${API}/departamento`, departamento);
  return data;
}
