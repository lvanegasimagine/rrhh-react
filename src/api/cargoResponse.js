import axios from 'axios';

const API = 'http://localhost:4000/api/v1';

export const getCargos = async () => {
  const { data } = await axios.get(`${API}/cargo`);
  return data;
};

export const getCargo = async ({ queryKey }) => {
  const [_key, { id }] = queryKey;
  const { data } = await axios.get(`${API}/cargo/${id}`);
  return data;
}

export const createCargo = async (cargo) => {
  try {
    const {data} = await axios.post(`${API}/cargo`, cargo);
    return data;

  } catch (error) {
    // return throw new Error(error);
  }
}

export const updateCargo = async ({id, ...updateCargo}) => {
  const { data } = await axios.put(`${API}/cargo/${id}`, updateCargo);
  return data;
}

export const deleteCargo = async (id) => {
  const { data } = await axios.delete(`${API}/cargo/${id}`);
  console.log(data);
  return data;
}

export const getCargoCount = async () => {
  try {
    const { data } = await axios.get(`${API}/cargo/get/count`);
    return data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};
