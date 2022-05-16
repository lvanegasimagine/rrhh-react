import axios from 'axios';

const API = 'https://rrhh-react.herokuapp.com/api/v1';

export const getDepartamentos = async () => {
  try {
    const { data } = await axios.get(`${API}/departamento`, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
    return data;
    
  } catch (error) {
    throw new Error(error);
  }
};

export const getDepartamento = async ({ queryKey }) => {
  // eslint-disable-next-line no-unused-vars
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

export const getDepartamentoCount = async () => {
  try {
    const { data } = await axios.get(`${API}/departamento/get/count`);
    return data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};
