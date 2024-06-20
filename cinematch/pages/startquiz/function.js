import axios from 'axios';

const API_URL = 'http://10.0.2.2:5207/api/dados';

export const fetchDados = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    throw error; 
  }
};
