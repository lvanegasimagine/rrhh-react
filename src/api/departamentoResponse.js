import axios from 'axios';

const API = `http://localhost:${process.env.REACT_PORT}`;

export const getDepartamentos = async () => {
  const { data } = await axios.get(`${API}/departamento`);
  return data;
};
